import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesLoaded';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


let scrollContainer = document.querySelector("[data-scroll-container]");

var scroll;

scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  getSpeed: true,
  getDirection: true,
  offset:["15%",0]
});


imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

const target = document.querySelector('#scrollto');
let scrollto = document.querySelector(".scroll");
scrollto.addEventListener("click", function(){
  scroll.scrollTo(target);
})


// slideshow
const swiper = new Swiper('.swiper', {
loop: false,
slidesPerView: 1,
draggable: true,
grabCursor: true,
spaceBetween: 0,
navigation: {
  nextEl: '.swiper-button-next-custom',
  prevEl: '.swiper-button-prev-custom',
},
on: {
 slideChangeTransitionStart: function () {
     // let activeSlide = this.el.querySelector('div.swiper-slide-active');
     // let caption = activeSlide.querySelector('img').getAttribute("data-caption");
     // let slideCaption = this.el.parentElement.querySelector(".slide-captions");
     // if(slideCaption != null){
     //   slideCaption.innerHTML = "<p class='current-title'> <span>SENZA CONFINI </span>" + caption + "</p>"
     // }
 }
}
});


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });



// menu
let openMenu = document.querySelector(".menu_btn");
let closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", function(){
  let tl = gsap.timeline();
  tl.to(".hero_content", {opacity: 0, duration: 0.1, ease: "ease"})
  tl.to(".hero_header", {opacity: 0, duration: 0.1, ease: "ease"})
  tl.to(".scroll", {opacity: 0, duration: 0.1, ease: "ease"})
  tl.to(".menu_full", {opacity: 1, duration: 0.2, ease: "ease", visibility: "visible"})
})

closeMenu.addEventListener("click", function(){
  let tl = gsap.timeline();
  tl.to(".menu_full", {opacity: 0, duration: 0.2, ease: "ease"})
  tl.set(".menu_full", {visibility: "hidden"})

  tl.to(".hero_content", {opacity: 1, duration: 0.1, ease: "ease"})
  tl.to(".hero_header", {opacity: 1, duration: 0.1, ease: "ease"})
  tl.to(".scroll", {opacity: 1, duration: 0.1, ease: "ease"})
})


// // fade up
const fadeUp = gsap.utils.toArray("[fade]");
fadeUp.forEach((el, i) => {
  const anim = gsap.fromTo(el, {autoAlpha: 0, y:0}, {duration: 1.5, autoAlpha: 1});
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});
