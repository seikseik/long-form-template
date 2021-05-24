import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);



let page = document.getElementById('page-container');

let transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
page.style.transition = transition;
page.onclick = slideDown;

function slideDown(e) {
  console.log(e.target.className)
  if (e.target.id != 'next') {
    return;
  }

  page.onclick = '';
  self = e.target.parentNode;
  var offset = self.getBoundingClientRect();
  var scroll = self.offsetTop;

  page.style.top = (-offset.height-offset.top) + 'px';

  setTimeout(function () {
    page.style.transition = 'none';
    page.style.top = '';
    window.scrollTo(0, offset.height+scroll);
    page.style.transition = transition;
    page.onclick = slideDown;

  }, 700);
}


// animate text on scroll

const quotes = document.querySelectorAll(".animation-text");
const timing = [0.6, 0.4, 0.5, 0.4, 0.4];
const stagger = [0.02, 0.01, 0.02, 0.02, 0.02];
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
  const anim = gsap.fromTo(el, {autoAlpha: 0, y: 30}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});

const hr = gsap.utils.toArray(".hr");

hr.forEach((el, i) => {
  gsap.set(el, {transformOrigin:"left"})
  const anim = gsap.fromTo(el, {scaleX: 0}, {duration: 1, scaleX: 1});
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});
