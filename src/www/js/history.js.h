
let longDateFormat = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
function formatLongDate(date) {
  try {
    let parts = {};
    for (let part of longDateFormat.formatToParts(date)) {
      parts[part.type] = part.value;
    }
    return parts.weekday+", "+parts.day+" "+parts.month+" "+parts.year;
  } catch(err) {
    console.error("Bad date", date);
    console.error(err);
    return "";
  }
}

let shortDateFormat = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
function formatShortDate(date) {
  try {
    let parts = {};
    for (let part of shortDateFormat.formatToParts(date)) {
      parts[part.type] = part.value;
    }
    return parts.year+"-"+padNumber(parts.month, 2)+"-"+padNumber(parts.day, 2);
  } catch(err) {
    console.error("Bad date", date);
    console.error(err);
    return "";
  }
}

function padNumber(num, digits) {
  num = '0'.repeat(digits)+num;
  num = num.substr(num.length - digits);
  return num;
}


function setupHistory() {
  // history
  let now = new Date(Date.now());
  let pastAnime = allAnime.filter((series) => new Date(series.from) < now);
  let recentAnime = pastAnime.slice(pastAnime.length - 8).reverse();

  let historyHtml = [
    `<div class='history-tab-pane pane pane--show' data-pane='recent'>
      <div class="series-grid">
        ${recentAnime.map((series) => template_series(series, {
          showGenres: true,
          info: series.month,
        })).join("")}
      </div>
    </div>`];

  for (let year of historyYears) {
    let yearAnime = pastAnime.filter((series) => series.year == year);

    historyHtml.push(
      `<div class='history-tab-pane pane' data-pane='${year}'>
        <div class='series-grid'>
          ${yearAnime.map((series) => template_series(series, {
            showGenres: true,
            info: series.month,
          })).join("")}
        </div>
      </div>`);
  }
  document.getElementById('history-results').innerHTML = historyHtml.join("");

  // episodes
  let tuesday = new Date(Date.now());
  while (tuesday.getDay() != 2) {
    let tuesdayDom = tuesday.getDate();
    tuesday.setDate(tuesdayDom - 1);
  }

  let threshold = new Date(tuesday);
  threshold.setDate(threshold.getDate() - 60);

  function minus1week(from) {
    let date = new Date(from);
    date.setDate(date.getDate() - 7);
    return date;
  }

  let episodeHtml = [];
  for (let date = tuesday; date > threshold; date = minus1week(date)) {
    let shortdate = formatShortDate(date);
    let longdate = formatLongDate(date);

    if (schedule.hasOwnProperty(shortdate)) {
      let slots = schedule[shortdate];

      episodeHtml.push(`
        <h2 class='underline'>${longdate}</h2>

        <div class='c3e'>
          ${slots.slot1 ? template_series(slots.slot1.series, {
            info: "Episodes: "+slots.slot1.episodes
          }) : ''}

          ${slots.slot2 ? template_series(slots.slot2.series, {
            info: "Episodes: "+slots.slot2.episodes
          }) : ''}

          ${slots.slot3 ? template_series(slots.slot3.series, {
            info: "Episodes: "+slots.slot3.episodes
          }) : ''}
        </div>`);
    }
  }

  document.getElementById('history-episode-list').innerHTML = episodeHtml.join("");

}
