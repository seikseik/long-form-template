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


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  ...
});


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });





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


let h = document.querySelector(".section_hero").offsetHeight;
let arrow = document.querySelector(".scroll");
arrow.addEventListener("click", function(){
  gsap.to(window, {duration: 1, scrollTo: h});
});
