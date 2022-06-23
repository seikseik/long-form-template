import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);


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


// menu
let h = document.querySelector(".section_hero").offsetHeight;
let arrow = document.querySelector(".scroll");
arrow.addEventListener("click", function(){
  gsap.to(window, {duration: 1, scrollTo: h});
});


let arrow_top = document.querySelector(".scroll-top");
arrow_top.addEventListener("click", function(){
  gsap.to(window, {duration: 1, scrollTo: 0});
});



// animation quotes
const quotes = document.querySelectorAll(".quote_animation");
  quotes.forEach((quote, i) => {

      quote.split = new SplitText(quote, {
      type:"words,chars",
      wordsClass: "split-line"
    });

    gsap.set(quote, {perspective: 400});
    let tl = gsap.timeline({
      scrollTrigger :{
        trigger: quote,
        animation: tl,
      }
    })
    tl.fromTo(quote.split.words,
    {autoAlpha: 0},{  duration: 0.7, autoAlpha: 1,ease: "ease",stagger: 0.03});

  });


  const qc = gsap.utils.toArray(".quote_footer > span");
  qc.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0},{  duration: 0.3, autoAlpha: 1,ease: "ease",delay: 1.5});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "ease",
      toggleActions: 'play none none none',
      once: true,
    });
  });

  //
  // // // hr line animation
  const hr = gsap.utils.toArray(".line");
  hr.forEach((el, i) => {
    gsap.set(el, {transformOrigin:"left"})
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1.4, scaleX: 1, delay: 1, ease: "circ.out"});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });
