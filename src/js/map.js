
let chapters = {
  'nord': {
    duration: 2000,
    center: [11.588741,  44.844273],
    bearing: 0,
    zoom: 6.31,
    essential: true
  },
  'sud': {
      duration: 2000,
      center: [13.474435, 41.239332],
      bearing: 0,
      zoom: 6.31,
      essential: true
  }
}



mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWdvcmluaSIsImEiOiJja28yd2tzdjQxM3NqMnFwZ3BremZ2Y3hrIn0.TOK_D8r2LULbVb-3ULVf8Q';

if (!mapboxgl.supported()) {
    alert('Il tuo browser non supporta Mapbox GL');
} else { var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lucagorini/cko2wqq4z0gb317mwldtkpv91',
    center: [11.588741,  44.844273],
    zoom: 6.31
});
}


let nord = document.querySelector("#nord");
let sub = document.querySelector("#sub");

nord.addEventListener("click", function(){
  map.flyTo(chapters["nord"]);
  sud.classList.remove("active");
  nord.classList.toggle("active");
})
sud.addEventListener("click", function(){
  map.flyTo(chapters["sud"]);
  nord.classList.remove("active");
  sud.classList.toggle("active");
})


function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
  };
