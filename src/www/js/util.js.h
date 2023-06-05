function slugify(str) {
  str = str.toLowerCase();
  str = str.replace("'", "");
  str = str.replace(/ \(.*\)/, '');
  str = str.split(/[ _/-]+/).join('-');
  return str;
}

function setupTabs() {
  for (let tab of document.getElementsByClassName('tab')) {
    let code = tab.dataset.tab;
    ((code) => {
      tab.addEventListener('click', (evt) => {
        for (let tab of document.getElementsByClassName('tab')) {
          if (tab.dataset.tab == code) {
            tab.classList.add('tab--show');
          } else {
            tab.classList.remove('tab--show');
          }
        }

        for (let pane of document.getElementsByClassName('tab-pane')) {
          if (pane.dataset.tab == code) {
            pane.classList.add('tab-pane--show');
          } else {
            pane.classList.remove('tab-pane--show');
          }
        }
      });
    })(code);
  }
}