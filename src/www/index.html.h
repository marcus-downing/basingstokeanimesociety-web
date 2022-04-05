<!DOCTYPE html>
<html>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157883376-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-157883376-1');
  </script>

  <title>Basingstoke Anime Society</title>
  <link rel="stylesheet" media="all" href="style.css?ver={{stylesheetVersion}}" />

  <meta name="description" content="Showing anime in Basingstoke every Tuesday" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Twitter universal website tag code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o898i');
twq('track','PageView');
</script>
<!-- End Twitter universal website tag code -->

</head>
<body class="day">

<div id='section-logo'>
<img src='images/logo.png' id='logo'>
</div>

<nav id='section-social'>
<a class='btn btn-mail' href='mailto:marcus@basingstokeanimesociety.com'><i></i><span>Mail</span></a>
<a class='btn btn-twitter' href='https://twitter.com/BasingAnime' target="_blank"><i></i><span>Twitter</span></a>
<a class='btn btn-fb' href='https://www.facebook.com/groups/basingstokeanimesociety/' target="_blank"><i></i><span>Facebook</span></a>
<a class='btn btn-discord' href='https://discord.gg/sypjyaA' target="_blank"><i></i><span>Discord</span></a>
</nav>

<main>

<h1 id='main-title'>Basingstoke Anime Society</h1>

<header id="header">

<div>
<section id='section-next-meeting' class='box'>
  <h2>Next Meeting</h2>

  <div id="next-meeting-date">
    <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
    <div class="next-meeting-side">Tuesday<br>7pm</div>
  </div>

  <h3>Venue: <span id="next-meeting-venue">{{ nextMeetingVenue }}</span></h3>
</section>

<section id='section-discord' class='box'>
  <h3>Social</h3>
  <p>Chat with us on Discord</p>
  <a class='float-right btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join our Discord</span></a>
</section>
</div>

<section id='section-about' class='box'>
  <button class='btn btn-where-when' onclick="showMap()"><i></i><span>Show Map</span></button>

  <h3 class='big'>Showing anime in Basingstoke every Tuesday.</h3>

  <div class='content'>
    <p><img class='icon' src='images/pin.svg'>Function room, upstairs at <a href='https://www.thewhitehartbasingstoke.com/'>The White Hart</a>, Basingstoke RG21 4AE</p>
    <p><span class='icon entry-fee'>£4</span>Club fee</p>
    <p><img class='icon' src='images/biohazard-white.svg'>Vaccination required</p>
    <p><img class="rating-img rating-15 icon" src="images/rating/15.svg">Age requirement</p>
    <!-- <p class='center'><a class='btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join our Discord</span></a></p> -->
  </div>

</section>
</header>

<!-- <section id='section-discord' class='box'>
  <h3>Social</h3>
  <p>Chat with us on Discord</p>
  <a class='float-right btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join our Discord</span></a>
</section> -->

<section id='section-now-showing' class='{{#if options.hiatus}}section-now-showing-hiatus{{/if}}'>
  <h2>Now Showing</h2>

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

  <h2>Coming Soon</h2>

  <div id='coming-soon'>
  </div>

  {{#if options.hiatus}}
  <div class='hiatus-overlay'>
  <p>{{ options.hiatusMessage }}</p>
  </div>
  {{/if}}
</section>

<div class='lr'>
<section id='section-upcoming'>
  <h2>Upcoming Events</h2>

  <div id='events-list' class='box'>
  {{#each eventsByDate}}
  <article id='upcoming-{{ shortDate }}' class='event event-{{ class }}'>
    <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
    {{#each events}}
    <div class='event-detail event-detail-{{ class }}'>
      {{#if picture}}<img src="images/series/{{picture}}.png">{{/if}}
      {{#if prename}}<p class="series-ident">{{ prename }}</p>{{/if}}
      <h3>{{ name }}</h3>
      {{#if time}}<p>{{#if link}}<a href='{{ link }}'>{{#if time}}, {{/if}}{{/if}}{{ venue }}{{#if time}}{{ time }}{{/if}}{{#if link}}</a>{{/if}}</h3>{{/if}}
    </div>
    {{/each}}
  </article>
  {{/each}}
  </div>

</section>

<section id='news-feed'>
  <h2>News Feed</h2>

  {{#each freshNews}}
  <article class='news box'>
  <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
  <h3>{{title}}</h3>
  {{#each body}}
  <p>{{this}}</p>
  {{/each}}
  {{#if discordLink}}
  <p><a class='btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join the Discord</span></a></p>
  {{/if}}
  </article>
  {{/each}}

  <!-- <div id='news-more-switch'>
    <button class='btn btn-news-more' onclick="showNews()"><span>Show More News</span></button>
  </div> -->

  <div id='news-more'>
    {{#each staleNews}}
    <article class='news box'>
    <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
    <h3>{{title}}</h3>
    {{#each body}}
    <p>{{this}}</p>
    {{/each}}
    {{#if discordLink}}
    <p><a class='btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join the Discord</span></a></p>
    {{/if}}
    </article>
    {{/each}}
  </div>

  <div id='twitter-box'>
  <a class="twitter-timeline" data-lang="en"
    data-width="670" data-height="700"
    href="https://twitter.com/BasingAnime?ref_src=twsrc%5Etfw"
    data-chrome="noheader nofooter transparent"

    data-tweet-limit="{{ maxTweets }}"
    ></a>
  </div>
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

<script src="script.js"></script>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</body>
