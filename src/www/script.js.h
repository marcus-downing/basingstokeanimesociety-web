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

window.onload = function () {
  var now = new Date(Date.now());

  // adjust the showing anime
  function showingAnime(slot) {
    var before = slot.filter(function (series) {
      var from = series.hasOwnProperty('displayFrom') ? series.displayFrom : series.from;
      return Date.parse(from) < now;
    });
    return before[before.length - 1];
  }

  // function nextAnime(slot) {
  //   var after = slot.filter(function (series) {
  //     return Date.parse(series.from) >= now;
  //   });
  //   return after[0];
  // }

  var currentSlot1 = showingAnime(slot1);
  var currentSlot2 = showingAnime(slot2);
  var currentSlot3 = showingAnime(slot3);

  // var nextSlot1 = nextAnime(slot1);
  // var nextSlot2 = nextAnime(slot2);
  // var nextSlot3 = nextAnime(slot3);

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

  // editSlot('nextSlot1', nextSlot1);
  // editSlot('nextSlot2', nextSlot2);
  // editSlot('nextSlot3', nextSlot3);


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
  comingSoon = futureN(comingSoon, 8);

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

  if (comingSoon.length <= 5) {
    document.getElementById('coming-soon').classList.add('coming-soon--short');
  }


  // adjust the events list
  events = events.filter(function (event) {
    return Date.parse(event.date) >= now;
  });
  events = events.slice(0, {{ maxEvents }});
  // var nextEvent = events[0].events[0];

  var eventsHTML = '';
  var event;
  for (event of events) {
    var html = "<article id='upcoming-"+event.date+"' class='event event-"+event.class+"'>\n"+
      "<time datetime='"+event.date+"'><span class='day'>"+event.day+"</span><span class='month'>"+event.month+"</span></time>\n";
    for (ev of event.events) {
      var time = false;
      if (ev.hasOwnProperty("time")) {
        time = ev.time;
      }
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
      if (ev.hasOwnProperty("time")) {
        html = html+"<p>"+a;
        if (ev.hasOwnProperty("venue") && ev.venue) {
          html = html + ev.venue + (time ? ", " : "");
        }
        html = html+(time ? time : "")+_a+"</p>\n";
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

  // adjust the next event headline
  var mainEvents = [];
  for (event of events) {
    for (ev of event.events) {
      switch (ev.class) {
        case 'esports':
        case 'cinema':
        case 'skip':
        case 'new-series':
          continue;

        default:
          mainEvents.push(ev);
      }
    }
  }
  var nextEvent = mainEvents[0];
  
  document.getElementById('next-meeting-date').innerHTML = "<time datetime='"+nextEvent.date+"'><span class='day'>"+nextEvent.day+"</span><span class='month'>"+nextEvent.month+"</span></time>"+
    "<div class='next-meeting-side'>"+nextEvent.weekday+"<br>"+nextEvent.time+"</div>";
  // document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
  if (document.getElementById('next-meeting-venue')) {
    document.getElementById('next-meeting-venue').innerHTML = nextEvent.venue;
  }
  if (document.getElementById('next-meeting-address')) {
    document.getElementById('next-meeting-address').innerHTML = nextEvent.address;
  }

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