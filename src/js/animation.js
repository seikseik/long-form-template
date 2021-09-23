import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


  import lozad from 'lozad'

  const observer = lozad();
  observer.observe();

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);



  // animation hero text
  // const heroTitle = document.querySelector(".animation-text-hero");
  //
  // let tl = gsap.timeline(),
  //   mySplitText = new SplitText(heroTitle, {type:"words,chars", wordsClass: "split-line"
  // }),
  // chars = mySplitText.chars;
  // gsap.set(heroTitle, {perspective: 400});
  // tl.fromTo(chars, {autoAlpha: 0},
  //         {  duration: 1,
  //              autoAlpha: 1,
  //              delay: 0.1,
  //              ease: "circ.out",
  //              stagger: 0.095,
  //         },
  //         "+=0");

// animation quotes

  // const quotes = document.querySelectorAll(".animation-text");
  //
  //   quotes.forEach((quote, i) => {
  //     quote.split = new SplitText(quote, {
  //       type:"words,chars",
  //       wordsClass: "split-line"
  //     });
  //     gsap.set(quote, {perspective: 400});
  //     const anim = gsap.fromTo(quote.split.chars,
  //     {autoAlpha: 0},{  duration: 1, autoAlpha: 1,ease: "circ.out",stagger: 0.045, delay: 0.2});
  //
  //     ScrollTrigger.create({
  //       trigger: quote,
  //       animation: anim,
  //       toggleActions: 'play none none none',
  //       once: true,
  //     });
  //   });



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
  // const hr = gsap.utils.toArray(".hr");
  //
  // hr.forEach((el, i) => {
  //   gsap.set(el, {transformOrigin:"left"})
  //   const anim = gsap.fromTo(el, {scaleX: 0}, {duration: .5, scaleX: 1});
  //   ScrollTrigger.create({
  //     trigger: el,
  //     animation: anim,
  //     ease: "circ.out",
  //     toggleActions: 'play none none none',
  //     once: true,
  //   });
  // });


// swiper
// let swipers = document.querySelectorAll(".swiper-container")
// swipers.forEach((item, i) => {
//   const swiper = new Swiper(item, {
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 1,
//     spaceBetween: 30,
//     centeredSlides: true,
//     preloadImages: false,
//     lazy: true,
//     autoHeight: true,
//   });
// });
