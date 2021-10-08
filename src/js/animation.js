import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "masonry-layout"
import lozad from 'lozad'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);




// hero

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
  const zoom = gsap.utils.toArray("[img-zoom]");
  zoom.forEach((el, i) => {
    const anim = gsap.fromTo(el, {scale: 1}, {scale: 1.05, duration: 2.5, delay: 0.2});
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
  let topArrow = document.querySelector(".arrow-top");
  topArrow.addEventListener("click", function(){
    gsap.to(window, {duration: 2, scrollTo: 0});
  });

  let h = document.querySelector(".hero").offsetHeight;
  let arrow = document.querySelector(".arrow");
  arrow.addEventListener("click", function(){
    gsap.to(window, {duration: 0.7, scrollTo: h});
  });



  window.addEventListener('load', function(){

    const observer = lozad();
    observer.observe();
    

    let gridlayout = document.querySelector(".image-gallery-container");
    let gridWidth  = document.querySelector(".grid-sizer");
    let w = gridWidth.offsetWidth;
    gridlayout.style.gridAutoRows = `${w}px`
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
  });

  // modal
    let modal = document.getElementById("myModal");
    let imageList = document.querySelectorAll(".image-modal");
    let imageContList = document.querySelectorAll(".single-image-masonry");

    let modalImg = document.getElementById("img01");
    let modalCaption = document.getElementById("modal-caption");

    imageContList.forEach((item, i) => {
      let caption = item.nextElementSibling.innerHTML;
      item.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = item.src;
        modalCaption.innerHTML = caption;
      }
    });

    var span = document.getElementsByClassName("modal")[0];
    if(span != undefined){
      span.onclick = function() {
        modal.style.display = "none";
      }
    }
