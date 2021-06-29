import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";


window.addEventListener("load", function(){
  document.getElementById("bgvid").play();
});

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);


// scroll top
let topArrow = document.querySelector(".arrow-top");
topArrow.addEventListener("click", function(){
  gsap.to(window, {duration: 2, scrollTo: 0});
});


  // animation hero text
  const heroTitle = document.querySelector(".animation-text-hero");

  var tl = gsap.timeline(),
      mySplitText = new SplitText(heroTitle, {type:"words,chars", wordsClass: "split-line"
    }),
      chars = mySplitText.chars;
  gsap.set(heroTitle, {perspective: 400});

  tl.from(chars,
    {  duration: 0.6,
      ease: "circ.out",
      y: 80,
      stagger: 0.02
    },
     "+=0");



  // animate text on scroll

  const quotes = document.querySelectorAll(".animation-text");
  const timing = [ 0.3, 0.4, 0.4, 0.4];
  const stagger = [ 0.01, 0.02, 0.02, 0.02];
  function setupSplits() {
    quotes.forEach((quote, i) => {

      if(quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type:"words,chars",
        wordsClass: "split-line"
      });

      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 75%",
        },
        duration: timing[i],
        ease: "circ.out",
        y: 80,
        stagger: stagger[i]
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();


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

  // Fade left

  const fadeLeft = gsap.utils.toArray("[fade-left]");
  fadeLeft.forEach((el, i) => {
    const anim = gsap.fromTo(el, {x: -25}, {duration: 0.75, x:0});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });

  const fadeRight = gsap.utils.toArray("[fade-right]");
  fadeRight.forEach((el, i) => {
    const anim = gsap.fromTo(el, {x: 25}, {duration: 0.75, x:0});
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
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: .5, scaleX: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });

// FEDE INFO 1
const fadeInfo = gsap.utils.toArray("[info-fade]");
let trigger_info = document.querySelector(".infografica-full")
fadeInfo.forEach((el, i) => {
  const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 1, autoAlpha: 1,});
  ScrollTrigger.create({
    trigger: trigger_info,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});


// FADE NUMBERS
const fadeNum = gsap.utils.toArray("[num-fade]");
fadeNum.forEach((el, i) => {
  const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: .5, autoAlpha: 1, stagger: 1,});
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});


  // // ANIM INFO
  const right = gsap.utils.toArray(".rect-animation");
  const anim_info_2 = gsap.fromTo(".rect-animation", {scaleX: 0}, {duration: 0.8, scaleX: 1, stagger: 0.03,});
  let trigger_info_2 = document.querySelector(".infografica-full-white-container")
    ScrollTrigger.create({
      trigger: trigger_info_2,
      animation: anim_info_2,
      toggleActions: 'play none none none',
      once: true,
      ease: "Expo.easeInOut",
    });




  // modal

  // Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl2.to(layer, {y: movement, ease: "none"}, 0)
});


 //  preloader
let loadingProgress;
const video = document.getElementById("bgvid")
video.addEventListener('playing', (event) => {
  loadComplete()
});

function loadComplete() {
  var preloaderOutTl = new gsap.timeline();
  preloaderOutTl
    .to('.progress', 0.3, {
      autoAlpha: 0,
    })
    .to('.txt-perc', 0.7, {
      textContent: 100,
      ease: "Power1.easeIn",
      snap: { textContent: 1 },
      stagger: 1,
    })
    .set('body', {
      className: ''
    })
    .to('#preloader', 1, {
      xPercent: 105,
      ease: "Expo.easeInOut",
    })
    .set('#preloader', {
      className: '+=is-hidden'
    })
  return preloaderOutTl;
}
