var slot1 = [{"from":"2021-03-30T21:00:00.000Z","name":"The Ancient Magus' Bride","picture":"ancient-magus-bride","rating":15,"date":"2021-04-06T18:00:00.000Z","day":6,"month":"Apr","weekday":"Tuesday"},{"from":"2021-07-06T21:00:00.000Z","name":"Golden Kamuy Third Season","picture":"golden-kamuy","rating":15,"date":"2021-07-13T18:00:00.000Z","day":13,"month":"Jul","weekday":"Tuesday"},{"from":"2021-08-17T21:00:00.000Z","name":"Legend of the Galactic Heroes: Die Neue These","picture":"legend-of-galactic-heroes","rating":15,"date":"2021-08-24T18:00:00.000Z","day":24,"month":"Aug","weekday":"Tuesday"}];
var slot2 = [{"from":"2021-02-16T22:00:00.000Z","name":"Ore Monogatari","picture":"oremonogatari","rating":12,"date":"2021-02-23T20:00:00.000Z","day":23,"month":"Feb","weekday":"Tuesday"},{"from":"2021-05-11T21:00:00.000Z","name":"Assassination Classroom","picture":"assassination-classroom","rating":15,"date":"2021-05-18T19:00:00.000Z","day":18,"month":"May","weekday":"Tuesday"},{"from":"2021-07-27T21:00:00.000Z","name":"Bunny Drop","picture":"bunny-drop","rating":"pg","date":"2021-08-03T19:00:00.000Z","day":3,"month":"Aug","weekday":"Tuesday"},{"from":"2021-09-07T21:00:00.000Z","name":"Carole & Tuesday","picture":"carole-and-tuesday","rating":15,"date":"2021-09-14T19:00:00.000Z","day":14,"month":"Sep","weekday":"Tuesday"}];
var slot3 = [{"from":"2021-03-02T22:00:00.000Z","name":"Keep Your Hands Off Eizouken!","picture":"eizouken","rating":12,"date":"2021-03-09T21:00:00.000Z","day":9,"month":"Mar","weekday":"Tuesday"},{"from":"2021-04-13T21:00:00.000Z","name":"Kaguya-sama, Love is War S2","picture":"kaguya-sama2","rating":12,"date":"2021-04-20T20:00:00.000Z","day":20,"month":"Apr","weekday":"Tuesday"},{"from":"2021-05-25T21:00:00.000Z","name":"My Next Life as a Villainess: All Routes Lead to Doom!","picture":"hamefura","rating":12,"date":"2021-06-01T20:00:00.000Z","day":1,"month":"Jun","weekday":"Tuesday"},{"from":"2021-07-06T21:00:00.000Z","name":"Sound of the Sky","picture":"sound-of-the-sky","rating":12,"date":"2021-07-13T20:00:00.000Z","day":13,"month":"Jul","weekday":"Tuesday"},{"from":"2021-08-24T21:00:00.000Z","name":"BOFURI","picture":"bofuri","rating":12,"date":"2021-08-31T20:00:00.000Z","day":31,"month":"Aug","weekday":"Tuesday"}];
// var movies = [];
var comingSoon = [{"from":"2021-04-20T20:00:00.000Z","name":"Kaguya-sama, Love is War S2","picture":"kaguya-sama2","rating":12,"date":"2021-04-20T20:00:00.000Z","day":20,"month":"Apr","weekday":"Tuesday"},{"from":"2021-05-18T19:00:00.000Z","name":"Assassination Classroom","picture":"assassination-classroom","rating":15,"date":"2021-05-18T19:00:00.000Z","day":18,"month":"May","weekday":"Tuesday"},{"from":"2021-06-01T20:00:00.000Z","name":"My Next Life as a Villainess: All Routes Lead to Doom!","picture":"hamefura","rating":12,"date":"2021-06-01T20:00:00.000Z","day":1,"month":"Jun","weekday":"Tuesday"},{"from":"2021-07-13T18:00:00.000Z","name":"Golden Kamuy Third Season","picture":"golden-kamuy","rating":15,"date":"2021-07-13T18:00:00.000Z","day":13,"month":"Jul","weekday":"Tuesday"},{"from":"2021-07-13T20:00:00.000Z","name":"Sound of the Sky","picture":"sound-of-the-sky","rating":12,"date":"2021-07-13T20:00:00.000Z","day":13,"month":"Jul","weekday":"Tuesday"},{"from":"2021-08-03T19:00:00.000Z","name":"Bunny Drop","picture":"bunny-drop","rating":"pg","date":"2021-08-03T19:00:00.000Z","day":3,"month":"Aug","weekday":"Tuesday"},{"from":"2021-08-24T18:00:00.000Z","name":"Legend of the Galactic Heroes: Die Neue These","picture":"legend-of-galactic-heroes","rating":15,"date":"2021-08-24T18:00:00.000Z","day":24,"month":"Aug","weekday":"Tuesday"},{"from":"2021-08-31T20:00:00.000Z","name":"BOFURI","picture":"bofuri","rating":12,"date":"2021-08-31T20:00:00.000Z","day":31,"month":"Aug","weekday":"Tuesday"},{"from":"2021-09-14T19:00:00.000Z","name":"Carole & Tuesday","picture":"carole-and-tuesday","rating":15,"date":"2021-09-14T19:00:00.000Z","day":14,"month":"Sep","weekday":"Tuesday"}];

var events = [{"date":"2021-04-13T18:00:00.000Z","shortDate":"2021-04-13","month":"Apr","day":13,"weekday":"Tuesday","class":"online","events":[{"date":"2021-04-13T18:00:00.000Z","dateLong":"Tuesday, 13 April 2021, 7pm","mediumDate":"13 Apr 2021","shortDate":"2021-04-13","time":"7pm","weekday":"Tuesday","day":13,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-04-20T18:00:00.000Z","shortDate":"2021-04-20","month":"Apr","day":20,"weekday":"Tuesday","class":"online","events":[{"date":"2021-04-20T18:00:00.000Z","dateLong":"Tuesday, 20 April 2021, 7pm","mediumDate":"20 Apr 2021","shortDate":"2021-04-20","time":"7pm","weekday":"Tuesday","day":20,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-04-20T20:00:00.000Z","dateLong":"Tuesday, 20 April 2021, 9pm","mediumDate":"20 Apr 2021","shortDate":"2021-04-20","day":20,"month":"Apr","name":"New series: Kaguya-sama, Love is War S2","class":"new-series"}]},{"date":"2021-04-27T18:00:00.000Z","shortDate":"2021-04-27","month":"Apr","day":27,"weekday":"Tuesday","class":"online","events":[{"date":"2021-04-27T18:00:00.000Z","dateLong":"Tuesday, 27 April 2021, 7pm","mediumDate":"27 Apr 2021","shortDate":"2021-04-27","time":"7pm","weekday":"Tuesday","day":27,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-05-04T18:00:00.000Z","shortDate":"2021-05-04","month":"May","day":4,"weekday":"Tuesday","class":"online","events":[{"date":"2021-05-04T18:00:00.000Z","dateLong":"Tuesday, 4 May 2021, 7pm","mediumDate":"4 May 2021","shortDate":"2021-05-04","time":"7pm","weekday":"Tuesday","day":4,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-05-11T18:00:00.000Z","shortDate":"2021-05-11","month":"May","day":11,"weekday":"Tuesday","class":"online","events":[{"date":"2021-05-11T18:00:00.000Z","dateLong":"Tuesday, 11 May 2021, 7pm","mediumDate":"11 May 2021","shortDate":"2021-05-11","time":"7pm","weekday":"Tuesday","day":11,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-05-18T18:00:00.000Z","shortDate":"2021-05-18","month":"May","day":18,"weekday":"Tuesday","class":"online","events":[{"date":"2021-05-18T18:00:00.000Z","dateLong":"Tuesday, 18 May 2021, 7pm","mediumDate":"18 May 2021","shortDate":"2021-05-18","time":"7pm","weekday":"Tuesday","day":18,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-05-18T19:00:00.000Z","dateLong":"Tuesday, 18 May 2021, 8pm","mediumDate":"18 May 2021","shortDate":"2021-05-18","day":18,"month":"May","name":"New series: Assassination Classroom","class":"new-series"}]},{"date":"2021-05-25T18:00:00.000Z","shortDate":"2021-05-25","month":"May","day":25,"weekday":"Tuesday","class":"online","events":[{"date":"2021-05-25T18:00:00.000Z","dateLong":"Tuesday, 25 May 2021, 7pm","mediumDate":"25 May 2021","shortDate":"2021-05-25","time":"7pm","weekday":"Tuesday","day":25,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-06-01T18:00:00.000Z","shortDate":"2021-06-01","month":"Jun","day":1,"weekday":"Tuesday","class":"online","events":[{"date":"2021-06-01T18:00:00.000Z","dateLong":"Tuesday, 1 June 2021, 7pm","mediumDate":"1 Jun 2021","shortDate":"2021-06-01","time":"7pm","weekday":"Tuesday","day":1,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-06-01T20:00:00.000Z","dateLong":"Tuesday, 1 June 2021, 9pm","mediumDate":"1 Jun 2021","shortDate":"2021-06-01","day":1,"month":"Jun","name":"New series: My Next Life as a Villainess: All Routes Lead to Doom!","class":"new-series"}]},{"date":"2021-06-08T18:00:00.000Z","shortDate":"2021-06-08","month":"Jun","day":8,"weekday":"Tuesday","class":"online","events":[{"date":"2021-06-08T18:00:00.000Z","dateLong":"Tuesday, 8 June 2021, 7pm","mediumDate":"8 Jun 2021","shortDate":"2021-06-08","time":"7pm","weekday":"Tuesday","day":8,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-06-15T18:00:00.000Z","shortDate":"2021-06-15","month":"Jun","day":15,"weekday":"Tuesday","class":"online","events":[{"date":"2021-06-15T18:00:00.000Z","dateLong":"Tuesday, 15 June 2021, 7pm","mediumDate":"15 Jun 2021","shortDate":"2021-06-15","time":"7pm","weekday":"Tuesday","day":15,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-06-22T18:00:00.000Z","shortDate":"2021-06-22","month":"Jun","day":22,"weekday":"Tuesday","class":"online","events":[{"date":"2021-06-22T18:00:00.000Z","dateLong":"Tuesday, 22 June 2021, 7pm","mediumDate":"22 Jun 2021","shortDate":"2021-06-22","time":"7pm","weekday":"Tuesday","day":22,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-06-29T18:00:00.000Z","shortDate":"2021-06-29","month":"Jun","day":29,"weekday":"Tuesday","class":"online","events":[{"date":"2021-06-29T18:00:00.000Z","dateLong":"Tuesday, 29 June 2021, 7pm","mediumDate":"29 Jun 2021","shortDate":"2021-06-29","time":"7pm","weekday":"Tuesday","day":29,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-07-06T18:00:00.000Z","shortDate":"2021-07-06","month":"Jul","day":6,"weekday":"Tuesday","class":"online","events":[{"date":"2021-07-06T18:00:00.000Z","dateLong":"Tuesday, 6 July 2021, 7pm","mediumDate":"6 Jul 2021","shortDate":"2021-07-06","time":"7pm","weekday":"Tuesday","day":6,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-07-13T18:00:00.000Z","shortDate":"2021-07-13","month":"Jul","day":13,"class":"new-series","events":[{"date":"2021-07-13T18:00:00.000Z","dateLong":"Tuesday, 13 July 2021, 7pm","mediumDate":"13 Jul 2021","shortDate":"2021-07-13","day":13,"month":"Jul","name":"New series: Golden Kamuy Third Season","class":"new-series"},{"date":"2021-07-13T18:00:00.000Z","dateLong":"Tuesday, 13 July 2021, 7pm","mediumDate":"13 Jul 2021","shortDate":"2021-07-13","time":"7pm","weekday":"Tuesday","day":13,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-07-13T20:00:00.000Z","dateLong":"Tuesday, 13 July 2021, 9pm","mediumDate":"13 Jul 2021","shortDate":"2021-07-13","day":13,"month":"Jul","name":"New series: Sound of the Sky","class":"new-series"}]},{"date":"2021-07-20T18:00:00.000Z","shortDate":"2021-07-20","month":"Jul","day":20,"weekday":"Tuesday","class":"online","events":[{"date":"2021-07-20T18:00:00.000Z","dateLong":"Tuesday, 20 July 2021, 7pm","mediumDate":"20 Jul 2021","shortDate":"2021-07-20","time":"7pm","weekday":"Tuesday","day":20,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-07-27T18:00:00.000Z","shortDate":"2021-07-27","month":"Jul","day":27,"weekday":"Tuesday","class":"online","events":[{"date":"2021-07-27T18:00:00.000Z","dateLong":"Tuesday, 27 July 2021, 7pm","mediumDate":"27 Jul 2021","shortDate":"2021-07-27","time":"7pm","weekday":"Tuesday","day":27,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-08-03T18:00:00.000Z","shortDate":"2021-08-03","month":"Aug","day":3,"weekday":"Tuesday","class":"online","events":[{"date":"2021-08-03T18:00:00.000Z","dateLong":"Tuesday, 3 August 2021, 7pm","mediumDate":"3 Aug 2021","shortDate":"2021-08-03","time":"7pm","weekday":"Tuesday","day":3,"month":"Aug","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""},{"date":"2021-08-03T19:00:00.000Z","dateLong":"Tuesday, 3 August 2021, 8pm","mediumDate":"3 Aug 2021","shortDate":"2021-08-03","day":3,"month":"Aug","name":"New series: Bunny Drop","class":"new-series"}]},{"date":"2021-08-10T18:00:00.000Z","shortDate":"2021-08-10","month":"Aug","day":10,"weekday":"Tuesday","class":"online","events":[{"date":"2021-08-10T18:00:00.000Z","dateLong":"Tuesday, 10 August 2021, 7pm","mediumDate":"10 Aug 2021","shortDate":"2021-08-10","time":"7pm","weekday":"Tuesday","day":10,"month":"Aug","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-08-17T18:00:00.000Z","shortDate":"2021-08-17","month":"Aug","day":17,"weekday":"Tuesday","class":"online","events":[{"date":"2021-08-17T18:00:00.000Z","dateLong":"Tuesday, 17 August 2021, 7pm","mediumDate":"17 Aug 2021","shortDate":"2021-08-17","time":"7pm","weekday":"Tuesday","day":17,"month":"Aug","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-08-24T18:00:00.000Z","shortDate":"2021-08-24","month":"Aug","day":24,"class":"new-series","events":[{"date":"2021-08-24T18:00:00.000Z","dateLong":"Tuesday, 24 August 2021, 7pm","mediumDate":"24 Aug 2021","shortDate":"2021-08-24","day":24,"month":"Aug","name":"New series: Legend of the Galactic Heroes: Die Neue These","class":"new-series"},{"date":"2021-08-24T18:00:00.000Z","dateLong":"Tuesday, 24 August 2021, 7pm","mediumDate":"24 Aug 2021","shortDate":"2021-08-24","time":"7pm","weekday":"Tuesday","day":24,"month":"Aug","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]}];

var options = {"online":true,"hiatus":false,"hiatusMessage":"Our regular schedule resumes on 28 April","comingSoonRows":3,"newsCutoff":0};

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
      document.getElementById(id+'rating').innerHTML = `<img class='rating rating-${series.rating}' src='images/rating/${series.rating}.svg'>`;
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
  comingSoon = futureN(comingSoon, 8);
  comingSoon = excludeSeries(comingSoon, [currentSlot1, currentSlot2, currentSlot3]);

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
      html = html + `<img class='rating rating-${item.rating}' src='images/rating/${item.rating}.svg'>`;
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
