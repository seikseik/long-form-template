import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import lozad from 'lozad'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


document.addEventListener("DOMContentLoaded", function(){

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

    // animate text on scroll
    let delay = 0;
    const quotes = document.querySelectorAll(".animation-text");
      quotes.forEach((quote, i) => {

        quote.split = new SplitText(quote, {
          type:"words",
          wordsClass: "split-line"
        });

        quote.anim = gsap.from(quote.split.words, {
          duration: 0.4,
          ease: "circ.out",
          y: 160,
          delay: delay,
        });
        delay += 0.135;
      });


  // nimbers

  const items = document.querySelectorAll(".number");

  const animNumbers = gsap.from(items, {
    textContent: 0,
    duration: 2,
    snap: { textContent: 1 },
  });
  ScrollTrigger.create({
    trigger: items,
    animation: animNumbers,
    toggleActions: 'play none none none',
    once: true,
  });



  let image1 = document.querySelector("#card1");
  let image2 = document.querySelector("#card2");
  let image3 = document.querySelector("#card3");
  let image4 = document.querySelector("#card4");

  let card1 = gsap.fromTo(image1, {xPercent: -200, yPercent: 35, rotation: 5}, {duration: 1.1, ease: "circ.out", xPercent: 0, yPercent: 0, rotation: 0});
  let card2 = gsap.fromTo(image2, {xPercent: 200, yPercent: 65, rotation: 10}, {duration: 1.1, ease: "circ.out", xPercent: 0, yPercent: 0, rotation: 0, delay: 0.3});
  let card3 = gsap.fromTo(image3, {xPercent: -200, yPercent: 5, rotation: 15}, {duration: 1.1, ease: "circ.out", xPercent: 0, yPercent: 0, rotation: 0, delay: 0.4});
  let card4 = gsap.fromTo(image4, {xPercent: 200, yPercent: 60, rotation: 9}, {duration: 0.8, ease: "circ.out", xPercent: 0, yPercent: 0, rotation: 0, delay: 0.3});

  ScrollTrigger.create({
    trigger: image1,
    animation: card1,
    toggleActions: 'play none none none',
    once: true,
  });
  ScrollTrigger.create({
    trigger: image2,
    animation: card2,
    toggleActions: 'play none none none',
    once: true,
    stagger: 5
  });
  ScrollTrigger.create({
    trigger: image3,
    animation: card3,
    toggleActions: 'play none none none',
    once: true,
    stagger: 5
  });
  ScrollTrigger.create({
    trigger: image4,
    animation: card4,
    toggleActions: 'play none none none',
    once: true,
    stagger: 5
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
    const fadeUp = gsap.utils.toArray("[fade-up]");
    fadeUp.forEach((el, i) => {
      const anim = gsap.fromTo(el, {autoAlpha: 0, y: -100}, {duration: 1, autoAlpha: 1, y: 0});
      ScrollTrigger.create({
        trigger: el,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });

    // fade circles
    ScrollTrigger.batch(".circle", {
      onEnter: elements => {
        gsap.from(elements, {
          autoAlpha: 0,
          stagger: 0.15,
          duration: 1
        });
      },
      once: true
    });


  // zoom
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
    const hr = gsap.utils.toArray(".vertical-line-hr");
    hr.forEach((el, i) => {
      gsap.set(el, {transformOrigin:"top"})
      const anim = gsap.fromTo(el, {scaleY: 0}, {duration: 2, scaleY: 1});
      ScrollTrigger.create({
        trigger: el,
        animation: anim,
        ease: "circ.out",
        toggleActions: 'play none none none',
        once: true,
      });
    });
    const hrcenter = gsap.utils.toArray(".hr-line");
    hrcenter.forEach((el, i) => {
      gsap.set(el, {transformOrigin:"center"})
      const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1, scaleX: 1});
      ScrollTrigger.create({
        trigger: el,
        animation: anim,
        ease: "circ.out",
        toggleActions: 'play none none none',
        once: true,
      });
    });


    // parallax
    const parallax = gsap.utils.toArray(".parallax");
    parallax.forEach((item, i) => {
      gsap.to(item, {
      scrollTrigger: {
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });
    });
});



$(document).ready(function() {
  let img = document.querySelectorAll(".img-overlay")
  img.forEach((item, i) => {
    $(item).on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
  });
});
