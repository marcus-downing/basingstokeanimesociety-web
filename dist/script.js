var slot1 = [{"from":"2020-10-20T21:00:00.000Z","name":"Rascal Does Not Dream of Bunny Girl Senpai","picture":"bunny-girl-senpai","day":27,"month":"Oct"},{"from":"2020-12-29T22:00:00.000Z","name":"Xam'd: Lost Memories","picture":"xamd","day":5,"month":"Jan"},{"from":"2021-03-30T21:00:00.000Z","name":"Ancient Magus Bride","picture":"ancient-magus-bride","day":6,"month":"Apr"}];
var slot2 = [{"from":"2020-10-27T22:00:00.000Z","name":"Hisone &amp; Maso-tan","picture":"hisone-masotan","day":3,"month":"Nov"},{"from":"2020-12-29T22:00:00.000Z","name":"Astra: Lost in Space","picture":"Astra","day":5,"month":"Jan"},{"from":"2021-02-16T22:00:00.000Z","name":"Ore Monogatari","picture":"oremonogatari","day":23,"month":"Feb"}];
var slot3 = [{"from":"2020-10-13T21:00:00.000Z","name":"Zombieland Saga","picture":"zombieland-saga","day":20,"month":"Oct"},{"from":"2020-11-24T22:00:00.000Z","name":"Wasteful Days of High School Girls","picture":"wasteful-days","day":1,"month":"Dec"},{"from":"2021-01-19T22:00:00.000Z","name":"Flying Witch","picture":"flying-witch","day":26,"month":"Jan"},{"from":"2021-03-02T22:00:00.000Z","name":"Keep Your Hands Off Eizouken!","picture":"eizouken","day":9,"month":"Mar"}];
var movies = [{"name":"Konosuba - Legend of Crimson","date":"2020-11-22T00:00:00.000Z","time":"3pm","venue":"Discord","picture":"konosuba-legend-of-crimson","day":22,"month":"Nov","movie":true},{"name":"Rascal Does Not Dream of a Dreaming Girl","date":"2020-12-15T00:00:00.000Z","time":"7pm","venue":"Discord","picture":"bunny-girl-senpai-movie","day":15,"month":"Dec","movie":true},{"name":"Tamako Love Story","date":"2020-12-17T00:00:00.000Z","time":"7pm","venue":"Discord","picture":"tamako-love-story","day":17,"month":"Dec","movie":true},{"name":"Children who Chase Lost Voices","date":"2020-12-22T00:00:00.000Z","time":"7pm","venue":"Discord","picture":"agartha","day":22,"month":"Dec","movie":true},{"name":"Patema Inverted","date":"2020-12-29T00:00:00.000Z","time":"7pm","venue":"Discord","picture":"patema-inverted","day":29,"month":"Dec","movie":true}];

var events = [{"date":"2020-11-17T19:00:00.000Z","shortDate":"2020-11-17","month":"Nov","day":17,"weekday":"Tuesday","class":"online","events":[{"date":"2020-11-17T19:00:00.000Z","dateLong":"Tuesday, 17 November 2020, 7pm","mediumDate":"17 Nov 2020","shortDate":"2020-11-17","time":"7pm","weekday":"Tuesday","day":17,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2020-11-22T00:00:00.000Z","shortDate":"2020-11-22","month":"Nov","day":22,"class":"movie","events":[{"date":"2020-11-22T00:00:00.000Z","dateLong":"Sunday, 22 November 2020, 3pm","mediumDate":"22 Nov 2020","shortDate":"2020-11-22","time":"3pm","day":22,"month":"Nov","name":"Movie: Konosuba - Legend of Crimson","class":"movie","venue":"Discord"}]},{"date":"2020-11-24T19:00:00.000Z","shortDate":"2020-11-24","month":"Nov","day":24,"weekday":"Tuesday","class":"online","events":[{"date":"2020-11-24T19:00:00.000Z","dateLong":"Tuesday, 24 November 2020, 7pm","mediumDate":"24 Nov 2020","shortDate":"2020-11-24","time":"7pm","weekday":"Tuesday","day":24,"month":"Nov","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2020-12-01T00:00:00.000Z","shortDate":"2020-12-01","month":"Dec","day":1,"class":"new-series","events":[{"date":"2020-12-01T00:00:00.000Z","dateLong":"Tuesday, 1 December 2020, 9pm","mediumDate":"1 Dec 2020","shortDate":"2020-12-01","day":1,"month":"Dec","name":"New series: Wasteful Days of High School Girls","class":"new-series"},{"date":"2020-12-01T19:00:00.000Z","dateLong":"Tuesday, 1 December 2020, 7pm","mediumDate":"1 Dec 2020","shortDate":"2020-12-01","time":"7pm","weekday":"Tuesday","day":1,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2020-12-08T19:00:00.000Z","shortDate":"2020-12-08","month":"Dec","day":8,"weekday":"Tuesday","class":"online","events":[{"date":"2020-12-08T19:00:00.000Z","dateLong":"Tuesday, 8 December 2020, 7pm","mediumDate":"8 Dec 2020","shortDate":"2020-12-08","time":"7pm","weekday":"Tuesday","day":8,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2020-12-15T00:00:00.000Z","shortDate":"2020-12-15","month":"Dec","day":15,"class":"movie","events":[{"date":"2020-12-15T00:00:00.000Z","dateLong":"Tuesday, 15 December 2020, 7pm","mediumDate":"15 Dec 2020","shortDate":"2020-12-15","time":"7pm","day":15,"month":"Dec","name":"Movie: Rascal Does Not Dream of a Dreaming Girl","class":"movie","venue":"Discord"},{"date":"2020-12-15T19:00:00.000Z","dateLong":"Tuesday, 15 December 2020, 7pm","mediumDate":"15 Dec 2020","shortDate":"2020-12-15","time":"7pm","weekday":"Tuesday","day":15,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2020-12-17T00:00:00.000Z","shortDate":"2020-12-17","month":"Dec","day":17,"class":"movie","events":[{"date":"2020-12-17T00:00:00.000Z","dateLong":"Thursday, 17 December 2020, 7pm","mediumDate":"17 Dec 2020","shortDate":"2020-12-17","time":"7pm","day":17,"month":"Dec","name":"Movie: Tamako Love Story","class":"movie","venue":"Discord"}]},{"date":"2020-12-22T00:00:00.000Z","shortDate":"2020-12-22","month":"Dec","day":22,"class":"movie","events":[{"date":"2020-12-22T00:00:00.000Z","dateLong":"Tuesday, 22 December 2020, 7pm","mediumDate":"22 Dec 2020","shortDate":"2020-12-22","time":"7pm","day":22,"month":"Dec","name":"Movie: Children who Chase Lost Voices","class":"movie","venue":"Discord"},{"date":"2020-12-22T19:00:00.000Z","dateLong":"Tuesday, 22 December 2020, 7pm","mediumDate":"22 Dec 2020","shortDate":"2020-12-22","time":"7pm","weekday":"Tuesday","day":22,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2020-12-29T00:00:00.000Z","shortDate":"2020-12-29","month":"Dec","day":29,"class":"movie","events":[{"date":"2020-12-29T00:00:00.000Z","dateLong":"Tuesday, 29 December 2020, 7pm","mediumDate":"29 Dec 2020","shortDate":"2020-12-29","time":"7pm","day":29,"month":"Dec","name":"Movie: Patema Inverted","class":"movie","venue":"Discord"},{"date":"2020-12-29T19:00:00.000Z","dateLong":"Tuesday, 29 December 2020, 7pm","mediumDate":"29 Dec 2020","shortDate":"2020-12-29","time":"7pm","weekday":"Tuesday","day":29,"month":"Dec","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-01-05T00:00:00.000Z","shortDate":"2021-01-05","month":"Jan","day":5,"class":"new-series","events":[{"date":"2021-01-05T00:00:00.000Z","dateLong":"Tuesday, 5 January 2021, 7pm","mediumDate":"5 Jan 2021","shortDate":"2021-01-05","day":5,"month":"Jan","name":"New series: Xam'd: Lost Memories","class":"new-series"},{"date":"2021-01-05T00:00:00.000Z","dateLong":"Tuesday, 5 January 2021, 8pm","mediumDate":"5 Jan 2021","shortDate":"2021-01-05","day":5,"month":"Jan","name":"New series: Astra: Lost in Space","class":"new-series"},{"date":"2021-01-05T19:00:00.000Z","dateLong":"Tuesday, 5 January 2021, 7pm","mediumDate":"5 Jan 2021","shortDate":"2021-01-05","time":"7pm","weekday":"Tuesday","day":5,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-01-12T19:00:00.000Z","shortDate":"2021-01-12","month":"Jan","day":12,"weekday":"Tuesday","class":"online","events":[{"date":"2021-01-12T19:00:00.000Z","dateLong":"Tuesday, 12 January 2021, 7pm","mediumDate":"12 Jan 2021","shortDate":"2021-01-12","time":"7pm","weekday":"Tuesday","day":12,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-01-19T19:00:00.000Z","shortDate":"2021-01-19","month":"Jan","day":19,"weekday":"Tuesday","class":"online","events":[{"date":"2021-01-19T19:00:00.000Z","dateLong":"Tuesday, 19 January 2021, 7pm","mediumDate":"19 Jan 2021","shortDate":"2021-01-19","time":"7pm","weekday":"Tuesday","day":19,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-01-26T00:00:00.000Z","shortDate":"2021-01-26","month":"Jan","day":26,"class":"new-series","events":[{"date":"2021-01-26T00:00:00.000Z","dateLong":"Tuesday, 26 January 2021, 9pm","mediumDate":"26 Jan 2021","shortDate":"2021-01-26","day":26,"month":"Jan","name":"New series: Flying Witch","class":"new-series"},{"date":"2021-01-26T19:00:00.000Z","dateLong":"Tuesday, 26 January 2021, 7pm","mediumDate":"26 Jan 2021","shortDate":"2021-01-26","time":"7pm","weekday":"Tuesday","day":26,"month":"Jan","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-02-02T19:00:00.000Z","shortDate":"2021-02-02","month":"Feb","day":2,"weekday":"Tuesday","class":"online","events":[{"date":"2021-02-02T19:00:00.000Z","dateLong":"Tuesday, 2 February 2021, 7pm","mediumDate":"2 Feb 2021","shortDate":"2021-02-02","time":"7pm","weekday":"Tuesday","day":2,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-02-09T19:00:00.000Z","shortDate":"2021-02-09","month":"Feb","day":9,"weekday":"Tuesday","class":"online","events":[{"date":"2021-02-09T19:00:00.000Z","dateLong":"Tuesday, 9 February 2021, 7pm","mediumDate":"9 Feb 2021","shortDate":"2021-02-09","time":"7pm","weekday":"Tuesday","day":9,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-02-16T19:00:00.000Z","shortDate":"2021-02-16","month":"Feb","day":16,"weekday":"Tuesday","class":"online","events":[{"date":"2021-02-16T19:00:00.000Z","dateLong":"Tuesday, 16 February 2021, 7pm","mediumDate":"16 Feb 2021","shortDate":"2021-02-16","time":"7pm","weekday":"Tuesday","day":16,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-02-23T00:00:00.000Z","shortDate":"2021-02-23","month":"Feb","day":23,"class":"new-series","events":[{"date":"2021-02-23T00:00:00.000Z","dateLong":"Tuesday, 23 February 2021, 8pm","mediumDate":"23 Feb 2021","shortDate":"2021-02-23","day":23,"month":"Feb","name":"New series: Ore Monogatari","class":"new-series"},{"date":"2021-02-23T19:00:00.000Z","dateLong":"Tuesday, 23 February 2021, 7pm","mediumDate":"23 Feb 2021","shortDate":"2021-02-23","time":"7pm","weekday":"Tuesday","day":23,"month":"Feb","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-03-02T19:00:00.000Z","shortDate":"2021-03-02","month":"Mar","day":2,"weekday":"Tuesday","class":"online","events":[{"date":"2021-03-02T19:00:00.000Z","dateLong":"Tuesday, 2 March 2021, 7pm","mediumDate":"2 Mar 2021","shortDate":"2021-03-02","time":"7pm","weekday":"Tuesday","day":2,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-03-09T00:00:00.000Z","shortDate":"2021-03-09","month":"Mar","day":9,"class":"new-series","events":[{"date":"2021-03-09T00:00:00.000Z","dateLong":"Tuesday, 9 March 2021, 9pm","mediumDate":"9 Mar 2021","shortDate":"2021-03-09","day":9,"month":"Mar","name":"New series: Keep Your Hands Off Eizouken!","class":"new-series"},{"date":"2021-03-09T19:00:00.000Z","dateLong":"Tuesday, 9 March 2021, 7pm","mediumDate":"9 Mar 2021","shortDate":"2021-03-09","time":"7pm","weekday":"Tuesday","day":9,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]},{"date":"2021-03-16T19:00:00.000Z","shortDate":"2021-03-16","month":"Mar","day":16,"weekday":"Tuesday","class":"online","events":[{"date":"2021-03-16T19:00:00.000Z","dateLong":"Tuesday, 16 March 2021, 7pm","mediumDate":"16 Mar 2021","shortDate":"2021-03-16","time":"7pm","weekday":"Tuesday","day":16,"month":"Mar","name":"Online Meeting","class":"online","price":null,"venue":"Discord","address":""}]}];

var options = {"online":true,"hiatus":false,"hiatusMessage":"Our regular schedule resumes on 28 April"};

// select a background image
function selectBackground() {
    var DAY_LIMIT = 4;
    var NIGHT_LIMIT = 7;

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

  function nextAnime(slot) {
    var after = slot.filter(function (series) {
      return Date.parse(series.from) >= now;
    });
    return after[0];
  }

  var currentSlot1 = showingAnime(slot1);
  var currentSlot2 = showingAnime(slot2);
  var currentSlot3 = showingAnime(slot3);

  var nextSlot1 = nextAnime(slot1);
  var nextSlot2 = nextAnime(slot2);
  var nextSlot3 = nextAnime(slot3);

  function editSlot(id, series) {
    document.getElementById(id+'name').innerHTML = series.name;
    document.getElementById(id+'picture').setAttribute('src', 'images/series/'+series.picture+'.png');
    var slotDate = document.getElementById(id+'date');
    if (slotDate !== null) {
      slotDate.innerHTML = "<span class='day'>"+series.day+"</span><span class='month'>"+series.month+"</span>";
    }
  }

  editSlot('slot1', currentSlot1);
  editSlot('slot2', currentSlot2);
  editSlot('slot3', currentSlot3);

  // editSlot('nextSlot1', nextSlot1);
  // editSlot('nextSlot2', nextSlot2);
  // editSlot('nextSlot3', nextSlot3);

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
