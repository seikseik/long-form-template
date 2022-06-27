import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Swiper, { Navigation, Pagination,  EffectFade, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);



const swiper_chef = new Swiper('.swiper_fade', {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  speed: 800,
   fadeEffect: {
     crossFade: true
   },

});


const swiper_half = new Swiper('.slide_half', {
  slidesPerView: 2,
  spaceBetween: 16,
  pagination: false,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


const swiper_quarter = new Swiper('.slide_quarter', {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: false,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



ScrollTrigger.batch(".card_time", {
  onEnter: elements => {
    gsap.set(elements, {transformOrigin: 'center'});
    gsap.to(elements,
    { opacity: 1,
      stagger: 0.1,
      duration: 0.2,
    })
  }
});


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



  //
  // const qc = gsap.utils.toArray(".quote_footer > span");
  // qc.forEach((el, i) => {
  //   const anim = gsap.fromTo(el, {autoAlpha: 0},{  duration: 0.3, autoAlpha: 1,ease: "ease",delay: 1.5});
  //   ScrollTrigger.create({
  //     trigger: el,
  //     animation: anim,
  //     ease: "ease",
  //     toggleActions: 'play none none none',
  //     once: true,
  //   });
  // });

  //
  // // hr line animation
  const hr = gsap.utils.toArray(".line_separator");
  hr.forEach((el, i) => {
    gsap.set(el, {transformOrigin:"left"})
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 0.7, scaleX: 1, ease: "circ.out"});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });


  // animation quotes
  // const quotes = document.querySelectorAll(".quote_animation");
  //   quotes.forEach((quote, i) => {
  //
  //       quote.split = new SplitText(quote, {
  //       type:"words,chars",
  //       wordsClass: "split-line"
  //     });
  //
  //     gsap.set(quote, {perspective: 400});
  //
  //     let tl = gsap.timeline({
  //       scrollTrigger :{
  //         trigger: quote,
  //       }
  //     })
  //
  //     tl.fromTo(quote.split.words,
  //     {autoAlpha: 0},{  duration: 0.4, autoAlpha: 1, ease: "ease",stagger: 0.02});
  //
  //   });
