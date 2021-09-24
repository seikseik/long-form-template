import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


let imagHero =  document.querySelector(".image-hero");
let title = document.querySelector(".title h1");
let subtitle = document.querySelector(".title h3");
let vLine = document.querySelector(".title .vertical-line");
let summary = document.querySelector(".hero-description");
let heroContainer = document.querySelector(".hero-text-container");

let heroTl =  gsap.timeline();
heroTl.fromTo(imagHero,{autoAlpha: 0},{  duration: 1.5, autoAlpha: 1});
heroTl.fromTo(heroContainer,{autoAlpha: 0},{  duration: 1.5, autoAlpha: 1, delay: -1});
gsap.set(vLine, {transformOrigin:"bottom"})
gsap.fromTo(vLine,{scaleY: 0}, {duration: 0.7, scaleY: 1, delay: 0.7, ease: "circ.out",});



let menuBtn = document.querySelector(".menu");
let menu =  document.querySelector(".menu-full");
let menuItems = gsap.utils.toArray(".menu-item-container");
menuBtn.onclick = function(){
    if(menuBtn.classList.contains("active")){
      let tl = gsap.timeline();
        tl.fromTo(menuItems,{autoAlpha: 1},{  duration: 0.2, autoAlpha: 0 ,stagger: -0.1, delay: 0.1});
        tl.fromTo(menu,{autoAlpha: 1},{  duration: 0.3, autoAlpha: 0, ease: "circ.out"});
        tl.set(menu, {visibility: "hidden"});
        menuBtn.classList.remove("active")
    }else{
      menu.visibility = "visible";
      gsap.fromTo(menu,{autoAlpha: 0},{  duration: 0.35, autoAlpha: 1,ease: "circ.out"});
      gsap.fromTo(menuItems,{autoAlpha: 0},{  duration: 1, autoAlpha: 1 ,stagger: 0.2, delay: 0.35});
      menuBtn.classList.add("active")
    }
  };



  // fade in
  const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 1.5, autoAlpha: 1});
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
    const anim = gsap.fromTo(el, {autoAlpha: 0, y:0}, {duration: 1, autoAlpha: 1, y: -15});
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
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1.3, scaleX: 1, delay: .3, ease: "circ.out"});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });

  // scroll top
  let topArrow = document.querySelector(".arrow-top");
  topArrow.addEventListener("click", function(){
    gsap.to(window, {duration: 2, scrollTo: 0});
  });

  let arrow = document.querySelector(".arrow");
  arrow.addEventListener("click", function(){
    gsap.to(window, {duration: 0.9, scrollTo: 600});
  });
