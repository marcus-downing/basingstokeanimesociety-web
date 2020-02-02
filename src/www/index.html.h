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
<a id='btn-twitter' href='https://twitter.com/Basing_animesoc'><i></i><span>Twitter</span></a>
<a id='btn-fb' href='https://www.facebook.com/groups/basingstokeanimesociety/'><i></i><span>Facebook</span></a>
</nav>

<main>

<h1 id='main-title'>Basingstoke Anime Society</h1>

<section id='section-next-meeting' class='box'>
  <h2>Next Meeting</h2>

  <h1 id='next-meeting-date'>{{ nextMeeting }}</h1>
  <h3><em id='next-meeting-venue'>{{ nextMeetingVenue }}</em> <span id='next-meeting-address'>{{ nextMeetingAddress }}</span></h3>

  <button id='where-when'><i></i><span>Where and When?</span></button>
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
    href="https://twitter.com/Basing_animesoc?ref_src=twsrc%5Etfw"
    data-chrome="noheader nofooter"
    data-tweet-limit="{{ maxTweets }}"
    ></a>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</section>
</div>

</main>

</body>
