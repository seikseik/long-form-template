import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);



let menuBtn = document.querySelector(".menu-toggle");
let menu =  document.querySelector(".menu-full");
let menuItems = gsap.utils.toArray(".menu-item");
let body = document.querySelector("body");
menuBtn.onclick = function(){
    if(menuBtn.classList.contains("active")){
      let tl = gsap.timeline();
        tl.fromTo(menuItems,{autoAlpha: 1},{  duration: 0.2, autoAlpha: 0 ,stagger: -0.1, delay: 0.1});
        tl.fromTo(menu,{autoAlpha: 1},{  duration: 0.3, autoAlpha: 0, ease: "circ.out"});
        tl.set(menu, {visibility: "hidden"});
        body.style.overflowY = "scroll"
        menuBtn.classList.remove("active")
    }else{
      menu.visibility = "visible";
      gsap.fromTo(menu,{autoAlpha: 0},{  duration: 0.35, autoAlpha: 1,ease: "circ.out"});
      gsap.fromTo(menuItems,{autoAlpha: 0},{  duration: 1, autoAlpha: 1 ,stagger: 0.2, delay: 0.35});
      body.style.overflowY = "hidden"
      menuBtn.classList.add("active")
    }
  };



  // fade up
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


  // fade quote
  const fadeQ = gsap.utils.toArray("[fade-quote]");
  fadeQ.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 2.5, autoAlpha: 1, delay: 0.2});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });


  // zoom img
  // const zoom = gsap.utils.toArray("[img-zoom]");
  // zoom.forEach((el, i) => {
  //   const anim = gsap.fromTo(el, {scale: 1}, {scale: 1.05, duration: 2.5, delay: 0.2});
  //   ScrollTrigger.create({
  //     trigger: el,
  //     animation: anim,
  //     toggleActions: 'play none none none',
  //     once: true,
  //   });
  // });
  //
  //
  // // hr line animation
  // const hr = gsap.utils.toArray(".hr");
  // hr.forEach((el, i) => {
  //   gsap.set(el, {transformOrigin:"left"})
  //   const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1.4, scaleX: 1, delay: .3, ease: "circ.out"});
  //   ScrollTrigger.create({
  //     trigger: el,
  //     animation: anim,
  //     ease: "circ.out",
  //     toggleActions: 'play none none none',
  //     once: true,
  //   });
  // });

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
