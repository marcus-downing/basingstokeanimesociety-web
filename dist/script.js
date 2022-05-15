var slot1 = [{"from":"2022-04-05T21:00:00.000Z","name":"Ranpo Kitan: Game of Laplace","picture":"ranpo-kitan","rating":15,"date":"2022-04-12T18:00:00.000Z","day":12,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-17T21:00:00.000Z","name":"Aldnoah.Zero","picture":"aldnoah-zero","rating":15,"date":"2022-05-24T18:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"},{"from":"2022-06-28T21:00:00.000Z","name":"Talentless Nana","picture":"talentless-nana","rating":15,"date":"2022-07-05T18:00:00.000Z","day":5,"month":"Jul","weekday":"Tuesday"},{"from":"2022-08-16T21:00:00.000Z","name":"Aldnoah.Zero part 2","picture":"aldnoah-zero","rating":15,"date":"2022-08-23T18:00:00.000Z","day":23,"month":"Aug","weekday":"Tuesday"}];
var slot2 = [{"from":"2022-04-05T21:00:00.000Z","name":"Maoyuu: Maou Yuusha","picture":"maoyuu","rating":15,"date":"2022-04-12T19:00:00.000Z","day":12,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-17T21:00:00.000Z","name":"Dr Stone","picture":"dr-stone","rating":12,"date":"2022-05-24T19:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"}];
var slot3 = [{"from":"2022-04-19T21:00:00.000Z","name":"Recovery of an MMO Junkie","picture":"mmo-junkie","rating":12,"date":"2022-04-26T20:00:00.000Z","day":26,"month":"Apr","weekday":"Tuesday"},{"from":"2022-05-24T21:00:00.000Z","name":"Kino's Journey","picture":"kinos-journey","rating":12,"date":"2022-05-31T20:00:00.000Z","day":31,"month":"May","weekday":"Tuesday"},{"from":"2022-07-05T21:00:00.000Z","name":"By the Grace of the Gods","picture":"by-the-grace-of-the-gods","rating":12,"date":"2022-07-12T20:00:00.000Z","day":12,"month":"Jul","weekday":"Tuesday"}];
// var movies = [];
var comingSoon = [{"from":"2022-05-24T18:00:00.000Z","name":"Aldnoah.Zero","picture":"aldnoah-zero","rating":15,"date":"2022-05-24T18:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"},{"from":"2022-05-24T19:00:00.000Z","name":"Dr Stone","picture":"dr-stone","rating":12,"date":"2022-05-24T19:00:00.000Z","day":24,"month":"May","weekday":"Tuesday"},{"from":"2022-05-31T20:00:00.000Z","name":"Kino's Journey","picture":"kinos-journey","rating":12,"date":"2022-05-31T20:00:00.000Z","day":31,"month":"May","weekday":"Tuesday"},{"from":"2022-07-05T18:00:00.000Z","name":"Talentless Nana","picture":"talentless-nana","rating":15,"date":"2022-07-05T18:00:00.000Z","day":5,"month":"Jul","weekday":"Tuesday"},{"from":"2022-07-12T20:00:00.000Z","name":"By the Grace of the Gods","picture":"by-the-grace-of-the-gods","rating":12,"date":"2022-07-12T20:00:00.000Z","day":12,"month":"Jul","weekday":"Tuesday"},{"from":"2022-08-23T18:00:00.000Z","name":"Aldnoah.Zero part 2","picture":"aldnoah-zero","rating":15,"date":"2022-08-23T18:00:00.000Z","day":23,"month":"Aug","weekday":"Tuesday"}];

var events = [{"date":"2022-05-17T18:00:00.000Z","shortDate":"2022-05-17","month":"May","day":17,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-05-17T18:00:00.000Z","dateLong":"Tuesday, 17 May 2022, 7pm","mediumDate":"17 May 2022","shortDate":"2022-05-17","time":"7pm","weekday":"Tuesday","day":17,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-05-24T18:00:00.000Z","shortDate":"2022-05-24","month":"May","day":24,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-05-24T18:00:00.000Z","dateLong":"Tuesday, 24 May 2022, 7pm","mediumDate":"24 May 2022","shortDate":"2022-05-24","time":"7pm","weekday":"Tuesday","day":24,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-05-24T18:05:00.000Z","dateLong":"Tuesday, 24 May 2022, 7pm","mediumDate":"24 May 2022","shortDate":"2022-05-24","weekday":"Tuesday","time":"7pm","day":24,"month":"May","prename":"New series","name":"Aldnoah.Zero","picture":"aldnoah-zero","class":"new-series"},{"date":"2022-05-24T19:05:00.000Z","dateLong":"Tuesday, 24 May 2022, 8pm","mediumDate":"24 May 2022","shortDate":"2022-05-24","weekday":"Tuesday","time":"8pm","day":24,"month":"May","prename":"New series","name":"Dr Stone","picture":"dr-stone","class":"new-series"}]},{"date":"2022-05-31T18:00:00.000Z","shortDate":"2022-05-31","month":"May","day":31,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-05-31T18:00:00.000Z","dateLong":"Tuesday, 31 May 2022, 7pm","mediumDate":"31 May 2022","shortDate":"2022-05-31","time":"7pm","weekday":"Tuesday","day":31,"month":"May","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-05-31T20:05:00.000Z","dateLong":"Tuesday, 31 May 2022, 9pm","mediumDate":"31 May 2022","shortDate":"2022-05-31","weekday":"Tuesday","time":"9pm","day":31,"month":"May","prename":"New series","name":"Kino's Journey","picture":"kinos-journey","class":"new-series"}]},{"date":"2022-06-07T18:00:00.000Z","shortDate":"2022-06-07","month":"Jun","day":7,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-06-07T18:00:00.000Z","dateLong":"Tuesday, 7 June 2022, 7pm","mediumDate":"7 Jun 2022","shortDate":"2022-06-07","time":"7pm","weekday":"Tuesday","day":7,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-06-14T18:00:00.000Z","shortDate":"2022-06-14","month":"Jun","day":14,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-06-14T18:00:00.000Z","dateLong":"Tuesday, 14 June 2022, 7pm","mediumDate":"14 Jun 2022","shortDate":"2022-06-14","time":"7pm","weekday":"Tuesday","day":14,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-06-21T18:00:00.000Z","shortDate":"2022-06-21","month":"Jun","day":21,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-06-21T18:00:00.000Z","dateLong":"Tuesday, 21 June 2022, 7pm","mediumDate":"21 Jun 2022","shortDate":"2022-06-21","time":"7pm","weekday":"Tuesday","day":21,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-06-28T18:00:00.000Z","shortDate":"2022-06-28","month":"Jun","day":28,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-06-28T18:00:00.000Z","dateLong":"Tuesday, 28 June 2022, 7pm","mediumDate":"28 Jun 2022","shortDate":"2022-06-28","time":"7pm","weekday":"Tuesday","day":28,"month":"Jun","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-07-05T18:00:00.000Z","shortDate":"2022-07-05","month":"Jul","day":5,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-07-05T18:00:00.000Z","dateLong":"Tuesday, 5 July 2022, 7pm","mediumDate":"5 Jul 2022","shortDate":"2022-07-05","time":"7pm","weekday":"Tuesday","day":5,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-07-05T18:05:00.000Z","dateLong":"Tuesday, 5 July 2022, 7pm","mediumDate":"5 Jul 2022","shortDate":"2022-07-05","weekday":"Tuesday","time":"7pm","day":5,"month":"Jul","prename":"New series","name":"Talentless Nana","picture":"talentless-nana","class":"new-series"}]},{"date":"2022-07-12T18:00:00.000Z","shortDate":"2022-07-12","month":"Jul","day":12,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-07-12T18:00:00.000Z","dateLong":"Tuesday, 12 July 2022, 7pm","mediumDate":"12 Jul 2022","shortDate":"2022-07-12","time":"7pm","weekday":"Tuesday","day":12,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-07-12T20:05:00.000Z","dateLong":"Tuesday, 12 July 2022, 9pm","mediumDate":"12 Jul 2022","shortDate":"2022-07-12","weekday":"Tuesday","time":"9pm","day":12,"month":"Jul","prename":"New series","name":"By the Grace of the Gods","picture":"by-the-grace-of-the-gods","class":"new-series"}]},{"date":"2022-07-19T18:00:00.000Z","shortDate":"2022-07-19","month":"Jul","day":19,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-07-19T18:00:00.000Z","dateLong":"Tuesday, 19 July 2022, 7pm","mediumDate":"19 Jul 2022","shortDate":"2022-07-19","time":"7pm","weekday":"Tuesday","day":19,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-07-26T18:00:00.000Z","shortDate":"2022-07-26","month":"Jul","day":26,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-07-26T18:00:00.000Z","dateLong":"Tuesday, 26 July 2022, 7pm","mediumDate":"26 Jul 2022","shortDate":"2022-07-26","time":"7pm","weekday":"Tuesday","day":26,"month":"Jul","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-08-02T18:00:00.000Z","shortDate":"2022-08-02","month":"Aug","day":2,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-08-02T18:00:00.000Z","dateLong":"Tuesday, 2 August 2022, 7pm","mediumDate":"2 Aug 2022","shortDate":"2022-08-02","time":"7pm","weekday":"Tuesday","day":2,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-08-09T18:00:00.000Z","shortDate":"2022-08-09","month":"Aug","day":9,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-08-09T18:00:00.000Z","dateLong":"Tuesday, 9 August 2022, 7pm","mediumDate":"9 Aug 2022","shortDate":"2022-08-09","time":"7pm","weekday":"Tuesday","day":9,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-08-16T18:00:00.000Z","shortDate":"2022-08-16","month":"Aug","day":16,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-08-16T18:00:00.000Z","dateLong":"Tuesday, 16 August 2022, 7pm","mediumDate":"16 Aug 2022","shortDate":"2022-08-16","time":"7pm","weekday":"Tuesday","day":16,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-08-23T18:00:00.000Z","shortDate":"2022-08-23","month":"Aug","day":23,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-08-23T18:00:00.000Z","dateLong":"Tuesday, 23 August 2022, 7pm","mediumDate":"23 Aug 2022","shortDate":"2022-08-23","time":"7pm","weekday":"Tuesday","day":23,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"},{"date":"2022-08-23T18:05:00.000Z","dateLong":"Tuesday, 23 August 2022, 7pm","mediumDate":"23 Aug 2022","shortDate":"2022-08-23","weekday":"Tuesday","time":"7pm","day":23,"month":"Aug","prename":"New series","name":"Aldnoah.Zero part 2","picture":"aldnoah-zero","class":"new-series"}]},{"date":"2022-08-30T18:00:00.000Z","shortDate":"2022-08-30","month":"Aug","day":30,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-08-30T18:00:00.000Z","dateLong":"Tuesday, 30 August 2022, 7pm","mediumDate":"30 Aug 2022","shortDate":"2022-08-30","time":"7pm","weekday":"Tuesday","day":30,"month":"Aug","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-09-06T18:00:00.000Z","shortDate":"2022-09-06","month":"Sept","day":6,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-06T18:00:00.000Z","dateLong":"Tuesday, 6 September 2022, 7pm","mediumDate":"6 Sept 2022","shortDate":"2022-09-06","time":"7pm","weekday":"Tuesday","day":6,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-09-13T18:00:00.000Z","shortDate":"2022-09-13","month":"Sept","day":13,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-13T18:00:00.000Z","dateLong":"Tuesday, 13 September 2022, 7pm","mediumDate":"13 Sept 2022","shortDate":"2022-09-13","time":"7pm","weekday":"Tuesday","day":13,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-09-20T18:00:00.000Z","shortDate":"2022-09-20","month":"Sept","day":20,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-20T18:00:00.000Z","dateLong":"Tuesday, 20 September 2022, 7pm","mediumDate":"20 Sept 2022","shortDate":"2022-09-20","time":"7pm","weekday":"Tuesday","day":20,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-09-27T18:00:00.000Z","shortDate":"2022-09-27","month":"Sept","day":27,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-09-27T18:00:00.000Z","dateLong":"Tuesday, 27 September 2022, 7pm","mediumDate":"27 Sept 2022","shortDate":"2022-09-27","time":"7pm","weekday":"Tuesday","day":27,"month":"Sept","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-10-04T18:00:00.000Z","shortDate":"2022-10-04","month":"Oct","day":4,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-04T18:00:00.000Z","dateLong":"Tuesday, 4 October 2022, 7pm","mediumDate":"4 Oct 2022","shortDate":"2022-10-04","time":"7pm","weekday":"Tuesday","day":4,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-10-11T18:00:00.000Z","shortDate":"2022-10-11","month":"Oct","day":11,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-11T18:00:00.000Z","dateLong":"Tuesday, 11 October 2022, 7pm","mediumDate":"11 Oct 2022","shortDate":"2022-10-11","time":"7pm","weekday":"Tuesday","day":11,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-10-18T18:00:00.000Z","shortDate":"2022-10-18","month":"Oct","day":18,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-18T18:00:00.000Z","dateLong":"Tuesday, 18 October 2022, 7pm","mediumDate":"18 Oct 2022","shortDate":"2022-10-18","time":"7pm","weekday":"Tuesday","day":18,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-10-25T18:00:00.000Z","shortDate":"2022-10-25","month":"Oct","day":25,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-10-25T18:00:00.000Z","dateLong":"Tuesday, 25 October 2022, 7pm","mediumDate":"25 Oct 2022","shortDate":"2022-10-25","time":"7pm","weekday":"Tuesday","day":25,"month":"Oct","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-11-01T19:00:00.000Z","shortDate":"2022-11-01","month":"Nov","day":1,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-01T19:00:00.000Z","dateLong":"Tuesday, 1 November 2022, 7pm","mediumDate":"1 Nov 2022","shortDate":"2022-11-01","time":"7pm","weekday":"Tuesday","day":1,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-11-08T19:00:00.000Z","shortDate":"2022-11-08","month":"Nov","day":8,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-08T19:00:00.000Z","dateLong":"Tuesday, 8 November 2022, 7pm","mediumDate":"8 Nov 2022","shortDate":"2022-11-08","time":"7pm","weekday":"Tuesday","day":8,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-11-15T19:00:00.000Z","shortDate":"2022-11-15","month":"Nov","day":15,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-15T19:00:00.000Z","dateLong":"Tuesday, 15 November 2022, 7pm","mediumDate":"15 Nov 2022","shortDate":"2022-11-15","time":"7pm","weekday":"Tuesday","day":15,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-11-22T19:00:00.000Z","shortDate":"2022-11-22","month":"Nov","day":22,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-22T19:00:00.000Z","dateLong":"Tuesday, 22 November 2022, 7pm","mediumDate":"22 Nov 2022","shortDate":"2022-11-22","time":"7pm","weekday":"Tuesday","day":22,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-11-29T19:00:00.000Z","shortDate":"2022-11-29","month":"Nov","day":29,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-11-29T19:00:00.000Z","dateLong":"Tuesday, 29 November 2022, 7pm","mediumDate":"29 Nov 2022","shortDate":"2022-11-29","time":"7pm","weekday":"Tuesday","day":29,"month":"Nov","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]},{"date":"2022-12-06T19:00:00.000Z","shortDate":"2022-12-06","month":"Dec","day":6,"weekday":"Tuesday","class":"anime","events":[{"date":"2022-12-06T19:00:00.000Z","dateLong":"Tuesday, 6 December 2022, 7pm","mediumDate":"6 Dec 2022","shortDate":"2022-12-06","time":"7pm","weekday":"Tuesday","day":6,"month":"Dec","name":"Anime Society Meeting","class":"anime","price":"&pound;4","venue":"The White Hart","address":"London Road, Basingstoke RG21 4AE"}]}];

var options = {"online":false,"hiatus":false,"hiatusMessage":"","comingSoonRows":3,"newsCutoff":0};

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
  if (isHome) {
    setupHome();
  }

  if (isRecommendations) {
    setupRecommendations();
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

function setupHome() {
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
}

function setupRecommendations() {
  // select genre
  for (let genreLink of document.getElementById('search-genres').getElementsByClassName('genre')) {
    (function (genreLink) {
      function selectGenre(event) {
        for (let otherGenreLink of document.getElementById('search-genres').getElementsByClassName('genre')) {
          let otherGenre = otherGenreLink.dataset.genre;
          document.body.classList.remove('genre-filter-'+otherGenre);
          otherGenreLink.classList.remove('genre-selected');
        }
        let genre = genreLink.dataset.genre;
        document.body.classList.add('genre-filter');
        document.body.classList.add('genre-filter-'+genre);
        genreLink.classList.add('genre-selected');
      }
      genreLink.onclick = selectGenre
      genreLink.ontouchend = selectGenre
    })(genreLink);
  }

  // clear genre
  function clearGenre (event) {
    document.body.classList.remove('genre-filter');
    for (let genreLink of document.getElementById('search-genres').getElementsByClassName('genre')) {
      let genre = genreLink.dataset.genre;
      document.body.classList.remove('genre-filter-'+genre);
      genreLink.classList.remove('genre-selected');
    }
  }

  let clearLink = document.getElementById('clear-genre');
  clearLink.onclick = clearGenre
  clearLink.ontouchend = clearGenre
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