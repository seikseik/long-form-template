import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import lozad from 'lozad'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);






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
tl.from(chars, {duration: 1.2, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
  // tl.from(chars,
  //   {  duration: 0.6,
  //     ease: "circ.out",
  //     y: -80,
  //     stagger: 0.02
  //   },
  //    "+=0");


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


let slideshows = document.querySelectorAll(".slideshow");
slideshows.forEach((item, i) => {
  $(item).slick({
  infinite: true,
});
});



// modal
  // let modal = document.getElementById("myModal");
  // let imageList = document.querySelectorAll(".image-modal");
  // let imageContList = document.querySelectorAll(".single-image");
  //
  // let modalImg = document.getElementById("img01");
  //
  // imageContList.forEach((item, i) => {
  //   item.onclick = function(){
  //     let img = item.querySelector(".image");
  //     modal.style.display = "flex";
  //     modalImg.src = img.src;
  //   }
  // });
  //
  // var span = document.getElementsByClassName("close")[0];
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
