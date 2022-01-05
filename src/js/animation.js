import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


// arrow
let topArrow = document.querySelector(".arrow-top");
topArrow.addEventListener("click", function(){
  gsap.to(window, {duration: 1, scrollTo: 0});
});
//
let h = document.querySelector(".hero").offsetHeight;
let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", function(){
  console.log("ciao")
  gsap.to(window, {duration: 0.7, scrollTo: h});
});


let body = document.querySelector("body")
if(body.classList.contains("scroll-to-section")){
  gsap.to(window, {duration: 0, scrollTo: h});
}

// accordion
let toggle = document.querySelectorAll(".accordion");

function accordions(){
  if(window.innerWidth < 1100){
    let panels = document.querySelectorAll(".panel-mobile");
    toggle.forEach((item, i) => {
      item.addEventListener("click", function(){
        let panNum = item.getAttribute('card');
        let panel = document.querySelector(`[panel=${panNum}-mobile]`)
        panels.forEach((pan, i) => {
          if(panel != pan){
            let parent = pan.parentNode;
            if (pan.style.maxHeight) {
              pan.style.maxHeight = null;
              pan.style.marginBottom = null;
              let att = pan.getAttribute("panel")
              let attStrip = att.substr(0, 7);
              let card = document.querySelector(`[card=${attStrip}]`)
              card.classList.remove("active");
              parent.classList.remove("active");
            }
          }
        });

        this.classList.toggle("active");
        this.parentNode.classList.toggle("active");
        let title = this.querySelector("h2")

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.marginBottom = null;
        } else {
            panel.style.maxHeight = 800 + "px";
            panel.style.marginBottom = 24 + "px";
            gsap.to(window, {duration: 0.2, scrollTo:title, delay: 0.15});
        }
      })
    });
  }else{
    let panels = document.querySelectorAll(".panel");
    toggle.forEach((item, i) => {
      item.addEventListener("click", function(){
        let panNum = item.getAttribute('card');
        let panel = document.querySelector(`[panel=${panNum}]`)

        panels.forEach((pan, i) => {
          if(panel != pan){
            let parent = pan.parentNode;
            if (pan.style.maxHeight) {
              pan.style.maxHeight = null;
              pan.style.marginBottom = null;
              let att = pan.getAttribute("panel")
              let card = document.querySelector(`[card=${att}]`)
              card.classList.remove("active");
              parent.classList.remove("active");
            }
          }
        });

        this.classList.toggle("active");
        this.parentNode.classList.toggle("active");
        let title = this.querySelector("h2")
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.marginBottom = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.marginBottom = 24 + "px";
            gsap.to(window, {duration: 0.2, scrollTo:title, delay: 0.15});
        }
      })
    });

  }

}
window.onload = function() {
  accordions()
};


// window.addEventListener('resize', function(event) {
//   console.log(event)
//   accordions();
// }, true);



// fade blocchi
ScrollTrigger.batch(".card", {
  onEnter: elements => {
    gsap.to(elements, {
      opacity: 1,
      stagger: 0.15,
      duration: 0.2
    });
  },
  once: true
});


  // fade in
  const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 2, autoAlpha: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });

  // fade up
  const fadeUp = gsap.utils.toArray("[fade-up]");
  fadeUp.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0, y:0}, {duration: 1.5, autoAlpha: 1, y: -18});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });


  // hr line animation
  const hr = gsap.utils.toArray(".hr");
  hr.forEach((el, i) => {
    gsap.set(el, {transformOrigin:"left"})
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1.4, scaleX: 1, delay: .3, ease: "circ.out"});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });
