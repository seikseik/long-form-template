import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import lozad from 'lozad'

const observer = lozad();
observer.observe();

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


// check lingua

let body = document.querySelector("body");
let ita = document.querySelector("#ita");
let eng = document.querySelector("#eng");

if(body.classList.contains("ita")){
  ita.classList.add("active")
}else{
  eng.classList.add("active")
}

  // animation hero text
  const heroTitle = document.querySelector(".animation-text-hero");

  let tl = gsap.timeline(),
    mySplitText = new SplitText(heroTitle, {type:"words,chars", wordsClass: "split-line"
  }),
  chars = mySplitText.chars;
  gsap.set(heroTitle, {perspective: 400});
  tl.fromTo(chars, {autoAlpha: 0},
          {  duration: 1,
               autoAlpha: 1,
               ease: "circ.out",
               stagger: 0.03,
          },
          "+=0");

// anim text
  const animtxt = gsap.utils.toArray(".animation-text");
  animtxt.forEach((item, i) => {
    let tl = gsap.timeline(),
      mySplitText = new SplitText(item, {type:"words,chars", wordsClass: "split-line"
    }),
    chars = mySplitText.chars;
    gsap.set(item, {perspective: 400});
    tl.fromTo(chars, {autoAlpha: 0},
            {  duration: 1,
                 autoAlpha: 1,
                 ease: "circ.out",
                 stagger: 0.03,
            },
            "+=0");
  });


  // fade in
  const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 1, autoAlpha: 1});
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
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: .5, scaleX: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });


let slideshows = document.querySelectorAll(".slideshow");
slideshows.forEach((item, i) => {
  $(item).slick({
  infinite: true,
});
});


let slideshowsLazy = document.querySelectorAll(".slideshow-lazy");
slideshowsLazy.forEach((item, i) => {
  $(item).slick({
  lazyLoad: 'progressive',
});
});

// scroll

$('.scroll-container').slick({
  slidesToShow: 1,
  arrows: true,
  adaptiveHeight: false,
  variableWidth: true,
  infinite: false,
  edgeFriction: 0.9
});
