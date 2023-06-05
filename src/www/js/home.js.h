
var now = new Date(Date.now());
var currentSlot1, currentSlot2, currentSlot3;

function setupHome() {
  var yesterday = new Date(Date.now());
  yesterday.setDate(yesterday.getDate() - 1);

  // adjust the events list
  let futureEvents = events.filter(function (event) {
    return Date.parse(event.date) >= yesterday;
  }).slice(0, {{ maxEvents }});

  setupHomeNextMeeting(futureEvents);
  setupHomeNowShowing();
  setupHomeComingSoon();
  // setupHomeEventsList(futureEvents);
  setupHomeRecommendations();
}

function setupHomeNextMeeting(events) {
  var meetings = [];
  var social = [];
  for (var event of events) {
    for (ev of event.events) {
      switch (ev.class) {
        case 'anime':
        case 'online':
          meetings.push(ev);
          break;

        case 'social':
          social.push(ev);
          break;
      }
    }
  }

  // next main meeting
  var nextMeeting = meetings[0];
  
  document.getElementById('next-meeting-date').innerHTML = 
    `<time datetime='${nextMeeting.date}'>
      <span class='day'>${nextMeeting.day}</span>
      <span class='month'>${nextMeeting.month}</span>
      <span class='year'>${nextMeeting.year}</span>
    </time>
    <div class='next-meeting-side focus-date-side'>
      ${nextMeeting.weekday}<br>${nextMeeting.time}
    </div>`;
  // document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
  if (document.getElementById('next-meeting-venue')) {
    document.getElementById('next-meeting-venue').innerHTML = nextMeeting.venue;
  }
  if (document.getElementById('next-meeting-address')) {
    document.getElementById('next-meeting-address').innerHTML = nextMeeting.address;
  }

  // next social
  if (social.length > 0) {
    var nextSocial = social[0];

    document.getElementById('next-social-date').innerHTML = 
      `<time datetime='${nextSocial.date}'>
        <span class='day'>${nextSocial.day}</span>
        <span class='month'>${nextSocial.month}</span>
        <span class='year'>${nextSocial.year}</span>
      </time>
      <div class='next-social-side focus-date-side'>
        <span class='next-social-title'>${nextSocial.name}</span>
        <br>${nextSocial.weekday} ${nextSocial.time}
      </div>`;
    // document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
    if (document.getElementById('next-social-venue')) {
      document.getElementById('next-social-venue').innerHTML = nextSocial.venue;
    }
    if (document.getElementById('next-social-address')) {
      document.getElementById('next-social-address').innerHTML = nextSocial.address;
    }
  } else {
    document.getElementById('section-next-social').remove();
  }
}

function setupHomeNowShowing() {

  // adjust the showing anime
  function showingAnime(slot) {
    var before = slot.filter(function (series) {
      var from = series.hasOwnProperty('displayFrom') ? series.displayFrom : series.from;
      return Date.parse(from) < now;
    });
    return before[before.length - 1];
  }

  currentSlot1 = showingAnime(slot1);
  currentSlot2 = showingAnime(slot2);
  currentSlot3 = showingAnime(slot3);

  function editSlot(id, series) {
    if (series.name == "") {
      document.getElementById(id).classList.add('hide');
      return;
    }

    document.getElementById(id+'name').innerHTML = '<p class="series-ident">'+(series.movie ? 'Movie' : 'Series')+'</p>'+series.name;
    var img = document.getElementById(id+'picture');
    img.setAttribute('src', 'images/series/'+series.picture+'.png');
    img.classList.add("show");

    var slotDate = document.getElementById(id+'date');
    if (slotDate !== null) {
      slotDate.innerHTML = "<span class='day'>"+series.day+"</span><span class='month'>"+series.month+"</span>";
    }

    if (series.movie) {
      document.getElementById(id).classList.add('movie');
    }

    if (series.rating) {
      document.getElementById(id+'rating').innerHTML = `<img class='rating-img rating-${series.rating}' src='images/rating/${series.rating}.svg'>` +
        `<div class='rating-hover rating-hover-${series.rating}'><span>Age rating: ${ratingText[series.rating]}</span><div class='rating__tag'></div></div>`;
    }
  }

  editSlot('slot1', currentSlot1);
  editSlot('slot2', currentSlot2);
  editSlot('slot3', currentSlot3);
}

// adjust the coming soon list
function futureN(items, number) {
  var after = items.filter(function(item) {
    return Date.parse(item.date) >= now;
  });
  return after.slice(0, number);
}

function excludeSeries(items, exclude) {
  excludeNames = exclude.map(function (item) {
    return item.name;
  });
  return items.filter(function (item) {
    return !excludeNames.includes(item.name);
  });
}

function setupHomeComingSoon() {
  var rowCutoffs = {1: 2, 2: 5, 3: 8, 4: 11};
  function findCutoff(items, maxRow) {
    for (var row = maxRow; row > 1; row--) {
      var cutoff = rowCutoffs[row];
      if (items >= cutoff)
        return cutoff;
    }
    return rowCutoffs[1];
  }

  // var comingSoonCutoff = findCutoff(comingSoon.length, options.comingSoonRows);
  comingSoon = futureN(comingSoon, 12);
  comingSoon = excludeSeries(comingSoon, [currentSlot1, currentSlot2, currentSlot3]);
  comingSoon = futureN(comingSoon, 8);

  var comingSoonHTML = '';
  for (item of comingSoon) {
    var html = `<figure class="series--right ${item.movie ? " movie" : ""}"><figcaption>`;
    if (item.movie) {
      html = html + "<p class='movie-ident'>Movie</p>";
    } else {
      html = html + "<p class='series-ident'>New series</p>";
    }
    html = html + `<h3>${item.name}</h3>`;
    if (!item.movie) {
      html = html + "<div class='series-info'><p class='starting'>Starting</p></div>";
    }
    html = html + 
      `<div class='info-line'><div>
        <time datetime="${item.date}">
          <span class='day'>${item.day}</span>
          <span class='month'>${item.month}</span>
          <span class='year'>${item.year}</span>
        </time>
      </div>`;
    if (item.trailer) {
      html = html + `<a class='trailer' href='${trailer}' target='_blank'>Trailer</a>`;
    }
    if (item.movie && item.time) {
      html = html + `<div class='movie-time'><p class='movie-weekday'>${item.weekday}</p><p class='movie-start-time'>${item.time}</p></div>`;
    }
    html = html + "</div>";
    if (item.rating) {
      html = html + 
        `<div class='rating'>
          <img class='rating-img rating-${item.rating}' src='images/rating/${item.rating}.svg'>
          <div class='rating-hover rating-hover-${item.rating}'>
            <span>Age rating: ${ratingText[item.rating]}</span>
            <div class='rating__tag'></div>
          </div>
        </div>`;
    }
    html = html + `</figcaption><img class='series-picture' src='images/series/${item.picture}.png'></figure>`;
    comingSoonHTML = comingSoonHTML + html;
  }
  document.getElementById('coming-soon').innerHTML = comingSoonHTML;

  if (comingSoon.length <= 2) {
    document.getElementById('coming-soon').classList.add('coming-soon--very-short');
  } else if (comingSoon.length <= 5) {
    document.getElementById('coming-soon').classList.add('coming-soon--short');
  }
}

function setupHomeEventsList() {
  var eventsHTML = '';
  var event;
  for (event of events) {
    var html = 
      `<article id='upcoming-${event.date}' class='event event-${event.class}'>
        <time datetime='${event.date}'>
          <span class='day'>${event.day}</span>
          <span class='month'>${event.month}</span>
          ${event.special ? "<span class='time__special'></span>" : ""}
        </time>\n`;
    for (ev of event.events) {
      var time = false;
      var a = "";
      var _a = "";
      if (ev.hasOwnProperty("link")) {
        a = "<a href='"+ev.link+"'>";
        _a = "</a>";
      }
      html = html + "<div class='event-detail event-detail-"+ev.class+"'>";
      if (ev.hasOwnProperty("picture") && ev.picture != "") {
        html = html + "<img src='images/series/"+ev.picture+".png'>";
      }
      if (ev.hasOwnProperty("prename") && ev.prename != "") {
        html = html + "<p class='series-ident'>"+ev.prename+"</p>";
      }
      html = html + "<h3>"+ev.name+"</h3>\n";
      if (ev.hasOwnProperty("time") || (ev.hasOwnProperty("venue") && ev.venue)) {
        html = html+"<p>"+a;
        if (ev.hasOwnProperty("venue") && ev.venue) {
          html = html + ev.venue;
          if (ev.hasOwnProperty("time")) {
            html = html + ", ";
            if (ev.hasOwnProperty("shortWeekday")) html = html + ev.shortWeekday + " ";
            html = html + ev.time;
          }
        } else {
          if (ev.hasOwnProperty("shortWeekday")) html = html + ev.shortWeekday + " ";
          html = html+ev.time;
        }

        html = html+_a+"</p>\n";
      }
      if (ev.price) {
        html = html + "<p>Club fee: "+ev.price+"</p>";
      }
      html = html+"</div>";
    };
    html = html + "</article>\n";
    eventsHTML = eventsHTML + html;
  }
  document.getElementById('events-list').innerHTML = eventsHTML;
}

function setupHomeRecommendations() {
  // pick a random recommendation
  console.log('Top 10: '+top10.length+' items');
  let index = Math.floor(Math.random() * top10.length);
  console.log('Top 10: item '+index);
  let top10pick = top10[index];
  console.log('Top 10:', top10pick);

  document.getElementById('recommendation__name').innerHTML = top10pick.name;
  let url = 'images/series/'+top10pick.picture+'.png';
  document.getElementById('recommendation__picture').setAttribute('src', url);

  let genres = top10pick.genre.map((genre) => {
    let slug = slugify(genre);
    return `<span class="genre genre-${slug}" data-genre="${slug}">${genre}</span>`;
  }).join(' ');
  document.getElementById('recommendation__genre').innerHTML = genres;
}

function setupHomeEpisodeHistory() {
  
}