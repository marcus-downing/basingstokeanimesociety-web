const fs = require('fs');

const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const sass = require('node-sass');
const _ = require('lodash');

Handlebars.registerHelper('json', function (obj) {
  return JSON.stringify(obj);
});

let basData = fs.readFileSync('data.yml');
basData = yaml.safeLoad(basData);

basData = _.defaults({
  maxEvents: 8,
  maxTweets: 3,
}, basData);

// showing anime
let now = new Date(Date.now());

function sortedSlot(slot) {
  slot = _.sortBy(slot, 'from');
  let [before, after] = _.partition(slot, series => series.from < now);
  let current = before[before.length - 1];
  after = _.filter(after, series => _.has(series, "name"));
  after.unshift(current);
  return after;
}

basData.slot1 = sortedSlot(basData.slot1);
basData.series1 = _.isEmpty(basData.slot1) ? { name: '', picture: '' } : basData.slot1[0];
basData.slot2 = sortedSlot(basData.slot2);
basData.series2 = _.isEmpty(basData.slot2) ? { name: '', picture: '' } : basData.slot2[0];
basData.slot3 = sortedSlot(basData.slot3);
basData.series3 = _.isEmpty(basData.slot3) ? { name: '', picture: '' } : basData.slot3[0];

function copySeriesImages(slot) {
  _.each(slot, series => {
    fs.copyFile('series/'+series.picture+'.png', '../dist/images/series/'+series.picture+'.png', (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

copySeriesImages(basData.slot1);
copySeriesImages(basData.slot2);
copySeriesImages(basData.slot3);

// future events
let shortMonthFormat = new Intl.DateTimeFormat('en-GB', { month: 'short' });

let longDateFormat = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
function formatLongDate(date) {
  let parts = _.keyBy(longDateFormat.formatToParts(date), 'type');
  return parts.weekday.value+", "+parts.day.value+" "+parts.month.value+" "+parts.year.value;
}

let venueAddress = {
  'The White Hart': 'London Road, Basingstoke RG21 4AE',
  'The Tea Bar': '9 London Rd, Basingstoke RG21 7NT',
};

let events = _.filter(basData.events, event => event.date >= now);
events = _.map(events, event => {
  event = _.defaults(event, {
    class: 'social',
    dateLong: formatLongDate(event.date),
    day: event.date.getDate(),
    month: shortMonthFormat.format(event.date),
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
    dateLong: formatLongDate(date),
    day: date.getDate(),
    month: shortMonthFormat.format(date),
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
basData.nextMeeting = formatLongDate(nextEvent.date);
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

