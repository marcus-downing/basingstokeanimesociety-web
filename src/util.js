const crypto = require('crypto')

const _ = require('lodash');

// date formats
let shortMonthFormat = new Intl.DateTimeFormat('en-GB', { month: 'short' });
function formatShortMonth(date) {
  return shortMonthFormat.format(date);
}

function padNumber(num, digits) {
  num = '0'.repeat(digits)+num;
  num = num.substr(num.length - digits);
  return num;
}

let shortDateFormat = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
function formatShortDate(date) {
  let parts = _.keyBy(shortDateFormat.formatToParts(date), 'type');
  return parts.year.value+"-"+padNumber(parts.month.value, 2)+"-"+padNumber(parts.day.value, 2);
}

let longDateFormat = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
function formatLongDate(date) {
  let parts = _.keyBy(longDateFormat.formatToParts(date), 'type');
  return parts.weekday.value+", "+parts.day.value+" "+parts.month.value+" "+parts.year.value;
}

function formatShortTime(time) {
  return time;
}

// date arrangmeent
let now = new Date(Date.now());
console.log("Today:           ", formatShortDate(now));

// find all future items, as well as
function currentAndFuture(items, key = 'date', requireName = true) {
  items = _.sortBy(items, key);
  if (requireName) {
    items = _.filter(items, item => _.has(item, "name"));
  }

  let [before, after] = _.partition(items, item => item[key] < now);
  let current = before[before.length - 1];
  if (current !== undefined) {
    after.unshift(current);
  }
  return after;
}

function backdate(items, key = 'from') {
  return _.map(items, item => {
    if (!_.has(item, key)) {
      return item;
    }

    let date = new Date(item[key]);
    date.setTime(item[key].getTime());
    date.setDate(date.getDate() - 7);
    date.setHours(22);
    date.setMinutes(0);

    item = _.clone(item);
    item[key] = date;

    return item;
  });
}

function md5sum(data, digits = 6) {
  let hash = crypto.createHash('md5').update(data).digest("hex");
  return hash.substr(0, digits);
}

module.exports = {
  formatShortMonth,
  formatShortDate,
  formatLongDate,
  formatShortTime,
  currentAndFuture,
  backdate,
  md5sum,
};
