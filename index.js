Vue.component('portfolio-item', {
  props: ['item'],
  template: '<article><h1>{{ item.title }}</h1></article>'
});

var vm = new Vue({
  el: '#app',
  data: {
    portfolioItems: [
      {
        id: 1,
        title: 'PostNL app'
      },
      {
        id: 2,
        title: 'MuseumExplorer app'
      },
      {
        id: 3,
        title: 'Rijksmuseum.nl'
      }
    ]
  }
});
