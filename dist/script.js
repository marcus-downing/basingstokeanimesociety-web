var slot1 = [{"from":"2020-02-25T22:00:00.000Z","name":"The Great Passage","picture":"great-passage","solo":8},{"from":"2020-05-12T21:00:00.000Z","name":"Golden Kamuy","picture":"golden-kamuy"},{"from":"2020-08-11T21:00:00.000Z","name":"Freedom","picture":"freedom"},{"from":"2020-09-08T21:00:00.000Z","name":"The Promised Neverland","picture":"promised-neverland"}];
var slot2 = [{"from":"2019-01-01T22:00:00.000Z","name":"Hunter &times; Hunter","picture":"hunter-x-hunter"},{"from":"2020-07-21T21:00:00.000Z","name":"Spice and Wolf","picture":"spice-and-wolf"}];
var slot3 = [{"from":"2020-02-11T22:00:00.000Z","name":"Kaguya-sama, Love is War","picture":"kaguya-sama"},{"from":"2020-04-28T21:00:00.000Z","name":"Hinamatsuri","picture":"hinamatsuri"},{"from":"2020-06-09T21:00:00.000Z","name":"Demi-chan wa Kataritai","picture":"demi-chan"},{"from":"2020-07-21T21:00:00.000Z","name":"Chio's School Road","picture":"chios-school-road"},{"from":"2020-09-01T21:00:00.000Z","name":"Konosuba S2","picture":"konosuba2"}];

var events = [{"date":"2020-04-28T18:00:00.000Z","shortDate":"2020-04-28","month":"Apr","day":28,"class":"online","events":[{"date":"2020-04-28T18:00:00.000Z","dateLong":"Tuesday, 28 April 2020, 7pm","time":"7pm","day":28,"month":"Apr","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-05-05T00:00:00.000Z","shortDate":"2020-05-05","month":"May","day":5,"class":"new-series","events":[{"date":"2020-05-05T00:00:00.000Z","dateLong":"Tuesday, 5 May 2020, 9pm","day":5,"month":"May","name":"New series: Hinamatsuri","class":"new-series"},{"date":"2020-05-05T18:00:00.000Z","dateLong":"Tuesday, 5 May 2020, 7pm","time":"7pm","day":5,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-05-12T18:00:00.000Z","shortDate":"2020-05-12","month":"May","day":12,"class":"online","events":[{"date":"2020-05-12T18:00:00.000Z","dateLong":"Tuesday, 12 May 2020, 7pm","time":"7pm","day":12,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-05-19T00:00:00.000Z","shortDate":"2020-05-19","month":"May","day":19,"class":"new-series","events":[{"date":"2020-05-19T00:00:00.000Z","dateLong":"Tuesday, 19 May 2020, 7pm","day":19,"month":"May","name":"New series: Golden Kamuy","class":"new-series"},{"date":"2020-05-19T18:00:00.000Z","dateLong":"Tuesday, 19 May 2020, 7pm","time":"7pm","day":19,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-05-26T18:00:00.000Z","shortDate":"2020-05-26","month":"May","day":26,"class":"online","events":[{"date":"2020-05-26T18:00:00.000Z","dateLong":"Tuesday, 26 May 2020, 7pm","time":"7pm","day":26,"month":"May","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-06-02T18:00:00.000Z","shortDate":"2020-06-02","month":"Jun","day":2,"class":"online","events":[{"date":"2020-06-02T18:00:00.000Z","dateLong":"Tuesday, 2 June 2020, 7pm","time":"7pm","day":2,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-06-09T18:00:00.000Z","shortDate":"2020-06-09","month":"Jun","day":9,"class":"online","events":[{"date":"2020-06-09T18:00:00.000Z","dateLong":"Tuesday, 9 June 2020, 7pm","time":"7pm","day":9,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-06-16T00:00:00.000Z","shortDate":"2020-06-16","month":"Jun","day":16,"class":"new-series","events":[{"date":"2020-06-16T00:00:00.000Z","dateLong":"Tuesday, 16 June 2020, 9pm","day":16,"month":"Jun","name":"New series: Demi-chan wa Kataritai","class":"new-series"},{"date":"2020-06-16T18:00:00.000Z","dateLong":"Tuesday, 16 June 2020, 7pm","time":"7pm","day":16,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-06-23T18:00:00.000Z","shortDate":"2020-06-23","month":"Jun","day":23,"class":"online","events":[{"date":"2020-06-23T18:00:00.000Z","dateLong":"Tuesday, 23 June 2020, 7pm","time":"7pm","day":23,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-06-30T18:00:00.000Z","shortDate":"2020-06-30","month":"Jun","day":30,"class":"online","events":[{"date":"2020-06-30T18:00:00.000Z","dateLong":"Tuesday, 30 June 2020, 7pm","time":"7pm","day":30,"month":"Jun","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-07-07T18:00:00.000Z","shortDate":"2020-07-07","month":"Jul","day":7,"class":"online","events":[{"date":"2020-07-07T18:00:00.000Z","dateLong":"Tuesday, 7 July 2020, 7pm","time":"7pm","day":7,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]},{"date":"2020-07-14T18:00:00.000Z","shortDate":"2020-07-14","month":"Jul","day":14,"class":"online","events":[{"date":"2020-07-14T18:00:00.000Z","dateLong":"Tuesday, 14 July 2020, 7pm","time":"7pm","day":14,"month":"Jul","name":"Online Meeting","class":"online","price":null,"venue":"","address":""}]}];

var options = {"online":true,"hiatus":false,"hiatusMessage":"Our regular schedule resumes on 28 April"};

// select a background image
function selectBackground() {
    var LIMIT = 3;

    var hour = new Date().getHours();
    var isDay = hour >= 6 && hour < 18;
    var bgNum = 1+Math.floor(Math.random() * LIMIT);
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

  var currentSlot1 = showingAnime(slot1);
  var currentSlot2 = showingAnime(slot2);
  var currentSlot3 = showingAnime(slot3);

  function editSlot(id, series) {
    document.getElementById(id+'name').innerHTML = series.name;
    document.getElementById(id+'picture').setAttribute('src', 'images/series/'+series.picture+'.png');
  }

  editSlot('slot1', currentSlot1);
  editSlot('slot2', currentSlot2);
  editSlot('slot3', currentSlot3);

  // adjust the events list
  events = events.filter(function (event) {
    return Date.parse(event.date) >= now;
  });
  events = events.slice(0, 12);
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
  document.getElementById('next-meeting-date').innerHTML = nextEvent.dateLong;
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
