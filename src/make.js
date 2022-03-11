const fs = require('fs');

const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const sass = require('node-sass');
// const ffmpeg = require('ffmpeg');
const { exec } = require('child_process');
const _ = require('lodash');

const util = require('./util.js');

Handlebars.registerHelper('json', function (obj) {
  return JSON.stringify(obj);
});

// read the data
let basData = fs.readFileSync('data.yml');
basData = yaml.safeLoad(basData);

basData = _.defaults({
  maxEvents: 18,
  windowEvents: 20,
  maxTweets: 10,
}, basData);

let options = basData.options;

function expandDate(target, date = null, time = null, leeway = 0) {
  if (date === null) {
    date = target.date;
  }
  if (time !== null) {
    time = time.trim();
    let pm = true;
    if (time.match(/pm$/)) {
      time = time.replace(/pm$/, '');
    } else if (time.match(/am$/)) {
      pm = false;
      time = time.replace(/am$/, '');
    }
    time = parseInt(time) + leeway;
    date.setHours(time + (pm ? 12 : 0));
    target.date = date;
  }

  target.day = date.getDate();
  target.month = util.formatShortMonth(date);
  target.weekday = util.weekday(date);
  return target;
}

// showing anime
basData.slot1 = util.currentAndFuture(basData.slot1.map(series => expandDate(series, series.from, '7pm')), 'from');
console.log("Slot 1:", basData.slot1.map(series => util.formatShortDate(series.from)).join(", "));
basData.slot1back = util.backdate(basData.slot1);
basData.series1 = _.isEmpty(basData.slot1) ? { name: '', picture: '' } : basData.slot1[0];
basData.nextSeries1 = _.isEmpty(basData.slot1) ? { name: '', picture: '' } : basData.slot1[1];

basData.slot2 = util.currentAndFuture(basData.slot2.map(series => expandDate(series, series.from, '8pm')), 'from');
console.log("Slot 2:", basData.slot2.map(series => util.formatShortDate(series.from)).join(", "));
basData.slot2back = util.backdate(basData.slot2);
basData.series2 = _.isEmpty(basData.slot2) ? { name: '', picture: '' } : basData.slot2[0];
basData.nextSeries2 = _.isEmpty(basData.slot2) ? { name: '', picture: '' } : basData.slot2[1];

basData.slot3 = util.currentAndFuture(basData.slot3.map(series => expandDate(series, series.from, '9pm')), 'from');
console.log("Slot 3:", basData.slot3.map(series => util.formatShortDate(series.from)).join(", "));
basData.slot3back = util.backdate(basData.slot3);
basData.series3 = _.isEmpty(basData.slot3) ? { name: '', picture: '' } : basData.slot3[0];
basData.nextSeries3 = _.isEmpty(basData.slot3) ? { name: '', picture: '' } : basData.slot3[1];

basData.movies = util.futureN(basData.movies.map(movie => expandDate(movie, movie.date, movie.time, 1)), 10, 'date');
_.each(basData.movies, movie => movie.movie = true);
basData.listedMovies = util.futureN(basData.movies, 2, 'date');
console.log("Movies:", basData.movies.map(movie => util.formatShortDate(movie.date)).join(", "));

let pastAnime = [
  ...basData.past_anime,

];

let comingSoon = [
  ...util.future(basData.slot1, 'from'),
  ...util.future(basData.slot2, 'from'),
  ...util.future(basData.slot3, 'from'),
  ...util.future(basData.movies, 'date')];
comingSoon = util.future(comingSoon);
basData.comingSoon = comingSoon;
console.log("Coming Soon:", comingSoon.map(item => item.name+" "+util.formatShortDate(item.date)).join(", "));

// copy the images for the series
_.each([basData.slot1, basData.slot2, basData.slot3, basData.movies], slot => {
  _.each(slot, series => {
    if (fs.existsSync('series/'+series.picture+'.png')) {
      fs.copyFile('series/'+series.picture+'.png', '../dist/images/series/'+series.picture+'.png', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
});


// news
_.each(basData.news, article => {
  article.day = article.date.getDate();
  article.month = util.formatShortMonth(article.date);
});
basData.news = _.sortBy(basData.news, 'date').reverse();
basData.freshNews = _.take(basData.news, basData.options.newsCutoff);
basData.staleNews = basData.news.slice(basData.options.newsCutoff, 20);

// future events
let venueAddress = {
  '': '',
  'The White Hart': 'London Road, Basingstoke RG21 4AE',
  'The Tea Bar': '9 London Rd, Basingstoke RG21 7NT',
};

let now = new Date(Date.now());
console.log("Today:           ", util.formatShortDate(now));
let events = _.filter(basData.events, event => event.date >= now);
let skipDates = [];
events = _.map(events, event => {
  event = _.defaults(event, {
    time: ''
  });
  event = _.defaults(event, {
    class: 'social',
    dateLong: util.formatLongDate(event.date) + (event.time != '' ? ', '+util.formatShortTime(event.time) : ''),
    mediumDate: util.formatMediumDate(event.date),
    shortDate: util.formatShortDate(event.date),
    day: event.date.getDate(),
    month: util.formatShortMonth(event.date),
  });
  let venue = "";
  switch(event.class) {
    case 'social':
      venue = options.online ? 'Discord' : 'The White Hart';
      break;
    case 'skip':
      skipDates[event.shortDate] = true;
      break;
    default:
      venue = "";
      break;
  }
  return _.defaults(event, {
    venue: venue,
    address: venueAddress[venue],
  })
});
console.log("Skip dates:", skipDates);

// add in events for the new series starting
_.each([basData.slot1, basData.slot2, basData.slot3], (slot, i) => {
  _.each(slot, series => {
    if (_.has(series, "name")) {
      let hide = _.has(series, "hide") ? series.hide : false;
      let date = new Date(series.from);

      if (date > now && !hide) {
        // console.log("Series date", date);
        let hour = 7+i;
        date.setHours(hour+12)
        date.setMinutes(5)
        let movie = _.has(series, "movie") ? series.movie : false;

        let event = {
          date: date,
          dateLong: util.formatLongDate(date) + ", "+hour+"pm",
          mediumDate: util.formatMediumDate(date),
          shortDate: util.formatShortDate(date),
          // time: hour+"pm",
          day: date.getDate(),
          month: util.formatShortMonth(date),
          name: (movie ? 'Movie: ' : 'New series: ')+series.name,
          class: 'new-series'
        }
        events.push(event);
      }
    }
  });
});

_.each(basData.movies, movie => {
  if (_.has(movie, "name")) {
    let date = new Date(movie.date);
    let time = _.has(movie, "time") ? movie.time : "7pm";

    if (date > now) {
      let event = {
        date: date,
        dateLong: util.formatLongDate(date) + ", "+time,
        mediumDate: util.formatMediumDate(date),
        shortDate: util.formatShortDate(date),
        time: time,
        weekday: util.weekday(date),
        day: date.getDate(),
        month: util.formatShortMonth(date),
        name: 'Movie: '+movie.name,
        class: 'movie',
        venue: movie.venue
      };
      events.push(event);
    }
  }
});

// add in the tuesday events
let tuesday = new Date(Date.now());
let dow = 2 - tuesday.getDay();
if (dow < 0) dow += 7;
tuesday.setDate(tuesday.getDate() + dow);
tuesday.setHours(19);
tuesday.setMinutes(0);
tuesday.setSeconds(0);
tuesday.setMilliseconds(0);

const greatReturn = new Date('April 5, 2022 00:00:00');

for (var i = 0; i < 30; i++) {
  let date = new Date(tuesday);
  date.setDate(date.getDate() + i*7);

  let online = date < greatReturn;
  // console.log("Comparing dates: ", date.getDate(), greatReturn.getDate());

  let event = {
    date: date,
    dateLong: util.formatLongDate(date) + ", 7pm",
    mediumDate: util.formatMediumDate(date),
    shortDate: util.formatShortDate(date),
    time: "7pm",
    weekday: "Tuesday",
    day: date.getDate(),
    month: util.formatShortMonth(date),
    name: online ? 'Online Meeting' : 'Anime Society Meeting',
    class: online ? 'online' : 'anime',
    price: online ? null : "&pound;4",
    venue: online ? 'Discord' : 'The White Hart',
    address: online ? '' : venueAddress['The White Hart']
  }
  if (_.has(skipDates, event.shortDate)) {
    console.log("Skipping event:", event.shortDate);
    continue;
  }
  events.push(event);
}
events = _.sortBy(events, 'date');

basData.events = events.slice(0, basData.windowEvents);
basData.allEvents = events;

basData.eventsByDate = _(events).groupBy(e => util.formatShortDate(e.date)).map((evs, grp) => {
  return {
    date: evs[0].date,
    shortDate: grp,
    month: evs[0].month,
    day: evs[0].day,
    weekday: evs[0].weekday,
    class: evs[0].class,
    events: evs,
  };
}).values().sortBy('shortDate').value().slice(0, basData.windowEvents);
// console.log(JSON.stringify(basData.eventsByDate, null, 2));

// put the 'next event' at the top
let mainEvents = _.filter(events, event => {
  switch (event.class) {
    case 'esports':
    case 'cinema':
    case 'skip':
    case 'new-series':
      return false;

    default:
      return true;
  }
});
let nextEvent = mainEvents[0];
// console.log("Next event:", nextEvent);
basData.nextMeeting = util.formatLongDate(nextEvent.date);
basData.nextMeetingVenue = nextEvent.venue;
basData.nextMeetingAddress = venueAddress[nextEvent.venue];



// compile sources

function writeTemplate(src, dest, data) {
    let sourceData = fs.readFileSync(src, 'utf-8');
    let template = Handlebars.compile(sourceData);
    let compiled = template(data);
    fs.writeFile('../dist/'+dest, compiled, 'utf-8', err => {});
}

// stylesheet
let sassOptions = {};
sass.render({
  file: 'scss/style.scss',
  sassOptions
}, function(err, result) {
  if (err) {
    console.log(err);
  }
  basData.stylesheetVersion = util.md5sum(result.css);
  fs.writeFile('../dist/style.css', result.css, 'utf-8', err => {});

  writeTemplate('www/index.html.h', 'index.html', basData);
  writeTemplate('www/script.js.h', 'script.js', basData);
});


// bookends

// collect the dates on which series change
let bookends = {};

_.each({slot1: basData.slot1, slot2: basData.slot2, slot3: basData.slot3}, (slot, slotName) => {
  _.each(slot, series => {
    var dateKey = util.formatShortDate(series.from);
    bookends[dateKey] = {
      date: series.from,
      name: dateKey,
      slot1: null,
      slot2: null,
      slot3: null
    };
  });
});

_.each({slot1: basData.slot1, slot2: basData.slot2, slot3: basData.slot3}, (slot, slotName) => {
  _.each(slot, series => {
    var dateKey = util.formatShortDate(series.from);
    // console.log(`On ${dateKey} slot ${slotName} begin ${series.name}`);
    bookends[dateKey][slotName] = series;
  });
});
// console.log(bookends);

let bookendDates = _.keys(bookends);
bookendDates = bookendDates.sort();
bookends = _.map(bookendDates, dateKey => bookends[dateKey]);

// fill in the ongoing series from one date to the next
let slot1 = null, slot2 = null, slot3 = null;
_.each(bookends, bookend => {
  if (bookend.slot1 !== null) {
    slot1 = bookend.slot1;
  } else {
    bookend.slot1 = slot1;
  }
  if (bookend.slot2 !== null) {
    slot2 = bookend.slot2;
  } else {
    bookend.slot2 = slot2;
  }
  if (bookend.slot3 !== null) {
    slot3 = bookend.slot3;
  } else {
    bookend.slot3 = slot3;
  }
});

bookends = util.currentAndFuture(bookends);
// console.log(bookends);

_.each(bookends, bookend => {
  if (bookend.slot1 === null || bookend.slot1.picture === null || bookend.slot1.picture == "") {
    console.log("Skipping bookend:", bookend.name, "due to missing slot 1");
  }
  if (bookend.slot2 === null || bookend.slot2.picture === null || bookend.slot2.picture == "") {
    console.log("Skipping bookend:", bookend.name, "due to missing slot 2");
  }
  if (bookend.slot3 === null || bookend.slot3.picture === null || bookend.slot3.picture == "") {
    console.log("Skipping bookend:", bookend.name, "due to missing slot 3");
  }

  console.log("Bookend:", bookend.name);
  let series1picture = 'series/'+bookend.slot1.picture+'.png';
  let series2picture = 'series/'+bookend.slot2.picture+'.png';
  let series3picture = 'series/'+bookend.slot3.picture+'.png';

  let shadow255 = "video/shadow255.png";
  let shadow315 = "video/shadow315.png";

  if (fs.existsSync(`../bookends/bookend-${bookend.name}.mp4`)) {
    console.log("Skipping bookend:", bookend.name);
  } else {
    let frameRate = 29.976;
    let bookendDur = 15;

    // let plateDur = 35;
    let plateOffset = 0.5;
    let plateFade = 1.5;
    // let plateEndBuf = 3;
    let plateStart = 2;

    let cmd = `ffmpeg -y -i video/bookend-base.mkv -loop 1 -i ${series1picture} -loop 1 -i ${series2picture} -loop 1 -i ${series3picture} -loop 1 -i ${shadow315} -an `+
      `-filter_complex "`+

      `[1:v] fps=fps=${frameRate},fade=in:st=${plateStart-plateOffset*2}:d=${plateFade}:alpha=1 [s1];`+
      `[2:v] fps=fps=${frameRate},fade=in:st=${plateStart-plateOffset}:d=${plateFade}:alpha=1 [s2];`+
      `[3:v] fps=fps=${frameRate},fade=in:st=${plateStart}:d=${plateFade}:alpha=1 [s3];`+
      `[4:v] fps=fps=${frameRate},fade=in:st=${plateStart-plateOffset*2}:d=${plateFade}:alpha=1 [sh1];` +
      `[4:v] fps=fps=${frameRate},fade=in:st=${plateStart-plateOffset}:d=${plateFade}:alpha=1 [sh2];` +
      `[4:v] fps=fps=${frameRate},fade=in:st=${plateStart}:d=${plateFade}:alpha=1 [sh3];` +

      `[0:v][s1] overlay=205:135 [in1]; `+
      `[in1][s2] overlay=555:135 [in2]; `+
      `[in2][s3] overlay=905:135 [in3]; `+

      `[in3][sh1] overlay=200:135 [in4]; `+
      `[in4][sh2] overlay=550:135 [in5]; `+
      `[in5][sh3] overlay=900:135 [in6]; `+

      `[in6] fade=in:st=0:d=1 [in7]; `+
      `[in7] fade=out:st=14:d=1" `+
      `-t 00:00:15 ../bookends/bookend-${bookend.name}.mp4`;

    console.log(cmd);

    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
        let cmd2 = `ffmpeg -y -i ../bookends/bookend-${bookend.name}.mp4 -ss 7 -vframes 1 -f image2 ../bookends/preview-${bookend.name}.png`;

        console.log(cmd2);

        exec(cmd2, (err, stdout, stderr) => {
          if (err) {
            //some err occurred
            console.error(err);
          } else {
          }
        });
      }
    });
  }


  if (fs.existsSync(`../bookends/interval-${bookend.name}.mkv`)) {
    console.log("Skipping interval:", bookend.name);
  } else {
    let frameRate = 29.976;
    let intervalDur = 20 * 60;
    let fade = 2;
    let fadeStart = intervalDur - fade;

    let plateDur = 35;
    let plateOffset = 0.5;
    let plateFade = 1.5;
    let plateEndBuf = 3;
    let plateStart = intervalDur - plateEndBuf - plateDur;
    let plateEnd = intervalDur - plateEndBuf;

    // console.log(`  Interval dur = ${intervalDur}`);
    // console.log(`  Fade start = ${fadeStart}`);
    // console.log(`  Fade dur = ${fade}`);

    // console.log(`  Plate dur = ${plateDur}`);
    // console.log(`  Plate fade dur = ${plateFade}`);
    // console.log(`  Plate start = ${plateStart}`);
    // console.log(`  Plate end = ${plateEnd}`);

    let cmd = `ffmpeg -y -i video/interval-base5.mkv -loop 1 -i ${series1picture} -loop 1 -i ${series2picture} -loop 1 -i ${series3picture} -loop 1 -i ${shadow255} -c:a copy -filter_complex "`+

      `[1:v] fps=fps=${frameRate},scale=255x366,fade=in:st=${plateStart-plateOffset*2}:d=${plateFade}:alpha=1 [s1];`+
      `[2:v] fps=fps=${frameRate},scale=255x366,fade=in:st=${plateStart-plateOffset}:d=${plateFade}:alpha=1 [s2];`+
      `[3:v] fps=fps=${frameRate},scale=255x366,fade=in:st=${plateStart}:d=${plateFade}:alpha=1 [s3];`+
      `[4:v] fps=fps=${frameRate},scale=265x376,fade=in:st=${plateStart-plateOffset*2}:d=${plateFade}:alpha=1 [sh1];` +
      `[4:v] fps=fps=${frameRate},scale=265x376,fade=in:st=${plateStart-plateOffset}:d=${plateFade}:alpha=1 [sh2];` +
      `[4:v] fps=fps=${frameRate},scale=265x376,fade=in:st=${plateStart}:d=${plateFade}:alpha=1 [sh3];` +

      `[0:v][s1] overlay=425:327 [in1]; `+
      `[in1][s2] overlay=710:327 [in2]; `+
      `[in2][s3] overlay=995:327 [in3]; `+

      `[in3][sh1] overlay=420:327 [in4]; `+
      `[in4][sh2] overlay=705:327 [in5]; `+
      `[in5][sh3] overlay=990:327 [in6]; `+

      `[in6] fade=out:st=${fadeStart}:d=${fade}" `+
      // `[in3] fade=in:0:60 [in4]; `+
      // `[in3] fade=out:35911:60" `+
      `-t 00:20:00 ../bookends/interval-${bookend.name}.mkv`;

    console.log(cmd);

    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
      }
    });
  }
});
