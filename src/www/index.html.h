<!DOCTYPE html>
<html>
<head>
<title>Basingstoke Anime Society</title>
<link rel="stylesheet" media="all" href="style.css" />
<script src="script.js"></script>
</head>
<body class="day-1">


<div id='section-logo'>
<img src='images/logo.png' id='logo'>
</div>

<nav id='section-social'>
<a id='btn-mail' href='mailto:...'><i></i></a>
<a id='btn-twitter' href='...'><i></i></a>
<a id='btn-fb' href='...'><i></i></a>
</nav>

<main>

<section id='section-next-meeting'>
    <h2>Next Meeting</h2>

    <h1>Tuesday 4st December 2018</h1>
    <h3>The White Hart</h3>

    <button id='where-when'>Where and When?</button>
</section>

<section id='section-now-showing'>
    <h2>Now Showing</h2>

    <div id='now-showing'>
        <figure>
            <figcaption>{{ series1.name }}</figcaption>
            <img src='{{ series1.picture }}'>
        </figure>

        <figure>
            <figcaption>{{ series2.name }}</figcaption>
            <img src='{{ series2.picture }}'>
        </figure>

        <figure>
            <figcaption>{{ series3.name }}</figcaption>
            <img src='{{ series3.picture }}'>
        </figure>
    </div>
</section>

<section id='section-upcoming'>
    <h2>Upcoming Events</h2>

    {{#each events}}
    <article id='upcoming-{{ event.date }}' class='event {{ event.class }}'>
        <time datetime="{{ date }}"><span class='day'>{{ date_day }}</span><span class='month'>{{ date_month }}</span></time>
        <p>Foo</p>
    </article>
    {{/each}}

</section>

<section id='news-feed'>
    <h2>News Feed</h2>

    <article class='tweet'>
        <time datetime="2017-02-14">Valentines day</time>
        <p>Foo</p>
    </article>
</section>

</main>

</body>
