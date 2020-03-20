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
  <link rel="stylesheet" media="all" href="style.css" />
  <script src="script.js"></script>
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

{{#if announce.visible}}
<section id='section-announce' class='box'>
  <h2>{{announce.title}}</h2>

  <p>{{announce.content}}</p>

  {{#if announce.discord}}
  <p><a class='btn btn-discord' href='https://discord.gg/sypjyaA'><i></i><span>Join the Discord</span></a></p>
  {{/if}}
</section>
{{/if}}

<section id='section-next-meeting' class='box'>
  <h2>Next Meeting</h2>

  <h1 id='next-meeting-date'>&nbsp;</h1>
  <h3 id='next-meeting-title'></h3>
  <h3><em id='next-meeting-venue'>&nbsp;</em> <span id='next-meeting-address'>&nbsp;</span></h3>

  <button class='btn btn-where-when' onclick="showMap()"><i></i><span>Where and When?</span></button>
</section>

<section id='section-now-showing' class='{{#if options.hiatus}}section-now-showing-hiatus{{/if}}'>
  <h2>Now Showing</h2>

  <div id='now-showing'>
    <figure id='slot1'>
      <figcaption id='slot1name'>{{series1.name}}</figcaption>
      <img id='slot1picture' src='images/series/{{series1.picture}}.png'>
      <!-- <a class='play'>Play Trailer</a> -->
    </figure>

    <figure id='slot2'>
      <figcaption id='slot2name'>{{series2.name}}</figcaption>
      <img id='slot2picture' src='images/series/{{series2.picture}}.png'>
      <!-- <a class='play'>Play Trailer</a> -->
    </figure>

    <figure id='slot3'>
      <figcaption id='slot3name'>{{series3.name}}</figcaption>
      <img id='slot3picture' src='images/series/{{series3.picture}}.png'>
      <!-- <a class='play'>Play Trailer</a> -->
    </figure>
  </div>

  {{#if options.hiatus}}
  <div class='hiatus-overlay'>
  <p>The schedule is on hiatus</p>
  </div>
  {{/if}}
</section>

<div class='lr'>
<section id='section-upcoming'>
  <h2>Upcoming Events</h2>

  <div id='events-list'>
  {{#each events}}
  <article id='upcoming-{{ date }}' class='event event-{{ class }}'>
    <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
    <h3>{{ name }}</h3>
    <p>{{#if link}}<a href='{{ link }}'>{{/if}}{{ venue }}{{#if time}}, {{ time }}{{/if}}{{#if link}}</a>{{/if}}</h3>
  </article>
  {{/each}}
  </div>

</section>

<section id='news-feed'>
  <h2>News Feed</h2>

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

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</body>
