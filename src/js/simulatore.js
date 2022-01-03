let immagine = document.querySelector(".img-candidato")
let scenario = document.querySelector(".scenario")
let titolo = document.querySelector(".title-presidente")
let txt = document.querySelector(".text-result")

window.addEventListener('electionWidgetResult', function (e) {
   console.log(e.detail)
   let img = e.detail.titolo
   // img = img.replace(" ", "_");
   // console.log(img);
   immagine.src = `../presidenti/${img}.png`
   scenario.innerHTML = e.detail.occhiello
   titolo.innerHTML = e.detail.titolo
   txt.innerHTML = e.detail.risultato
 });
