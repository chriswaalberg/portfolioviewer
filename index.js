Vue.component('portfolio-item', {
  props: ['item'],
  template: '\
    <article>\
      <span class="title-container">\
        <h2 class="show-on-load" :class="{ streamer : !item.streamer }">{{item.title}}</h2>\
        <h3 v-if="item.streamer" class="streamer show-on-load">{{item.streamer}}</h3>\
      </span>\
      <div v-for="image in item.images" class="image-container show-on-load" :class="image.type">\
        <img v-if="image.type != \'custom\'" :src="\'images/\' + image.type + \'.png\'" class="device">\
        <img :src="image.src" class="content">\
      </div>\
      <div class="background show-on-load" :style="\'background-image: url(\' + item.backgroundImage + \')\'"></div>\
    </article>\
  '
});

// portfolioItem:
//   title: case title
//   streamer: streamer text
//   images: array of objects; ordered large to small
//     src: source url
//     type: desktop, tablet, phone or custom
//   callToAction: array of objects
//     title: link text
//     url: link href

var vm = new Vue({
  el: '#app',
  data: {
    portfolioItems: [
      {
        title: 'Rijksmuseum.nl',
        streamer: 'Zelf aan de slag met 600.000 meesterwerken',
        backgroundImage: 'images/portfolio/rijksmuseumnl-desktop.jpg',
        images: [
          {
            src: 'images/portfolio/rijksmuseumnl-desktop.jpg',
            type: 'desktop'
          },
          {
            src: 'images/portfolio/rijksmuseumnl-tablet.jpg',
            type: 'tablet'
          },
          {
            src: 'images/portfolio/rijksmuseumnl-phone.jpg',
            type: 'phone'
          }
        ],
        callToAction: [
          {
            title: 'Ga naar Rijksmuseum.nl',
            url: 'http://rijksmuseum.nl'
          }, {
            title: 'Meer over Rijksmuseum.nl',
            url: '/portfolio/rijksmuseum.nl'
          }
        ]
      },
      {
        title: 'MuseumExplorer app',
        streamer: 'De museumgids in je broekzak',
        images: [
          {
            src: 'images/portfolio/museumexplorer-phone.png',
            type: 'phone'
          }
        ],
        callToAction: [{
          title: 'Meer over de MuseumExplorer app',
          url: '/blog/museumexplorer'
        }]
      },
      {
        title: 'Philips Hue cloud platform',
        images: [
          {
            src: 'images/portfolio/philipshue.png',
            type: 'custom'
          }
        ],
        callToAction: [{
          title: 'Meer over Philips Hue',
          url: '/portfolio/philipshue'
        }]
      }
    ]
  }
});
