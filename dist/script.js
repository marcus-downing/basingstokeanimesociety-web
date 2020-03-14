var slot1 = [{"from":"2020-02-25T22:00:00.000Z","name":"The Great Passage","picture":"great-passage","solo":8},{"from":"2020-04-07T21:00:00.000Z","name":"Golden Kamuy","picture":"golden-kamuy"},{"from":"2020-06-30T21:00:00.000Z","name":"Freedom","picture":"freedom"},{"from":"2020-08-04T21:00:00.000Z","name":"The Promised Neverland","picture":"promised-neverland"}];
var slot2 = [{"from":"2019-01-01T22:00:00.000Z","name":"Hunter &times; Hunter","picture":"hunter-x-hunter"},{"from":"2020-06-16T21:00:00.000Z","name":"Spice and Wolf","picture":"spice-and-wolf"}];
var slot3 = [{"from":"2020-02-11T22:00:00.000Z","name":"Kaguya-sama, Love is War","picture":"kaguya-sama"},{"from":"2020-03-24T22:00:00.000Z","name":"Hinamatsuri","picture":"hinamatsuri"},{"from":"2020-05-05T21:00:00.000Z","name":"Demi-chan wa Kataritai","picture":"demi-chan"},{"from":"2020-06-16T21:00:00.000Z","name":"Chio's School Road","picture":"chios-school-road"},{"from":"2020-07-28T21:00:00.000Z","name":"Konosuba S2","picture":"konosuba2"}];

var events = [{"date":"2020-03-17T19:00:00.000Z","dateLong":"Tuesday, 17 March 2020, 7pm","time":"7pm","price":"&pound;4","day":17,"month":"Mar","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"name":"Social Meeting","date":"2020-03-21T00:00:00.000Z","time":"1pm","venue":"The Tea Bar","class":"social","dateLong":"Saturday, 21 March 2020, undefined","day":21,"month":"Mar","address":"9 London Rd, Basingstoke RG21 7NT"},{"date":"2020-03-24T19:00:00.000Z","dateLong":"Tuesday, 24 March 2020, 7pm","time":"7pm","price":"&pound;4","day":24,"month":"Mar","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-03-31T18:00:00.000Z","dateLong":"Tuesday, 31 March 2020, 7pm","time":"7pm","price":"&pound;4","day":31,"month":"Mar","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"name":"CosXPo","date":"2020-04-03T00:00:00.000Z","venue":"University of Reading","class":"convention","dateLong":"Friday, 3 April 2020, undefined","day":3,"month":"Apr"},{"date":"2020-04-07T18:00:00.000Z","dateLong":"Tuesday, 7 April 2020, 7pm","time":"7pm","price":"&pound;4","day":7,"month":"Apr","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-04-14T18:00:00.000Z","dateLong":"Tuesday, 14 April 2020, 7pm","time":"7pm","price":"&pound;4","day":14,"month":"Apr","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-04-21T18:00:00.000Z","dateLong":"Tuesday, 21 April 2020, 7pm","time":"7pm","price":"&pound;4","day":21,"month":"Apr","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-04-28T18:00:00.000Z","dateLong":"Tuesday, 28 April 2020, 7pm","time":"7pm","price":"&pound;4","day":28,"month":"Apr","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-05-05T18:00:00.000Z","dateLong":"Tuesday, 5 May 2020, 7pm","time":"7pm","price":"&pound;4","day":5,"month":"May","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-05-12T18:00:00.000Z","dateLong":"Tuesday, 12 May 2020, 7pm","time":"7pm","price":"&pound;4","day":12,"month":"May","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-05-19T18:00:00.000Z","dateLong":"Tuesday, 19 May 2020, 7pm","time":"7pm","price":"&pound;4","day":19,"month":"May","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-05-26T18:00:00.000Z","dateLong":"Tuesday, 26 May 2020, 7pm","time":"7pm","price":"&pound;4","day":26,"month":"May","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-06-02T18:00:00.000Z","dateLong":"Tuesday, 2 June 2020, 7pm","time":"7pm","price":"&pound;4","day":2,"month":"Jun","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-06-09T18:00:00.000Z","dateLong":"Tuesday, 9 June 2020, 7pm","time":"7pm","price":"&pound;4","day":9,"month":"Jun","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-06-16T18:00:00.000Z","dateLong":"Tuesday, 16 June 2020, 7pm","time":"7pm","price":"&pound;4","day":16,"month":"Jun","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-06-23T18:00:00.000Z","dateLong":"Tuesday, 23 June 2020, 7pm","time":"7pm","price":"&pound;4","day":23,"month":"Jun","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-06-30T18:00:00.000Z","dateLong":"Tuesday, 30 June 2020, 7pm","time":"7pm","price":"&pound;4","day":30,"month":"Jun","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-07-07T18:00:00.000Z","dateLong":"Tuesday, 7 July 2020, 7pm","time":"7pm","price":"&pound;4","day":7,"month":"Jul","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-07-14T18:00:00.000Z","dateLong":"Tuesday, 14 July 2020, 7pm","time":"7pm","price":"&pound;4","day":14,"month":"Jul","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-07-21T18:00:00.000Z","dateLong":"Tuesday, 21 July 2020, 7pm","time":"7pm","price":"&pound;4","day":21,"month":"Jul","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-07-28T18:00:00.000Z","dateLong":"Tuesday, 28 July 2020, 7pm","time":"7pm","price":"&pound;4","day":28,"month":"Jul","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-08-04T18:00:00.000Z","dateLong":"Tuesday, 4 August 2020, 7pm","time":"7pm","price":"&pound;4","day":4,"month":"Aug","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-08-11T18:00:00.000Z","dateLong":"Tuesday, 11 August 2020, 7pm","time":"7pm","price":"&pound;4","day":11,"month":"Aug","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-08-18T18:00:00.000Z","dateLong":"Tuesday, 18 August 2020, 7pm","time":"7pm","price":"&pound;4","day":18,"month":"Aug","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-08-25T18:00:00.000Z","dateLong":"Tuesday, 25 August 2020, 7pm","time":"7pm","price":"&pound;4","day":25,"month":"Aug","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-09-01T18:00:00.000Z","dateLong":"Tuesday, 1 September 2020, 7pm","time":"7pm","price":"&pound;4","day":1,"month":"Sep","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-09-08T18:00:00.000Z","dateLong":"Tuesday, 8 September 2020, 7pm","time":"7pm","price":"&pound;4","day":8,"month":"Sep","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-09-15T18:00:00.000Z","dateLong":"Tuesday, 15 September 2020, 7pm","time":"7pm","price":"&pound;4","day":15,"month":"Sep","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-09-22T18:00:00.000Z","dateLong":"Tuesday, 22 September 2020, 7pm","time":"7pm","price":"&pound;4","day":22,"month":"Sep","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-09-29T18:00:00.000Z","dateLong":"Tuesday, 29 September 2020, 7pm","time":"7pm","price":"&pound;4","day":29,"month":"Sep","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2020-10-06T18:00:00.000Z","dateLong":"Tuesday, 6 October 2020, 7pm","time":"7pm","price":"&pound;4","day":6,"month":"Oct","name":"Anime Society Meeting","class":"anime","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"name":"Hibanacon","date":"2020-11-06T00:00:00.000Z","venue":"Jury's Inn, Milton Keynes","class":"convention","dateLong":"Friday, 6 November 2020, undefined","day":6,"month":"Nov"},{"name":"No Meeting","date":"2020-12-22T00:00:00.000Z","class":"skip","dateLong":"Tuesday, 22 December 2020, undefined","day":22,"month":"Dec","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"name":"No Meeting","date":"2020-12-29T00:00:00.000Z","class":"skip","dateLong":"Tuesday, 29 December 2020, undefined","day":29,"month":"Dec","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}];

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
  var nextEvent = events[0];

  var eventsHTML = '';
  var event;
  for (event of events) {
    var time = false;
    if (event.hasOwnProperty("time")) {
      time = event.time;
    }
    var a = "";
    var _a = "";
    if (event.hasOwnProperty("link")) {
      a = "<a href='"+event.link+"'>";
      _a = "</a>";
    }
    var html = "<article id='upcoming-"+event.date+"' class='event event-"+event.class+"'>\n"+
      "<time datetime='"+event.date+"'><span class='day'>"+event.day+"</span><span class='month'>"+event.month+"</span></time>\n"+
      "<h3>"+event.name+"</h3>\n"+
      "<p>"+a+event.venue+(time ? ", "+time : "")+_a+"</p>\n"+
      (event.price ? ("<p>Attendance fee: "+event.price+"</p>") : '')+
      "</article>\n";
    eventsHTML = eventsHTML + html;
  }
  document.getElementById('events-list').innerHTML = eventsHTML;

  // adjust the next event headline
  var mainEvents = events.filter(function (event) {
    switch (event.class) {
      case 'esports':
      case 'cinema':
      case 'skip':
        return false;

      default:
        return true;
    }
  });
  var nextEvent = mainEvents[0];
  document.getElementById('next-meeting-date').innerHTML = nextEvent.dateLong;
  document.getElementById('next-meeting-title').innerHTML = (nextEvent.name == 'Anime Society Meeting' ? '' : nextEvent.name);
  document.getElementById('next-meeting-venue').innerHTML = nextEvent.venue;
  document.getElementById('next-meeting-address').innerHTML = nextEvent.address;

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

function hideMap() {
  document.getElementById('blanket').className = "hide";
  document.getElementById('map-overlay').className = "hide";
  setTimeout(() => {
    document.getElementById('blanket').className = "";
    document.getElementById('map-overlay').className = "";
  }, 500);
}
