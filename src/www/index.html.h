<!DOCTYPE html>
<html>
<head>
  <title>Basingstoke Anime Society</title>
  <link rel="stylesheet" media="all" href="style.css" />
  <script src="script.js"></script>
</head>
<body class="day">

<div id='section-logo'>
<img src='images/logo.png' id='logo'>
</div>

<nav id='section-social'>
<a id='btn-mail' href='mailto:marcus@basingstokeanimesociety.com'><i></i><span>Mail</span></a>
<a id='btn-twitter' href='https://twitter.com/BasingAnime'target="_blank"><i></i><span>Twitter</span></a>
<a id='btn-fb' href='https://www.facebook.com/groups/basingstokeanimesociety/'target="_blank"><i></i><span>Facebook</span></a>
</nav>

<main>

<h1 id='main-title'>Basingstoke Anime Society</h1>

<section id='section-next-meeting' class='box'>
  <h2>Next Meeting</h2>

  <h1 id='next-meeting-date'>{{ nextMeeting }}</h1>
  <h3><em id='next-meeting-venue'>{{ nextMeetingVenue }}</em> <span id='next-meeting-address'>{{ nextMeetingAddress }}</span></h3>

  <button id='where-when' onclick="showMap()"><span>Where and When?</span></button>
</section>

<section id='section-now-showing'>
  <h2>Now Showing</h2>

  <div id='now-showing'>
    <figure id='slot1'>
      <figcaption id='slot1name'>{{ series1.name }}</figcaption>
      <img id='slot1picture' src='images/series/{{ series1.picture }}.png'>
    </figure>

    <figure id='slot2'>
      <figcaption id='slot2name'>{{ series2.name }}</figcaption>
      <img id='slot2picture' src='images/series/{{ series2.picture }}.png'>
    </figure>

    <figure id='slot3'>
      <figcaption id='slot3name'>{{ series3.name }}</figcaption>
      <img id='slot3picture' src='images/series/{{ series3.picture }}.png'>
    </figure>
  </div>
</section>

<div class='lr'>
<section id='section-upcoming'>
  <h2>Upcoming Events</h2>

  <div id='events-list'>
  {{#each events}}
  <article id='upcoming-{{ date }}' class='event event-{{ class }}'>
    <time datetime="{{ date }}"><span class='day'>{{ day }}</span><span class='month'>{{ month }}</span></time>
    <h3>{{ name }}</h3>
    <p>{{ venue }}</h3>
  </article>
  {{/each}}
  </div>

</section>

<section id='news-feed'>
  <h2>News Feed</h2>

  <a class="twitter-timeline" data-lang="en"
    data-width="670" data-height="700"
    href="https://twitter.com/BasingAnime?ref_src=twsrc%5Etfw"
    data-chrome="noheader nofooter"
    data-tweet-limit="{{ maxTweets }}"
    ></a>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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

</body>
