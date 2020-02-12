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
  maxEvents: 12,
  maxTweets: 10,
}, basData);

// showing anime
basData.slot1 = util.currentAndFuture(basData.slot1, 'from');
basData.slot1back = util.backdate(basData.slot1);
basData.series1 = _.isEmpty(basData.slot1) ? { name: '', picture: '' } : basData.slot1[0];

basData.slot2 = util.currentAndFuture(basData.slot2, 'from');
basData.slot2back = util.backdate(basData.slot2);
basData.series2 = _.isEmpty(basData.slot2) ? { name: '', picture: '' } : basData.slot2[0];

basData.slot3 = util.currentAndFuture(basData.slot3, 'from');
basData.slot3back = util.backdate(basData.slot3);
basData.series3 = _.isEmpty(basData.slot3) ? { name: '', picture: '' } : basData.slot3[0];

// copy the images for the series
_.each([basData.slot1, basData.slot2, basData.slot3], slot => {
  _.each(slot, series => {
    fs.copyFile('series/'+series.picture+'.png', '../dist/images/series/'+series.picture+'.png', (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
});

// future events
let venueAddress = {
  'The White Hart': 'London Road, Basingstoke RG21 4AE',
  'The Tea Bar': '9 London Rd, Basingstoke RG21 7NT',
};

let now = new Date(Date.now());
let events = _.filter(basData.events, event => event.date >= now);
events = _.map(events, event => {
  event = _.defaults(event, {
    class: 'social',
    dateLong: util.formatLongDate(event.date) + (event.time != '' ? ', '+util.formatShortTime(event.time) : ''),
    day: event.date.getDate(),
    month: util.formatShortMonth(event.date),
    venue: 'The White Hart',
  });
  return _.defaults(event, {
    address: venueAddress[event.venue],
  })
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

for (var i = 0; i < 30; i++) {
  let date = new Date(tuesday);
  date.setDate(date.getDate() + i*7);
  let event = {
    date: date,
    dateLong: util.formatLongDate(date) + ", 7pm",
    time: "7pm",
    price: "&pound;4",
    day: date.getDate(),
    month: util.formatShortMonth(date),
    name: 'Anime Society Meeting',
    class: 'anime',
    venue: 'The White Hart',
    address: venueAddress['The White Hart']
  }
  events.push(event);
}
events = _.sortBy(events, 'date');

basData.events = events.slice(0, basData.maxEvents);
basData.allEvents = events;

// put the 'next event' at the top
let nextEvent = events[0];
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
  fs.writeFile('../dist/style.css', result.css, 'utf-8', err => {});
});

writeTemplate('www/index.html.h', 'index.html', basData);
writeTemplate('www/script.js.h', 'script.js', basData);


// bookends

// collect the dates on which series change
let bookends = {};
_.each({slot1: basData.slot1, slot2: basData.slot2, slot3: basData.slot3}, (slot, slotName) => {
  _.each(slot, series => {
    var dateKey = util.formatShortDate(series.from);
    if (!_.has(bookends[dateKey])) {
      bookends[dateKey] = {
        date: series.from,
        name: dateKey,
        slot1: null,
        slot2: null,
        slot3: null
      };
    }

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
  console.log("Bookend:", bookend.name);
  let series1picture = 'series/'+bookend.slot1.picture+'.png';
  let series2picture = 'series/'+bookend.slot2.picture+'.png';
  let series3picture = 'series/'+bookend.slot3.picture+'.png';
  let cmd = `ffmpeg -y -i video/bookends-base.avi -i ${series1picture} -i ${series2picture} -i ${series3picture} -an `+
    `-filter_complex "[0:v][1:v] overlay=193:125:enable='between(t,0,16)' [in1]; `+
    `[in1][2:v] overlay=553:125:enable='between(t,0,16)' [in2]; `+
    `[in2][3:v] overlay=910:125:enable='between(t,0,16)' [in3]; `+
    `[in3] fade=in:0:60 [in4]; `+
    `[in4] fade=out:420:60" `+
    `../bookends/${bookend.name}.mp4`;

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
    }
  });
});
