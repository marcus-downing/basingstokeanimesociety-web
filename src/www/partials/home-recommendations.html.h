<div class='rl'>
  <figure class='box' id='recommendation'>
    <figcaption>
      <p class='series-ident'>You might enjoy...</p>

      <h3 id='recommendation__name'></h3>
      <p id='recommendation__genre'></p>
    </figcaption>

    <img class='series-picture' id='recommendation__picture'>
  </figure>

  <div class='box'>
    <p>Check out one of our favourites.</p>

    <a class='btn btn-recommendations' href='recommendations.html'><span>Recommendations</span></a>

    <p class='top10-genres top10-genres-big'>
      <a class='genre genre-first' data-genre='first'>New to anime</a>
      <a class='genre genre-number1' data-genre='number1'>Our #1s</a>
    </p>

    <p class='top10-genres'>
      {{#each top10genres}}
      <a href='recommendations.html#genre={{slug this}}' class='genre genre-{{slug this}}'>{{ this }}</a>
      {{/each}}
    </p>
  </div>
</div>