var slot1 = [{"from":"2021-08-17T21:00:00.000Z","name":"Legend of the Galactic Heroes: Die Neue These","picture":"legend-of-galactic-heroes","rating":15,"date":"2021-08-24T18:00:00.000Z","day":24,"month":"Aug","weekday":"Tuesday"},{"from":"2021-11-09T22:00:00.000Z","name":"Time of Eve","picture":"time-of-eve","rating":"pg","date":"2021-11-16T19:00:00.000Z","day":16,"month":"Nov","weekday":"Tuesday"},{"from":"2021-12-07T22:00:00.000Z","name":"Burn The Witch","picture":"burn-the-witch","rating":12,"date":"2021-12-14T19:00:00.000Z","day":14,"month":"Dec","weekday":"Tuesday"},{"from":"2021-12-28T22:00:00.000Z","name":"Last Exile","picture":"last-exile","rating":15,"date":"2022-01-04T19:00:00.000Z","day":4,"month":"Jan","weekday":"Tuesday"}];
var slot2 = [{"from":"2021-09-07T21:00:00.000Z","name":"Carole & Tuesday","picture":"carole-and-tuesday","rating":15,"date":"2021-09-14T19:00:00.000Z","day":14,"month":"Sep","weekday":"Tuesday"},{"from":"2021-12-28T22:00:00.000Z","name":"Assassination Classroom Season 2","picture":"assassination-classroom","rating":15,"date":"2022-01-04T20:00:00.000Z","day":4,"month":"Jan","weekday":"Tuesday"}];
var slot3 = [{"from":"2021-10-05T21:00:00.000Z","name":"Yuru Camp S2","picture":"yuru-camp-s2","rating":"pg","date":"2021-10-12T20:00:00.000Z","day":12,"month":"Oct","weekday":"Tuesday"},{"from":"2021-11-23T22:00:00.000Z","name":"Tonikawa: Over The Moon For You","picture":"tonikawa","rating":12,"date":"2021-11-30T21:00:00.000Z","day":30,"month":"Nov","weekday":"Tuesday"},{"from":"2022-01-18T22:00:00.000Z","name":"Zombieland Saga: Revenge","picture":"zombieland-saga-revenge","rating":15,"date":"2022-01-25T21:00:00.000Z","day":25,"month":"Jan","weekday":"Tuesday"},{"from":"2022-03-01T22:00:00.000Z","name":"Non Non Biyori Non Stop","picture":"non-non-biyori-non-stop","rating":"pg","date":"2022-03-08T21:00:00.000Z","day":8,"month":"Mar","weekday":"Tuesday"}];
// var movies = [{"name":"Empire of Corpses","date":"2021-12-07T20:00:00.000Z","time":"7pm","venue":"Discord","picture":"empire-of-corpses","rating":15,"day":7,"month":"Dec","weekday":"Tuesday","movie":true}];
var comingSoon = [{"from":"2021-11-16T19:00:00.000Z","name":"Time of Eve","picture":"time-of-eve","rating":"pg","date":"2021-11-16T19:00:00.000Z","day":16,"month":"Nov","weekday":"Tuesday"},{"from":"2021-11-30T21:00:00.000Z","name":"Tonikawa: Over The Moon For You","picture":"tonikawa","rating":12,"date":"2021-11-30T21:00:00.000Z","day":30,"month":"Nov","weekday":"Tuesday"},{"name":"Empire of Corpses","date":"2021-12-07T20:00:00.000Z","time":"7pm","venue":"Discord","picture":"empire-of-corpses","rating":15,"day":7,"month":"Dec","weekday":"Tuesday","movie":true},{"from":"2021-12-14T19:00:00.000Z","name":"Burn The Witch","picture":"burn-the-witch","rating":12,"date":"2021-12-14T19:00:00.000Z","day":14,"month":"Dec","weekday":"Tuesday"},{"from":"2022-01-04T19:00:00.000Z","name":"Last Exile","picture":"last-exile","rating":15,"date":"2022-01-04T19:00:00.000Z","day":4,"month":"Jan","weekday":"Tuesday"},{"from":"2022-01-04T20:00:00.000Z","name":"Assassination Classroom Season 2","picture":"assassination-classroom","rating":15,"date":"2022-01-04T20:00:00.000Z","day":4,"month":"Jan","weekday":"Tuesday"},{"from":"2022-01-25T21:00:00.000Z","name":"Zombieland Saga: Revenge","picture":"zombieland-saga-revenge","rating":15,"date":"2022-01-25T21:00:00.000Z","day":25,"month":"Jan","weekday":"Tuesday"},{"from":"2022-03-08T21:00:00.000Z","name":"Non Non Biyori Non Stop","picture":"non-non-biyori-non-stop","rating":"pg","date":"2022-03-08T21:00:00.000Z","day":8,"month":"Mar","weekday":"Tuesday"}];

var events = [{"date":"2021-10-19T18:00:00.000Z","shortDate":"2021-10-19","month":"Oct","day":19,"weekday":"Tuesday","class":"online","events":[{"date":"2021-10-19T18:00:00.000Z","dateLong":"Tuesday, 19 October 2021, 7pm","mediumDate":"19 Oct 2021","shortDate":"2021-10-19","time":"7pm","weekday":"Tuesday","day":19,"month":"Oct","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-10-26T18:00:00.000Z","shortDate":"2021-10-26","month":"Oct","day":26,"weekday":"Tuesday","class":"online","events":[{"date":"2021-10-26T18:00:00.000Z","dateLong":"Tuesday, 26 October 2021, 7pm","mediumDate":"26 Oct 2021","shortDate":"2021-10-26","time":"7pm","weekday":"Tuesday","day":26,"month":"Oct","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-11-02T19:00:00.000Z","shortDate":"2021-11-02","month":"Nov","day":2,"weekday":"Tuesday","class":"online","events":[{"date":"2021-11-02T19:00:00.000Z","dateLong":"Tuesday, 2 November 2021, 7pm","mediumDate":"2 Nov 2021","shortDate":"2021-11-02","time":"7pm","weekday":"Tuesday","day":2,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-11-09T19:00:00.000Z","shortDate":"2021-11-09","month":"Nov","day":9,"weekday":"Tuesday","class":"online","events":[{"date":"2021-11-09T19:00:00.000Z","dateLong":"Tuesday, 9 November 2021, 7pm","mediumDate":"9 Nov 2021","shortDate":"2021-11-09","time":"7pm","weekday":"Tuesday","day":9,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-11-16T19:00:00.000Z","shortDate":"2021-11-16","month":"Nov","day":16,"class":"new-series","events":[{"date":"2021-11-16T19:00:00.000Z","dateLong":"Tuesday, 16 November 2021, 7pm","mediumDate":"16 Nov 2021","shortDate":"2021-11-16","day":16,"month":"Nov","name":"New series: Time of Eve","class":"new-series"},{"date":"2021-11-16T19:00:00.000Z","dateLong":"Tuesday, 16 November 2021, 7pm","mediumDate":"16 Nov 2021","shortDate":"2021-11-16","time":"7pm","weekday":"Tuesday","day":16,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-11-23T19:00:00.000Z","shortDate":"2021-11-23","month":"Nov","day":23,"weekday":"Tuesday","class":"online","events":[{"date":"2021-11-23T19:00:00.000Z","dateLong":"Tuesday, 23 November 2021, 7pm","mediumDate":"23 Nov 2021","shortDate":"2021-11-23","time":"7pm","weekday":"Tuesday","day":23,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-11-30T19:00:00.000Z","shortDate":"2021-11-30","month":"Nov","day":30,"weekday":"Tuesday","class":"online","events":[{"date":"2021-11-30T19:00:00.000Z","dateLong":"Tuesday, 30 November 2021, 7pm","mediumDate":"30 Nov 2021","shortDate":"2021-11-30","time":"7pm","weekday":"Tuesday","day":30,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-11-30T21:00:00.000Z","dateLong":"Tuesday, 30 November 2021, 9pm","mediumDate":"30 Nov 2021","shortDate":"2021-11-30","day":30,"month":"Nov","name":"New series: Tonikawa: Over The Moon For You","class":"new-series"}]},{"date":"2021-12-07T19:00:00.000Z","shortDate":"2021-12-07","month":"Dec","day":7,"weekday":"Tuesday","class":"online","events":[{"date":"2021-12-07T19:00:00.000Z","dateLong":"Tuesday, 7 December 2021, 7pm","mediumDate":"7 Dec 2021","shortDate":"2021-12-07","time":"7pm","weekday":"Tuesday","day":7,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-12-07T20:00:00.000Z","dateLong":"Tuesday, 7 December 2021, 7pm","mediumDate":"7 Dec 2021","shortDate":"2021-12-07","time":"7pm","weekday":"Tuesday","day":7,"month":"Dec","name":"Movie: Empire of Corpses","class":"movie","venue":"Discord"}]},{"date":"2021-12-14T19:00:00.000Z","shortDate":"2021-12-14","month":"Dec","day":14,"class":"new-series","events":[{"date":"2021-12-14T19:00:00.000Z","dateLong":"Tuesday, 14 December 2021, 7pm","mediumDate":"14 Dec 2021","shortDate":"2021-12-14","day":14,"month":"Dec","name":"New series: Burn The Witch","class":"new-series"},{"date":"2021-12-14T19:00:00.000Z","dateLong":"Tuesday, 14 December 2021, 7pm","mediumDate":"14 Dec 2021","shortDate":"2021-12-14","time":"7pm","weekday":"Tuesday","day":14,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-12-21T19:00:00.000Z","shortDate":"2021-12-21","month":"Dec","day":21,"weekday":"Tuesday","class":"online","events":[{"date":"2021-12-21T19:00:00.000Z","dateLong":"Tuesday, 21 December 2021, 7pm","mediumDate":"21 Dec 2021","shortDate":"2021-12-21","time":"7pm","weekday":"Tuesday","day":21,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-12-28T19:00:00.000Z","shortDate":"2021-12-28","month":"Dec","day":28,"weekday":"Tuesday","class":"online","events":[{"date":"2021-12-28T19:00:00.000Z","dateLong":"Tuesday, 28 December 2021, 7pm","mediumDate":"28 Dec 2021","shortDate":"2021-12-28","time":"7pm","weekday":"Tuesday","day":28,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-01-04T19:00:00.000Z","shortDate":"2022-01-04","month":"Jan","day":4,"class":"new-series","events":[{"date":"2022-01-04T19:00:00.000Z","dateLong":"Tuesday, 4 January 2022, 7pm","mediumDate":"4 Jan 2022","shortDate":"2022-01-04","day":4,"month":"Jan","name":"New series: Last Exile","class":"new-series"},{"date":"2022-01-04T19:00:00.000Z","dateLong":"Tuesday, 4 January 2022, 7pm","mediumDate":"4 Jan 2022","shortDate":"2022-01-04","time":"7pm","weekday":"Tuesday","day":4,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-01-04T20:00:00.000Z","dateLong":"Tuesday, 4 January 2022, 8pm","mediumDate":"4 Jan 2022","shortDate":"2022-01-04","day":4,"month":"Jan","name":"New series: Assassination Classroom Season 2","class":"new-series"}]},{"date":"2022-01-11T19:00:00.000Z","shortDate":"2022-01-11","month":"Jan","day":11,"weekday":"Tuesday","class":"online","events":[{"date":"2022-01-11T19:00:00.000Z","dateLong":"Tuesday, 11 January 2022, 7pm","mediumDate":"11 Jan 2022","shortDate":"2022-01-11","time":"7pm","weekday":"Tuesday","day":11,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-01-18T19:00:00.000Z","shortDate":"2022-01-18","month":"Jan","day":18,"weekday":"Tuesday","class":"online","events":[{"date":"2022-01-18T19:00:00.000Z","dateLong":"Tuesday, 18 January 2022, 7pm","mediumDate":"18 Jan 2022","shortDate":"2022-01-18","time":"7pm","weekday":"Tuesday","day":18,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-01-25T19:00:00.000Z","shortDate":"2022-01-25","month":"Jan","day":25,"weekday":"Tuesday","class":"online","events":[{"date":"2022-01-25T19:00:00.000Z","dateLong":"Tuesday, 25 January 2022, 7pm","mediumDate":"25 Jan 2022","shortDate":"2022-01-25","time":"7pm","weekday":"Tuesday","day":25,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-01-25T21:00:00.000Z","dateLong":"Tuesday, 25 January 2022, 9pm","mediumDate":"25 Jan 2022","shortDate":"2022-01-25","day":25,"month":"Jan","name":"New series: Zombieland Saga: Revenge","class":"new-series"}]},{"date":"2022-02-01T19:00:00.000Z","shortDate":"2022-02-01","month":"Feb","day":1,"weekday":"Tuesday","class":"online","events":[{"date":"2022-02-01T19:00:00.000Z","dateLong":"Tuesday, 1 February 2022, 7pm","mediumDate":"1 Feb 2022","shortDate":"2022-02-01","time":"7pm","weekday":"Tuesday","day":1,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-02-08T19:00:00.000Z","shortDate":"2022-02-08","month":"Feb","day":8,"weekday":"Tuesday","class":"online","events":[{"date":"2022-02-08T19:00:00.000Z","dateLong":"Tuesday, 8 February 2022, 7pm","mediumDate":"8 Feb 2022","shortDate":"2022-02-08","time":"7pm","weekday":"Tuesday","day":8,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-02-15T19:00:00.000Z","shortDate":"2022-02-15","month":"Feb","day":15,"weekday":"Tuesday","class":"online","events":[{"date":"2022-02-15T19:00:00.000Z","dateLong":"Tuesday, 15 February 2022, 7pm","mediumDate":"15 Feb 2022","shortDate":"2022-02-15","time":"7pm","weekday":"Tuesday","day":15,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-02-22T19:00:00.000Z","shortDate":"2022-02-22","month":"Feb","day":22,"weekday":"Tuesday","class":"online","events":[{"date":"2022-02-22T19:00:00.000Z","dateLong":"Tuesday, 22 February 2022, 7pm","mediumDate":"22 Feb 2022","shortDate":"2022-02-22","time":"7pm","weekday":"Tuesday","day":22,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-03-01T19:00:00.000Z","shortDate":"2022-03-01","month":"Mar","day":1,"weekday":"Tuesday","class":"online","events":[{"date":"2022-03-01T19:00:00.000Z","dateLong":"Tuesday, 1 March 2022, 7pm","mediumDate":"1 Mar 2022","shortDate":"2022-03-01","time":"7pm","weekday":"Tuesday","day":1,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]}];

var options = {"online":true,"hiatus":false,"hiatusMessage":"Our regular schedule resumes on 28 April","comingSoonRows":3,"newsCutoff":0};

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
      return Date.parse(series.from) < now;
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
    document.getElementById(id+'name').innerHTML = '<p class="series-ident">Series</p>'+series.name;
    var img = document.getElementById(id+'picture');
    img.setAttribute('src', 'images/series/'+series.picture+'.png');
    img.classList.add("show");

    var slotDate = document.getElementById(id+'date');
    if (slotDate !== null) {
      slotDate.innerHTML = "<span class='day'>"+series.day+"</span><span class='month'>"+series.month+"</span>";
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
  events = events.slice(0, 18);
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
      html = html +"<div class='event-detail event-detail-"+ev.class+"'><h3>"+ev.name+"</h3>\n";
      if (ev.hasOwnProperty("time")) {
        html = html+"<p>"+a+ev.venue+(time ? ", "+time : "")+_a+"</p>\n";
      }
      if (ev.price) {
        html = html + "<p>Attendance fee: "+ev.price+"</p>";
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
      switch (event.class) {
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
  document.getElementById('next-meeting-date').innerHTML = "<div>"+nextEvent.weekday+"</div><div>"+nextEvent.mediumDate+"</div><div>"+nextEvent.time+"</div>";
  document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
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