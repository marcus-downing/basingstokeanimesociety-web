var slot1 = [{"from":"2021-12-28T22:00:00.000Z","displayFrom":"2021-12-15T00:00:00.000Z","name":"Last Exile","picture":"last-exile","rating":15,"date":"2022-01-04T19:00:00.000Z","day":4,"month":"Jan","weekday":"Tuesday"},{"from":"2022-03-29T21:00:00.000Z","name":"Ranpo Kitan: Game of Laplace","picture":"ranpo-kitan","rating":15,"date":"2022-04-05T18:00:00.000Z","day":5,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-10T21:00:00.000Z","name":"Aldnoah.Zero","picture":"aldnoah-zero","rating":15,"date":"2022-05-17T18:00:00.000Z","day":17,"month":"May","weekday":"Tuesday"},{"from":"2022-06-21T21:00:00.000Z","name":"Talentless Nana","picture":"talentless-nana","rating":15,"date":"2022-06-28T18:00:00.000Z","day":28,"month":"Jun","weekday":"Tuesday"}];
var slot2 = [{"from":"2021-12-28T22:00:00.000Z","displayFrom":"2021-12-15T00:00:00.000Z","name":"Assassination Classroom Season 2","picture":"assassination-classroom","rating":15,"date":"2022-01-04T20:00:00.000Z","day":4,"month":"Jan","weekday":"Tuesday"},{"from":"2022-03-29T21:00:00.000Z","name":"Maoyuu: Maou Yuusha","picture":"maoyuu","rating":15,"date":"2022-04-05T19:00:00.000Z","day":5,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-10T21:00:00.000Z","name":"Dr Stone","picture":"dr-stone","rating":12,"date":"2022-05-17T19:00:00.000Z","day":17,"month":"May","weekday":"Tuesday"}];
var slot3 = [{"from":"2022-01-18T22:00:00.000Z","name":"Zombieland Saga: Revenge","picture":"zombieland-saga-revenge","rating":15,"date":"2022-01-25T21:00:00.000Z","day":25,"month":"Jan","weekday":"Tuesday"},{"from":"2022-03-01T22:00:00.000Z","name":"Non Non Biyori Non Stop","picture":"non-non-biyori-non-stop","rating":"pg","date":"2022-03-08T21:00:00.000Z","day":8,"month":"Mar","weekday":"Tuesday"},{"from":"2022-04-12T21:00:00.000Z","name":"Recovery of an MMO Junkie","picture":"mmo-junkie","rating":12,"date":"2022-04-19T20:00:00.000Z","day":19,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-17T21:00:00.000Z","name":"Kino's Journey","picture":"kinos-journey","rating":12,"date":"2022-05-24T20:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"},{"from":"2022-06-28T21:00:00.000Z","name":"By the Grace of the Gods","picture":"by-the-grace-of-the-gods","rating":12,"date":"2022-07-05T20:00:00.000Z","day":5,"month":"Jul","weekday":"Tuesday"}];
// var movies = [];
var comingSoon = [{"from":"2022-03-08T21:00:00.000Z","name":"Non Non Biyori Non Stop","picture":"non-non-biyori-non-stop","rating":"pg","date":"2022-03-08T21:00:00.000Z","day":8,"month":"Mar","weekday":"Tuesday"},{"from":"2022-04-05T18:00:00.000Z","name":"Ranpo Kitan: Game of Laplace","picture":"ranpo-kitan","rating":15,"date":"2022-04-05T18:00:00.000Z","day":5,"month":"Apr","weekday":"Tuesday"},{"from":"2022-04-05T19:00:00.000Z","name":"Maoyuu: Maou Yuusha","picture":"maoyuu","rating":15,"date":"2022-04-05T19:00:00.000Z","day":5,"month":"Apr","weekday":"Tuesday"},{"from":"2022-04-19T20:00:00.000Z","name":"Recovery of an MMO Junkie","picture":"mmo-junkie","rating":12,"date":"2022-04-19T20:00:00.000Z","day":19,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-17T18:00:00.000Z","name":"Aldnoah.Zero","picture":"aldnoah-zero","rating":15,"date":"2022-05-17T18:00:00.000Z","day":17,"month":"May","weekday":"Tuesday"},{"from":"2022-05-17T19:00:00.000Z","name":"Dr Stone","picture":"dr-stone","rating":12,"date":"2022-05-17T19:00:00.000Z","day":17,"month":"May","weekday":"Tuesday"},{"from":"2022-05-24T20:00:00.000Z","name":"Kino's Journey","picture":"kinos-journey","rating":12,"date":"2022-05-24T20:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"},{"from":"2022-06-28T18:00:00.000Z","name":"Talentless Nana","picture":"talentless-nana","rating":15,"date":"2022-06-28T18:00:00.000Z","day":28,"month":"Jun","weekday":"Tuesday"},{"from":"2022-07-05T20:00:00.000Z","name":"By the Grace of the Gods","picture":"by-the-grace-of-the-gods","rating":12,"date":"2022-07-05T20:00:00.000Z","day":5,"month":"Jul","weekday":"Tuesday"}];

var events = [{"date":"2022-03-08T19:00:00.000Z","shortDate":"2022-03-08","month":"Mar","day":8,"weekday":"Tuesday","class":"online","events":[{"date":"2022-03-08T19:00:00.000Z","dateLong":"Tuesday, 8 March 2022, 7pm","mediumDate":"8 Mar 2022","shortDate":"2022-03-08","time":"7pm","weekday":"Tuesday","day":8,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-03-08T21:00:00.000Z","dateLong":"Tuesday, 8 March 2022, 9pm","mediumDate":"8 Mar 2022","shortDate":"2022-03-08","day":8,"month":"Mar","name":"New series: Non Non Biyori Non Stop","class":"new-series"}]},{"date":"2022-03-15T19:00:00.000Z","shortDate":"2022-03-15","month":"Mar","day":15,"weekday":"Tuesday","class":"online","events":[{"date":"2022-03-15T19:00:00.000Z","dateLong":"Tuesday, 15 March 2022, 7pm","mediumDate":"15 Mar 2022","shortDate":"2022-03-15","time":"7pm","weekday":"Tuesday","day":15,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-03-22T19:00:00.000Z","shortDate":"2022-03-22","month":"Mar","day":22,"weekday":"Tuesday","class":"online","events":[{"date":"2022-03-22T19:00:00.000Z","dateLong":"Tuesday, 22 March 2022, 7pm","mediumDate":"22 Mar 2022","shortDate":"2022-03-22","time":"7pm","weekday":"Tuesday","day":22,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-03-29T18:00:00.000Z","shortDate":"2022-03-29","month":"Mar","day":29,"weekday":"Tuesday","class":"online","events":[{"date":"2022-03-29T18:00:00.000Z","dateLong":"Tuesday, 29 March 2022, 7pm","mediumDate":"29 Mar 2022","shortDate":"2022-03-29","time":"7pm","weekday":"Tuesday","day":29,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-04-05T18:00:00.000Z","shortDate":"2022-04-05","month":"Apr","day":5,"class":"new-series","events":[{"date":"2022-04-05T18:00:00.000Z","dateLong":"Tuesday, 5 April 2022, 7pm","mediumDate":"5 Apr 2022","shortDate":"2022-04-05","day":5,"month":"Apr","name":"New series: Ranpo Kitan: Game of Laplace","class":"new-series"},{"date":"2022-04-05T18:00:00.000Z","dateLong":"Tuesday, 5 April 2022, 7pm","mediumDate":"5 Apr 2022","shortDate":"2022-04-05","time":"7pm","weekday":"Tuesday","day":5,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-04-05T19:00:00.000Z","dateLong":"Tuesday, 5 April 2022, 8pm","mediumDate":"5 Apr 2022","shortDate":"2022-04-05","day":5,"month":"Apr","name":"New series: Maoyuu: Maou Yuusha","class":"new-series"}]},{"date":"2022-04-12T18:00:00.000Z","shortDate":"2022-04-12","month":"Apr","day":12,"weekday":"Tuesday","class":"online","events":[{"date":"2022-04-12T18:00:00.000Z","dateLong":"Tuesday, 12 April 2022, 7pm","mediumDate":"12 Apr 2022","shortDate":"2022-04-12","time":"7pm","weekday":"Tuesday","day":12,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-04-19T18:00:00.000Z","shortDate":"2022-04-19","month":"Apr","day":19,"weekday":"Tuesday","class":"online","events":[{"date":"2022-04-19T18:00:00.000Z","dateLong":"Tuesday, 19 April 2022, 7pm","mediumDate":"19 Apr 2022","shortDate":"2022-04-19","time":"7pm","weekday":"Tuesday","day":19,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-04-19T20:00:00.000Z","dateLong":"Tuesday, 19 April 2022, 9pm","mediumDate":"19 Apr 2022","shortDate":"2022-04-19","day":19,"month":"Apr","name":"New series: Recovery of an MMO Junkie","class":"new-series"}]},{"date":"2022-04-26T18:00:00.000Z","shortDate":"2022-04-26","month":"Apr","day":26,"weekday":"Tuesday","class":"online","events":[{"date":"2022-04-26T18:00:00.000Z","dateLong":"Tuesday, 26 April 2022, 7pm","mediumDate":"26 Apr 2022","shortDate":"2022-04-26","time":"7pm","weekday":"Tuesday","day":26,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-05-03T18:00:00.000Z","shortDate":"2022-05-03","month":"May","day":3,"weekday":"Tuesday","class":"online","events":[{"date":"2022-05-03T18:00:00.000Z","dateLong":"Tuesday, 3 May 2022, 7pm","mediumDate":"3 May 2022","shortDate":"2022-05-03","time":"7pm","weekday":"Tuesday","day":3,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-05-10T18:00:00.000Z","shortDate":"2022-05-10","month":"May","day":10,"weekday":"Tuesday","class":"online","events":[{"date":"2022-05-10T18:00:00.000Z","dateLong":"Tuesday, 10 May 2022, 7pm","mediumDate":"10 May 2022","shortDate":"2022-05-10","time":"7pm","weekday":"Tuesday","day":10,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-05-17T18:00:00.000Z","shortDate":"2022-05-17","month":"May","day":17,"class":"new-series","events":[{"date":"2022-05-17T18:00:00.000Z","dateLong":"Tuesday, 17 May 2022, 7pm","mediumDate":"17 May 2022","shortDate":"2022-05-17","day":17,"month":"May","name":"New series: Aldnoah.Zero","class":"new-series"},{"date":"2022-05-17T18:00:00.000Z","dateLong":"Tuesday, 17 May 2022, 7pm","mediumDate":"17 May 2022","shortDate":"2022-05-17","time":"7pm","weekday":"Tuesday","day":17,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-05-17T19:00:00.000Z","dateLong":"Tuesday, 17 May 2022, 8pm","mediumDate":"17 May 2022","shortDate":"2022-05-17","day":17,"month":"May","name":"New series: Dr Stone","class":"new-series"}]},{"date":"2022-05-24T18:00:00.000Z","shortDate":"2022-05-24","month":"May","day":24,"weekday":"Tuesday","class":"online","events":[{"date":"2022-05-24T18:00:00.000Z","dateLong":"Tuesday, 24 May 2022, 7pm","mediumDate":"24 May 2022","shortDate":"2022-05-24","time":"7pm","weekday":"Tuesday","day":24,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-05-24T20:00:00.000Z","dateLong":"Tuesday, 24 May 2022, 9pm","mediumDate":"24 May 2022","shortDate":"2022-05-24","day":24,"month":"May","name":"New series: Kino's Journey","class":"new-series"}]},{"date":"2022-05-31T18:00:00.000Z","shortDate":"2022-05-31","month":"May","day":31,"weekday":"Tuesday","class":"online","events":[{"date":"2022-05-31T18:00:00.000Z","dateLong":"Tuesday, 31 May 2022, 7pm","mediumDate":"31 May 2022","shortDate":"2022-05-31","time":"7pm","weekday":"Tuesday","day":31,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-06-07T18:00:00.000Z","shortDate":"2022-06-07","month":"Jun","day":7,"weekday":"Tuesday","class":"online","events":[{"date":"2022-06-07T18:00:00.000Z","dateLong":"Tuesday, 7 June 2022, 7pm","mediumDate":"7 Jun 2022","shortDate":"2022-06-07","time":"7pm","weekday":"Tuesday","day":7,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-06-14T18:00:00.000Z","shortDate":"2022-06-14","month":"Jun","day":14,"weekday":"Tuesday","class":"online","events":[{"date":"2022-06-14T18:00:00.000Z","dateLong":"Tuesday, 14 June 2022, 7pm","mediumDate":"14 Jun 2022","shortDate":"2022-06-14","time":"7pm","weekday":"Tuesday","day":14,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-06-21T18:00:00.000Z","shortDate":"2022-06-21","month":"Jun","day":21,"weekday":"Tuesday","class":"online","events":[{"date":"2022-06-21T18:00:00.000Z","dateLong":"Tuesday, 21 June 2022, 7pm","mediumDate":"21 Jun 2022","shortDate":"2022-06-21","time":"7pm","weekday":"Tuesday","day":21,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-06-28T18:00:00.000Z","shortDate":"2022-06-28","month":"Jun","day":28,"class":"new-series","events":[{"date":"2022-06-28T18:00:00.000Z","dateLong":"Tuesday, 28 June 2022, 7pm","mediumDate":"28 Jun 2022","shortDate":"2022-06-28","day":28,"month":"Jun","name":"New series: Talentless Nana","class":"new-series"},{"date":"2022-06-28T18:00:00.000Z","dateLong":"Tuesday, 28 June 2022, 7pm","mediumDate":"28 Jun 2022","shortDate":"2022-06-28","time":"7pm","weekday":"Tuesday","day":28,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-07-05T18:00:00.000Z","shortDate":"2022-07-05","month":"Jul","day":5,"weekday":"Tuesday","class":"online","events":[{"date":"2022-07-05T18:00:00.000Z","dateLong":"Tuesday, 5 July 2022, 7pm","mediumDate":"5 Jul 2022","shortDate":"2022-07-05","time":"7pm","weekday":"Tuesday","day":5,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2022-07-05T20:00:00.000Z","dateLong":"Tuesday, 5 July 2022, 9pm","mediumDate":"5 Jul 2022","shortDate":"2022-07-05","day":5,"month":"Jul","name":"New series: By the Grace of the Gods","class":"new-series"}]},{"date":"2022-07-12T18:00:00.000Z","shortDate":"2022-07-12","month":"Jul","day":12,"weekday":"Tuesday","class":"online","events":[{"date":"2022-07-12T18:00:00.000Z","dateLong":"Tuesday, 12 July 2022, 7pm","mediumDate":"12 Jul 2022","shortDate":"2022-07-12","time":"7pm","weekday":"Tuesday","day":12,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2022-07-19T18:00:00.000Z","shortDate":"2022-07-19","month":"Jul","day":19,"weekday":"Tuesday","class":"online","events":[{"date":"2022-07-19T18:00:00.000Z","dateLong":"Tuesday, 19 July 2022, 7pm","mediumDate":"19 Jul 2022","shortDate":"2022-07-19","time":"7pm","weekday":"Tuesday","day":19,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]}];

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
  // document.getElementById('next-meeting-date').innerHTML = "<div>"+nextEvent.weekday+"</div><div>"+nextEvent.mediumDate+"</div><div>"+nextEvent.time+"</div>";
  document.getElementById('next-meeting-date').innerHTML = "<time datetime='"+nextEvent.date+"'><span class='day'>"+nextEvent.day+"</span><span class='month'>"+nextEvent.month+"</span></time>"+
    "<div class='next-meeting-side'>"+nextEvent.weekday+"<br>"+nextEvent.time+"</div>";
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