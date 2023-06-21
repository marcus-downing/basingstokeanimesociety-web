<div class='rl'>
  <div>
    <div class='series-grid series-grid--large-first' id='home-recommendations'>

    </div>
  </div>

  <div>
    <div class='box'>
      <p>Check out one of our favourites.</p>

      <a class='btn btn-recommendations' href='recommendations.html'><span>Recommendations</span></a>

      <p class='top10-genres top10-genres-big'>
        <a class='genre genre-first' href='recommendations.html#genre=first'>New to anime</a>
        <a class='genre genre-number1' href='recommendations.html#genre=number1'>Our #1s</a>
      </p>

      <p class='top10-genres'>
        {{#each top10genres}}
        <a href='recommendations.html#genre={{slug this}}' class='genre genre-{{slug this}}'>{{ this }}</a>
        {{/each}}
      </p>
    </div>
  </div>
</div>
