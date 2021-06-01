let nord_center;
let sud_center;
let zoom_nord;
let zoom_sud;


function initializeMap(){
  if(window.innerWidth < 1000){
    nord_center = [10.869, 44.151];
    sud_center = [13.526, 41.528];
    zoom_nord = 5.43;
    zoom_sud = 4.72;
  }else{
    nord_center = [11.588741,  44.844273];
    sud_center = [13.474435, 41.239332];
    zoom_nord = 6.31;
    zoom_sud = 6.31;
  }

  let chapters = {
    'nord': {
      duration: 2000,
      center: nord_center,
      bearing: 0,
      zoom: zoom_nord,
      essential: true
    },
    'sud': {
        duration: 2000,
        center: sud_center,
        bearing: 0,
        zoom: zoom_sud,
        essential: true
    }
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWdvcmluaSIsImEiOiJja28yd2tzdjQxM3NqMnFwZ3BremZ2Y3hrIn0.TOK_D8r2LULbVb-3ULVf8Q';

  if (!mapboxgl.supported()) {
      alert('Il tuo browser non supporta Mapbox GL');
  } else { var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/lucagorini/cko2wqq4z0gb317mwldtkpv91',
      center: nord_center,
      zoom: zoom_nord
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

};


function resizedw(){
  if(window.innerWidth < 1100){
  initializeMap();
  }else{
    initializeMap();
  }
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 100);
};

initializeMap();
