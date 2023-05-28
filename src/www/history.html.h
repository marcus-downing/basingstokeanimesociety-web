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

  <title>History - Basingstoke Anime Society</title>
  <link rel="stylesheet" media="all" href="style.css?ver={{stylesheetVersion}}" />

  <meta name="description" content="Showing anime in Basingstoke every Tuesday" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

<script>
  var isHome = false;
  var isRecommendations = false;
  var isHistory = true;
</script>
</head>
<body class="day recommendations-page">

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

<a id='home-link' href='/'><img src='images/back.png'> Home</a>


<div class='lr'>
	<div>
		<header class="box top10pick">
			<h2>History</h2>
			<p>We've shown some great shows over the years.</p>
		</header>

		<div class="box historyPick">
			<p>
				<a class='pick' data-show='recent'>Recent weeks</a>
			</p>

			<hr>

			<p>2023</p>
			<p>2022</p>
			<p>2021</p>
			<p>2020</p>
		</div>
	</div>

	<div id="history-results">
		{{#times 5}}
		<div class="history-week" id='history-week-{{this}}'>
			<div>
				<h2 class='week-date'>{{this}}</h2>
			</div>
		    <figure class='series series--right series1'>
		      <figcaption class='series-name'>
		      	<h3>Series 1</h3>
		      	<p class='info-line'></p>
		      </figcaption>
		      <img class='series-picture' src=''>
		      <div class='rating'></div>
		    </figure>
		    <figure class='series series--right series2'>
		      <figcaption class='series-name'>
		      	<h3>Series 2</h3>
		      	<p class='info-line'></p>
		      </figcaption>
		      <img class='series-picture' src=''>
		      <div class='rating'></div>
		    </figure>
		    <figure class='series series--right series3'>
		      <figcaption class='series-name'>
		      	<h3>Series 3</h3>
		      	<p class='info-line'></p>
		      </figcaption>
		      <img class='series-picture' src=''>
		      <div class='rating'></div>
		    </figure>
		</div>
		{{/times}}
	</div>
</div>

</main>

<div id='blanket'></div>

<script src="script.js?ver={{ scriptVersion }}"></script>
</body>
