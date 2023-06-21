const fs = require('fs');

const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const sass = require('node-sass');
// const ffmpeg = require('ffmpeg');
// const { exec } = require('child_process');
const _ = require('lodash');

const util = require('./make/util.js');
const video = require('./make/video.js');
const episodes = require('./make/episodes.js');

// partials
fs.readdir('./www/js', {encoding: 'utf8'}, (err, files) => {
  if (err) {
    console.log("Error reading partials dir:", err);
    return;
  }
  // console.log("JS partials", files);

  for (let file of files) {
    fs.readFile('./www/js/'+file, 'utf8', (err, data) => {
      if (err) {
        console.log("Error reading partial "+file+":", err);
        return;
      }

      let name = file.replace('.js.h', '_js');
      // console.log("Registering partial", name);
      Handlebars.registerPartial(name, data);
    });
  }
});

fs.readdir('./www/partials', {encoding: 'utf8'}, (err, files) => {
  if (err) {
    console.log("Error reading partials dir:", err);
    return;
  }
  // console.log("Partials", files);

  for (let file of files) {
    fs.readFile('./www/partials/'+file, 'utf8', (err, data) => {
      if (err) {
        console.log("Error reading partial "+file+":", err);
        return;
      }

      let name = file.replace('.html.h', '').replace(/-/g, '_');
      // console.log("Registering partial", name);
      Handlebars.registerPartial(name, data);
    });
  }
});

Handlebars.registerHelper('eq', function(value1, value2, options) {
  return value1 == value2;
});
Handlebars.registerHelper('json', function (obj) {
  return JSON.stringify(obj);
});
Handlebars.registerHelper('inc', function(value, options) {
  return parseInt(value) + 1;
});
Handlebars.registerHelper('slug', function(value) {
  value = value.toLowerCase();
  value = value.replaceAll(/[^a-z0-9]+/g, '-');
  return value;
});
Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 1; i <= n; ++i)
        accum += block.fn(i);
    return accum;
});

// read the data
let basData = util.readData();
let options = basData.options;

// combine the full list of past and future shows
let all_anime = [
  // ...basData.past_anime,
  ...basData.slot1,
  ...basData.slot2,
  ...basData.slot3,
].map(series => util.expandDate(series, series.from, '7pm'));
all_anime = all_anime.sort((a, b) => a.date - b.date);
basData.all_anime = all_anime;

// put together the list of episodes for recent-and-future shows
let skipWeeks = basData.events.filter((event) => event.class == 'skip').map((event) => util.formatShortDate(event.date));
console.log("Skip weeks:", skipWeeks);
basData.schedule = episodes.makeEpisodeList(basData.slot1, basData.slot2, basData.slot3, skipWeeks);

basData.historyYears = [];
let currentYear = util.formatYear(new Date());
for (let year = currentYear; year >= 2020; year--) {
  basData.historyYears.push(""+year);
}


// showing anime
basData.slot1 = util.currentAndFuture(basData.slot1.map(series => util.expandDate(series, series.from, '7pm')), 'from');
console.log("Slot 1:", basData.slot1.map(series => util.formatShortDate(series.from)).join(", "));
basData.slot1back = util.backdate(basData.slot1);
basData.series1 = _.isEmpty(basData.slot1) ? { name: '', picture: '' } : basData.slot1[0];
basData.nextSeries1 = _.isEmpty(basData.slot1) ? { name: '', picture: '' } : basData.slot1[1];

basData.slot2 = util.currentAndFuture(basData.slot2.map(series => util.expandDate(series, series.from, '8pm')), 'from');
console.log("Slot 2:", basData.slot2.map(series => util.formatShortDate(series.from)).join(", "));
basData.slot2back = util.backdate(basData.slot2);
basData.series2 = _.isEmpty(basData.slot2) ? { name: '', picture: '' } : basData.slot2[0];
basData.nextSeries2 = _.isEmpty(basData.slot2) ? { name: '', picture: '' } : basData.slot2[1];

basData.slot3 = util.currentAndFuture(basData.slot3.map(series => util.expandDate(series, series.from, '9pm')), 'from');
console.log("Slot 3:", basData.slot3.map(series => util.formatShortDate(series.from)).join(", "));
basData.slot3back = util.backdate(basData.slot3);
basData.series3 = _.isEmpty(basData.slot3) ? { name: '', picture: '' } : basData.slot3[0];
basData.nextSeries3 = _.isEmpty(basData.slot3) ? { name: '', picture: '' } : basData.slot3[1];

basData.movies = util.futureN(basData.movies.map(movie => util.expandDate(movie, movie.date, movie.time, 1)), 10, 'date');
_.each(basData.movies, movie => movie.movie = true);
basData.listedMovies = util.futureN(basData.movies, 2, 'date');
console.log("Movies:", basData.movies.map(movie => util.formatShortDate(movie.date)).join(", "));


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
  article.year = util.formatYear(article.date);
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
console.log("Yesterday:       ", util.formatShortDate(util.yesterday()));
let events = _.filter(basData.events, event => event.date >= util.yesterday());
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
    weekday: util.weekday(event.date),
    year: util.formatYear(event.date),
    shortWeekday: util.shortWeekday(event.date),
    month: util.formatShortMonth(event.date),
    special: event.class == 'cinema',
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
          weekday: util.weekday(date),
          shortWeekday: (movie ? util.shortWeekday(date) : ''),
          time: hour+"pm",
          day: date.getDate(),
          month: util.formatShortMonth(date),
          year: util.formatYear(date),
          prename: (movie ? 'Movie' : 'New series'),
          name: series.name,
          picture: series.picture,
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
        year: util.formatYear(date),
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
basData.onlineDates = basData.onlineDates.map((date) => util.formatShortDate(date))

for (var i = 0; i < 30; i++) {
  let date = new Date(tuesday);
  date.setDate(date.getDate() + i*7);

  let online = date < greatReturn || basData.onlineDates.includes(util.formatShortDate(date));
  // console.log("Comparing dates: ", date.getDate(), greatReturn.getDate());

  let event = {
    date: date,
    dateLong: util.formatLongDate(date) + ", 7pm",
    mediumDate: util.formatMediumDate(date),
    shortDate: util.formatShortDate(date),
    time: "7pm",
    weekday: "Tuesday",
    shortWeekday: util.shortWeekday(date),
    day: date.getDate(),
    month: util.formatShortMonth(date),
    year: util.formatYear(date),
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

// group the events by date, summarising class
basData.eventsByDate = _(events).groupBy(e => util.formatShortDate(e.date)).map((evs, grp) => {
  let cls = evs[0].class;
  // switch colours on days with new series
  // if (cls == 'online' || cls == 'anime') {
  //   for (let ev of evs) {
  //     if (ev.hasOwnProperty('class') && ev.cls != "") {
  //       if (ev.class != 'online' && ev.class != 'anime') {
  //         cls = ev.class;
  //       }
  //     }
  //   }
  // }
  let special = false;
  for (let ev of evs) {
    if (ev.special) {
      special = true;
    }
  }
  
  return {
    date: evs[0].date,
    shortDate: grp,
    month: evs[0].month,
    day: evs[0].day,
    weekday: evs[0].weekday,
    year: evs[0].year,
    class: cls,
    events: evs,
    special: special
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

let socialEvents = _.filter(events, event => {
  switch(event.class) {
    case 'social':
    case 'cinema':
      return true;

    default:
      return false;
  }
})

if (socialEvents.length > 0) {
  let nextSocial = socialEvents[0];
  basData.nextSocialTitle = nextSocial.name;
  basData.nextSocialDay = util.formatDay(nextSocial.date);
  basData.nextSocialMonth = util.formatShortMonth(nextSocial.date);
  basData.nextSocialWeekday = util.weekday(nextSocial.date);
  basData.nextSocialYear = util.formatYear(nextSocial.date);
  basData.nextSocialTime = nextSocial.time;
  basData.nextSocialVenue = nextSocial.venue;
}

// Recommendations

basData.allTop10 = []

_.each(basData.top10, person => {
  _.each(person.anime, series => {
    basData.allTop10.push(series);
    if (fs.existsSync('series/'+series.picture+'.png')) {
      fs.copyFile('series/'+series.picture+'.png', '../dist/images/series/'+series.picture+'.png', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
});

// compile sources

function writeTemplate(src, dest, data, callback = (err) => {}) {
    let sourceData = fs.readFileSync(src, 'utf-8');
    let template = Handlebars.compile(sourceData);
    let compiled = template(data);
    fs.writeFile('../dist/'+dest, compiled, 'utf-8', callback);
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

  writeTemplate('www/js/script.js.h', 'script.js', basData, (err) => {
    let scriptData = fs.readFileSync('../dist/script.js');
    basData.scriptVersion = util.md5sum(scriptData);
    
    writeTemplate('www/index2.html.h', 'index.html', basData);
    writeTemplate('www/history.html.h', 'history.html', basData);
    // writeTemplate('www/bbq.html.h', 'bbq.html', basData);
    writeTemplate('www/recommendations2.html.h', 'recommendations.html', basData);
  });
});


video.makeVideos(basData);
