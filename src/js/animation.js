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
               delay: 0.1,
               ease: "circ.out",
               stagger: 0.095,
          },
          "+=0");

// animation quotes

  const quotes = document.querySelectorAll(".animation-text");

    quotes.forEach((quote, i) => {
      quote.split = new SplitText(quote, {
        type:"words,chars",
        wordsClass: "split-line"
      });
      gsap.set(quote, {perspective: 400});
      const anim = gsap.fromTo(quote.split.chars,
      {autoAlpha: 0},{  duration: 1, autoAlpha: 1,ease: "circ.out",stagger: 0.045, delay: 0.2});

      ScrollTrigger.create({
        trigger: quote,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
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


  // fade right
  if(window.innerWidth > 768){
    const fadeRight = gsap.utils.toArray("[fade-right]");
    fadeRight.forEach((el, i) => {
      const anim = gsap.fromTo(el, {autoAlpha: 0, x:30,}, {duration: 1, autoAlpha: 1, x:0});
      ScrollTrigger.create({
        trigger: el,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });
  }


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


// swiper
let swipers = document.querySelectorAll(".swiper-container")
swipers.forEach((item, i) => {
  const swiper = new Swiper(item, {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    preloadImages: false,
    lazy: true,
    autoHeight: true,
  });
});

const swiper = new Swiper('.swiper-scroll-container', {
  speed: 200,
  spaceBetween: 20,
  slidesPerView: "auto",
  freeMode: true,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  },
});


// mosaico

function is_touch_enabled() {
           return ( 'ontouchstart' in window ) ||
                  ( navigator.maxTouchPoints > 0 ) ||
                  ( navigator.msMaxTouchPoints > 0 );
       }
       console.log("ciao")

let mosaico = document.querySelectorAll(".image-mosaico");
 if( is_touch_enabled() ){
       let close = document.querySelectorAll(".close");
       close.forEach((item, i) => {
         item.addEventListener("click", function(e){
           console.log(item.parentElement)
           item.parentElement.style.visibility = "hidden";
           item.parentElement.style.opacity = 0;
           e.stopPropagation();
       });
     })
   mosaico.forEach((item, i) => {
     item.addEventListener("click", function(e){
       let txt = item.querySelector(".text-mosaico");
       txt.style.opacity = 1;
       txt.style.visibility = "visible";
       e.stopPropagation();
     })
   });
 }else{
   mosaico.forEach((item, i) => {
     item.addEventListener("mouseover", function(){
       let txt = item.querySelector(".text-mosaico");
       txt.style.opacity = 1;
       txt.style.visibility = "visible";
     })
     item.addEventListener("mouseout", function(){
       let txt = item.querySelector(".text-mosaico");
       txt.style.opacity = 0;
       txt.style.visibility = "hidden";
     })
   });
 }
