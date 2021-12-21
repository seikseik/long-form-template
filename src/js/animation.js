import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);



// HEADER SCROLL
let body = document.querySelector("body")
const nav = document.querySelector('nav');
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 50) {
      body.classList.remove(scrollUp);
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    }
     else if (currentScroll+25 < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });



let toggle = document.querySelectorAll(".toggle-card");
let panels = document.querySelectorAll(".panel");

toggle.forEach((item, i) => {
  item.addEventListener("click", function(){
    let panNum = item.getAttribute('card');
    let panel = document.querySelector(`[panel=${panNum}]`)

    panels.forEach((pan, i) => {
      if(panel != pan){
        if (pan.style.maxHeight) {
          pan.style.maxHeight = null;
          let att = pan.getAttribute("panel")
          let card = document.querySelector(`[card=${att}]`)
          console.log(card)
          card.parentNode.classList.remove("active");
        }
      }
    });

    this.parentNode.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
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

  // scroll top
  // let topArrow = document.querySelector(".arrow-top");
  // topArrow.addEventListener("click", function(){
  //   gsap.to(window, {duration: 2, scrollTo: 0});
  // });
  //
  // let h = document.querySelector(".hero").offsetHeight;
  // let arrow = document.querySelector(".arrow");
  // arrow.addEventListener("click", function(){
  //   gsap.to(window, {duration: 0.7, scrollTo: h});
  // });
