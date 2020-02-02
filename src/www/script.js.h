var slot1 = {{{json slot1}}};
var slot2 = {{{json slot2}}};
var slot3 = {{{json slot3}}};

var events = {{{json allEvents}}};

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
  events = events.slice(0, {{ maxEvents }});
  var nextEvent = events[0];

  var eventsHTML = '';
  var event;
  for (event of events) {
    var html = "<article id='upcoming-"+event.date+"' class='event event-"+event.class+"'>\n"+
      "<time datetime='"+event.date+"'><span class='day'>"+event.day+"</span><span class='month'>"+event.month+"</span></time>\n"+
      "<h3>"+event.name+"</h3>\n"+
      "<p>"+event.venue+"</h3>\n"+
      "</article>\n";
    eventsHTML = eventsHTML + html;
  }
  document.getElementById('events-list').innerHTML = eventsHTML;

  // adjust the next event headline
  var nextEvent = events[0];
  document.getElementById('next-meeting-date').innerHTML = nextEvent.dateLong;
  document.getElementById('next-meeting-venue').innerHTML = nextEvent.venue;
  document.getElementById('next-meeting-address').innerHTML = nextEvent.address;

  selectBackground();
};
setInterval(selectBackground, 300000); // 5 minutes
