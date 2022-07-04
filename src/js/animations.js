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
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  speed: 800,
   fadeEffect: {
     crossFade: true
   },

});


const swiper_gallerie = new Swiper('.swiper_gallerie', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  speed: 800,
   fadeEffect: {
     crossFade: true
   },
});

const swiper_spazio = new Swiper('.swiper_spazio', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
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
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  pagination: false,
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


const swiper_quarter = new Swiper('.slide_quarter', {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: false,
  loop: true,
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


// modal
  var modal = document.getElementById("myModal");

  var modalImg = document.getElementById("img01");

  let img = document.querySelectorAll(".modal_image")

  img.forEach((item, i) => {
    item.addEventListener("click", function(){
      modal.style.display = "block";
      modalImg.src = item.src;
    })
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
