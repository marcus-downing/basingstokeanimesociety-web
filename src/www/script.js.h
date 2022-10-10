var slot1 = {{{json slot1back}}};
var slot2 = {{{json slot2back}}};
var slot3 = {{{json slot3back}}};
// var movies = {{{json movies}}};
var comingSoon = {{{json comingSoon}}};

var events = {{{json eventsByDate}}};

var options = {{{json options}}};

var ratingText = {"u": "Universal", "pg": "Parental Guidance", "12": "12 and older", "15": "15 and older"};

// select a background image
function selectBackground() {
    var DAY_LIMIT = 6;
    var NIGHT_LIMIT = 9;

    var hour = new Date().getHours();
    var isDay = hour >= 6 && hour < 18;
    var bgNum = 1+Math.floor(Math.random() * (isDay ? DAY_LIMIT : NIGHT_LIMIT));
    var bodyClass = (isDay ? "day day-" : "night night-")+bgNum;

    document.getElementsByTagName("BODY")[0].className = bodyClass;
}

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

window.onload = function () {
  if (isHome) {
    setupHome();
  }

  if (isRecommendations) {
    setupRecommendations();
  }

  setupSlideshow();

  // add hover on all the rating symbols
  function addRatingHover(item) {
    var img = item.getElementsByClassName("rating-img")[0];
    var hover = item.getElementsByClassName("rating-hover")[0];
    var tag = item.getElementsByClassName("rating__tag")[0];

    if (img === undefined) {
      return;
    }

    img.addEventListener("mouseover", function(event) {
      hover.classList.add("rating-hover--show");

      var imgbox = img.getBoundingClientRect();
      var hoverbox = hover.getBoundingClientRect();

      var left = imgbox.left - hoverbox.left + 17;
      tag.style.left = left+"px";
    });
    img.addEventListener("mouseout", function(event) {
      hover.classList.remove("rating-hover--show");
    });
  }

  var ratingElements = document.getElementsByClassName('rating');
  for (var item of ratingElements) {
    addRatingHover(item);
  }

  selectBackground();
};
setInterval(selectBackground, 300000); // 5 minutes

function setupHome() {
  var now = new Date(Date.now());
  var yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  // adjust the showing anime
  function showingAnime(slot) {
    var before = slot.filter(function (series) {
      var from = series.hasOwnProperty('displayFrom') ? series.displayFrom : series.from;
      return Date.parse(from) < now;
    });
    return before[before.length - 1];
  }

  var currentSlot1 = showingAnime(slot1);
  var currentSlot2 = showingAnime(slot2);
  var currentSlot3 = showingAnime(slot3);

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
  comingSoon = futureN(comingSoon, 5);

  var comingSoonHTML = '';
  for (item of comingSoon) {
    var html = `<figure${item.movie ? " class='movie'" : ""}><figcaption>`;
    if (item.movie) {
      html = html + "<p class='movie-ident'>Movie</p>";
    } else {
      html = html + "<p class='series-ident'>New series</p>";
    }
    html = html + `<h3>${item.name}</h3>`;
    if (!item.movie) {
      html = html + "<div class='series-info'><p class='starting'>Starting</p></div>";
    }
    html = html + `<div class='info-line'><div><time datetime="${item.date}"><span class='day'>${item.day}</span><span class='month'>${item.month}</span></time></div>`;
    if (item.trailer) {
      html = html + `<a class='trailer' href='${trailer}' target='_blank'>Trailer</a>`;
    }
    if (item.movie && item.time) {
      html = html + `<div class='movie-time'><p class='movie-weekday'>${item.weekday}</p><p class='movie-start-time'>${item.time}</p></div>`;
    }
    html = html + "</div>";
    if (item.rating) {
      html = html + "<div class='rating'>";
      html = html + `<img class='rating-img rating-${item.rating}' src='images/rating/${item.rating}.svg'>`;
      html = html + `<div class='rating-hover rating-hover-${item.rating}'><span>Age rating: ${ratingText[item.rating]}</span><div class='rating__tag'></div></div>`;
      html = html + "</div>";
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


  // adjust the events list
  events = events.filter(function (event) {
    return Date.parse(event.date) >= yesterday;
  });
  events = events.slice(0, {{ maxEvents }});
  // var nextEvent = events[0].events[0];

  var eventsHTML = '';
  var event;
  for (event of events) {
    var html = "<article id='upcoming-"+event.date+"' class='event event-"+event.class+"'>\n"+
      "<time datetime='"+event.date+"'><span class='day'>"+event.day+"</span><span class='month'>"+event.month+"</span>"+(event.special ? "<span class='time__special'></span>" : "")+"</time>\n";
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
            html = html + ev.time
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
  
  document.getElementById('next-meeting-date').innerHTML = "<time datetime='"+nextMeeting.date+"'><span class='day'>"+nextMeeting.day+"</span><span class='month'>"+nextMeeting.month+"</span></time>"+
    "<div class='next-meeting-side focus-date-side'>"+nextMeeting.weekday+"<br>"+nextMeeting.time+"</div>";
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

    document.getElementById('next-social-date').innerHTML = "<time datetime='"+nextSocial.date+"'><span class='day'>"+nextSocial.day+"</span><span class='month'>"+nextSocial.month+"</span></time>"+
      "<div class='next-social-side focus-date-side'><span class='next-social-title'>"+nextSocial.name+"</span><br>"+nextSocial.weekday+" "+nextSocial.time+"</div>";
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

function setupRecommendations() {
  // clear genre and list selection
  function clearPick (event) {
    document.body.classList.remove('genre-filter');
    document.body.classList.remove('list-filter');
    for (let genreLink of document.getElementsByClassName('genre')) {
      let genre = genreLink.dataset.genre;
      document.body.classList.remove('genre-filter-'+genre);
      genreLink.classList.remove('genre-selected');
    }

    for (let listLink of document.getElementsByClassName('pick-list')) {
      let list = listLink.dataset.list;
      document.body.classList.remove('list-filter-'+list);
      listLink.classList.remove('pick-show');
      document.getElementById('pick-pane-'+list).classList.remove('pick-pane-show');
    }
  }

  function scrollToResults() {
    document.getElementById('top10results').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function pickGenre(genre) {
    clearPick();

    document.body.classList.add('genre-filter');
    document.body.classList.add('genre-filter-'+genre);
    for (let link of document.getElementsByClassName('genre-'+genre)) {
      link.classList.add('genre-selected');
    }
    scrollToResults();
  }

  function pickList(list) {
    clearPick();

    document.body.classList.add('list-filter')
    document.body.classList.add('list-filter-'+list);
    document.getElementById('pick-list-'+list).classList.add('pick-show');
    document.getElementById('pick-pane-'+list).classList.add('pick-pane-show');
    scrollToResults();
  }

  // select genre
  for (let genreLink of document.getElementsByClassName('genre')) {
    (function (genreLink) {
      let genre = genreLink.dataset.genre;
      function selectGenre(event) {
        pickGenre(genre);
      }
      genreLink.addEventListener('click', selectGenre);
      // genreLink.addEventListener('touchend', selectGenre);
    })(genreLink);
  }

  // select list
  for (let listLink of document.getElementsByClassName('pick-list')) {
    (function (listLink) {
      let list = listLink.dataset.list;
      function selectList(event) {
        pickList(list);
      }
      listLink.addEventListener('click', selectList);
      // listLink.addEventListener('touchend', selectList);
    })(listLink);
  }

  let clearLink = document.getElementById('clear-filter');
  if (clearLink !== null) {
    clearLink.addEventListener('click', clearPick);
    // clearLink.addEventListener('touchend', clearPick);
  }

  // initial selection
  setTimeout(function () {
    if (window.location.hash !== null && window.location.hash.length > 1) {
      let hash = window.location.hash.substring(1);
      let vars = parseQuery(hash);

      if (vars.hasOwnProperty('genre')) {
        pickGenre(vars.genre);
      }
    }
  });
}

function setupSlideshow() {
  for (let slideshow of document.getElementsByClassName('slideshow')) {
    (function (slideshow) {
      let pos = 1;
      setInterval(function () {
        slideshow.classList.remove('pos'+pos);
        pos++;
        if (pos > 4) {
          pos -= 4;
        }
        slideshow.classList.add('pos'+pos);
      }, 3000);
    })(slideshow);
  }
}

function showMap() {
  document.getElementById('blanket').className = "hide";
  document.getElementById('map-overlay').className = "hide";
  setTimeout(() => {
    document.getElementById('blanket').className = "show";
    document.getElementById('map-overlay').className = "show";
  }, 1);
}

function showNews() {
  document.getElementById('news-more-switch').className = "hide";
  document.getElementById('news-more').className = "show";
}

function hideMap() {
  document.getElementById('blanket').className = "hide";
  document.getElementById('map-overlay').className = "hide";
  setTimeout(() => {
    document.getElementById('blanket').className = "";
    document.getElementById('map-overlay').className = "";
  }, 500);
}