
function setupRecommendations() {
  // clear genre and list selection
  function clearPick (event) {
    document.body.classList.remove('genre-filter');
    document.body.classList.remove('list-filter');
    for (let genreLink of document.getElementsByClassName('genre')) {
      let genre = genreLink.dataset.genre;
      document.body.classList.remove('genre-filter-'+genre);
      genreLink.classList.remove('genre-selected');
    }

    for (let listLink of document.getElementsByClassName('pick-list')) {
      let list = listLink.dataset.list;
      document.body.classList.remove('list-filter-'+list);
      listLink.classList.remove('pick-show');
      document.getElementById('pick-pane-'+list).classList.remove('pick-pane-show');
    }
  }

  function scrollToResults() {
    document.getElementById('top10results').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function pickGenre(genre) {
    clearPick();

    document.body.classList.add('genre-filter');
    document.body.classList.add('genre-filter-'+genre);
    for (let link of document.getElementsByClassName('genre-'+genre)) {
      link.classList.add('genre-selected');
    }
    scrollToResults();
  }

  function pickList(list) {
    clearPick();

    document.body.classList.add('list-filter')
    document.body.classList.add('list-filter-'+list);
    document.getElementById('pick-list-'+list).classList.add('pick-show');
    document.getElementById('pick-pane-'+list).classList.add('pick-pane-show');
    scrollToResults();
  }

  // select genre
  for (let genreLink of document.getElementsByClassName('genre')) {
    (function (genreLink) {
      let genre = genreLink.dataset.genre;
      function selectGenre(event) {
        pickGenre(genre);
      }
      genreLink.addEventListener('click', selectGenre);
      // genreLink.addEventListener('touchend', selectGenre);
    })(genreLink);
  }

  // select list
  for (let listLink of document.getElementsByClassName('pick-list')) {
    (function (listLink) {
      let list = listLink.dataset.list;
      function selectList(event) {
        pickList(list);
      }
      listLink.addEventListener('click', selectList);
      // listLink.addEventListener('touchend', selectList);
    })(listLink);
  }

  let clearLink = document.getElementById('clear-filter');
  if (clearLink !== null) {
    clearLink.addEventListener('click', clearPick);
    // clearLink.addEventListener('touchend', clearPick);
  }

  // initial selection
  setTimeout(function () {
    if (window.location.hash !== null && window.location.hash.length > 1) {
      let hash = window.location.hash.substring(1);
      let vars = parseQuery(hash);

      if (vars.hasOwnProperty('genre')) {
        pickGenre(vars.genre);
      }
    }
  });
}
