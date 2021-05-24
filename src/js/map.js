import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


let chapters = {
  'par1': {
    duration: 3000,
    center: [12.918845, 42.315991],
    bearing: 0,
    zoom: 6.5,
    essential: true
  },
  'par2': {
      duration: 3000,
      center: [10.132167, 44.016848],
      bearing: 0,
      zoom: 6.5,
      essential: true
  },
  'par3': {
      duration: 3000,
      center: [13.149956, 41.832450],
      zoom: 6.5,
      essential: true
  },
  'par4': {
      duration: 3000,
      center: [15.236094, 38.951555],
      zoom: 6.5,
      essential: true
  }
}


// var e = activeChapterName + "h";
var activeChapterName ="par1";


function logRed(section) {
  setActiveChapter(section)
}

gsap.utils.toArray(".capitolo").forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 50vh",
    end: "bottom bottom-=100px",
    markers: {startColor: "white", endColor: "white"},
    scrub: true,
    onToggle: () => logRed(section.id)
  });
});



mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvc2FjY2hpIiwiYSI6ImNrazFrdG5hNzBzM2oycW1manJvbDl6ZGoifQ.FOB7LTrZU3E4nF270xUyxA';

if (!mapboxgl.supported()) {
    alert('Il tuo browser non supporta Mapbox GL');
} else { var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/matteosacchi/cko8kixfc22u218p35ozzk0nr',
    center: [13.408197, 42.461843],
    zoom: 5.57
});
}

map.on('load', function() {});

var side = document.getElementById("scroll_text");
side.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
      }
  }
};


function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;
    map.flyTo(chapters[chapterName]);
    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
      activeChapterName = chapterName;
  };
