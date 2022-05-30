import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesLoaded';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


let scrollContainer = document.querySelector("[data-scroll-container]");


const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  inertia: 0.8,
  getDirection: true,
  mobile: {
       smooth: true
   },
   tablet: {
       smooth: true,
       breakpoint: 0
   }
});



  locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainer, {

      scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },

  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});



let horizontalSections = document.querySelectorAll(".section_slideshow_locations");

 horizontalSections.forEach((horizontalSection) => {
   let pinWrap = horizontalSection.querySelector(".slide-container");
   let pinWrapWidth = pinWrap.offsetWidth;
   let horizontalScrollLength = pinWrapWidth - window.innerWidth;
   gsap.to(pinWrap, {
     scrollTrigger: {
       scroller: "[data-scroll-container]",
       scrub: true,
       trigger: horizontalSection,
       pin: true,
       start: "top top",
       end: () => `+=${pinWrapWidth}`,
       invalidateOnRefresh: true
     },
     x: -horizontalScrollLength,
     ease: "none"
   });
 });



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



imagesLoaded(scrollContainer, { background: true }, function () {
  locoScroll.update();
  console.log("ciao")
});

const target = document.querySelector('#scrollto');
let scrollto = document.querySelector(".scroll");
scrollto.addEventListener("click", function(){
  locoScroll.scrollTo(target);
})


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
