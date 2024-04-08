<!DOCTYPE html>
<html>
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5ZYQSZM09J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5ZYQSZM09J');
</script>

  <title>Basingstoke Anime Society</title>
  <link rel="stylesheet" media="all" href="style.css?ver={{stylesheetVersion}}" />

  <meta name="description" content="Showing anime in Basingstoke every Tuesday" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {{#if noindex}}<meta name="robots" content="noindex">{{/if}}

<script>
  var isHome = true;
  var isRecommendations = false;
  var isHistory = false;
</script>

</head>
<body class="day home-page">

<div id='section-logo'>
<img src='images/logo.png' id='logo'>
</div>

<nav id='section-social'>
<a class='btn btn-mail' href='mailto:marcus@basingstokeanimesociety.com'><i></i><span>Mail</span></a>
<a class='btn btn-twitter-broken' href='https://twitter.com/BasingAnime' target="_blank"><i></i><span>Twitter</span></a>
<a class='btn btn-fb' href='https://www.facebook.com/groups/basingstokeanimesociety/' target="_blank"><i></i><span>Facebook</span></a>
<a class='btn btn-discord' href='https://discord.gg/sypjyaA' target="_blank"><i></i><span>Discord</span></a>
</nav>

<main>

<h1 id='main-title'>Basingstoke Anime Society</h1>

<header id="header">
<div>
  <!-- <section class='box'>
    <h3 class='big'>Showing anime in Basingstoke every Tuesday.</h3>
  </section> -->

  <section id='section-next-meeting' class='box'>
    <h2>Next Weekly Meeting</h2>

    <article id="next-meeting-date" class="focus-date event-anime">
      <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
      <div class="next-meeting-side focus-date-side">Tuesday<br>7pm</div>
    </article>

    <div style='position: relative'>

    <div id='about'>
      <button class='btn btn-where-when' onclick="showMap()"><i></i><span>Show Map</span></button>

      <div class='content'>
        <p>Function room, upstairs at <a href='https://www.thewhitehartbasingstoke.com/'>The White Hart</a>, Basingstoke RG21 4AE</p>
        <p class='p--icon'><span class='icon entry-fee'>£4</span>Club fee</p>
        <p class='p--icon'><img class="rating-img rating-18 icon" src="images/rating/18.svg">Age requirement</p>
      </div>
    </div>
  </section>
</div>

<div>
  <!-- <section class='box'>
    <h3 class='big'>Showing anime in Basingstoke every Tuesday.</h3>
  </section> -->

  <section id='section-next-social' class='box'>
    <h2>Next Social Event</h2>

    <article id="next-social-date" class="focus-date event-social">
      <time datetime="{{ nextSocial.date }}"><span class='day'></span><span class='month'></span></time>
      <div class="next-social-side focus-date-side"><br></div>
    </article>

    <h3>Venue: <span id="next-social-venue">{{ nextSocialVenue }}</span></h3>
  </section>

  <section class="box box--button" id="section-discord">
    <h2>Community</h2>
    <p>Find us on Discord</p>
    <a class='btn btn-discord' href='https://discord.gg/sypjyaA' target="_blank"><i></i><span>Discord</span></a>
  </section>
</div>
</header>

<section id='section-now-showing' class='{{#if options.hiatus}}section-now-showing-hiatus{{/if}}'>
  <h2 class='underline'>Now Showing</h2>

  <div id='now-showing'>
    <figure id='slot1'>
      <figcaption id='slot1name'></figcaption>
      <img class='series-picture' id='slot1picture' src=''>
      <div class='rating' id='slot1rating'></div>
    </figure>

    <figure id='slot2'>
      <figcaption id='slot2name'></figcaption>
      <img class='series-picture' id='slot2picture' src=''>
      <div class='rating' id='slot2rating'></div>
    </figure>

    <figure id='slot3'>
      <figcaption id='slot3name'></figcaption>
      <img class='series-picture' id='slot3picture' src=''>
      <div class='rating' id='slot3rating'></div>
    </figure>
  </div>
</section>

<nav class='tabs'>
<a class='tab tab--show' data-tab='coming-soon'>Coming Soon</a>
<a class='tab' data-tab='news'>News</a>
<a class='tab' data-tab='recommendations'>Recommendations</a>
<a class='tab' data-tab='history'>History</a>
</nav>

<div class='tab-panes'>
<section class='tab-pane tab-pane--show' data-tab='coming-soon'>
{{> home_coming_soon }}
</section>

<section class='tab-pane' data-tab='news'>
{{> home_news }}
</section>

<section class='tab-pane' data-tab='recommendations'>
{{> home_recommendations }}
</section>

<section class='tab-pane' data-tab='history'>
{{> home_history }}
</section>
</div> 

</main>

<div id='blanket'></div>

<aside id='map-overlay'>
  <div id='map-inner'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.3289793540373!2d-1.0825255249343884!3d51.26220677831826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda797dee606b2fa8!2sThe%20White%20Hart!5e0!3m2!1sen!2suk!4v1580681206861!5m2!1sen!2suk"
      frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    <a id='map-close' onclick="hideMap()">&times;</a>
  </div>
</aside>

<script src="script.js?ver={{ scriptVersion }}"></script>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</body>
