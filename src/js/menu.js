import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);

let body = document.querySelector("body");

let menuBtn = document.querySelector("#menu-btn");
var burger = gsap.timeline({
    paused: true
});

burger
    .to(" .burger-one", 0.3, { y: "5px", ease: "circ.out" }, "burg")
    .to(" .burger-tree", 0.3, { y: "-5px", ease: "circ.out" }, "burg")
    .to(
        " .burger-two",
        0.3,
        { scale: 0.1, transformOrigin: "center", ease: "circ.out" },
        "burg"
    )
    .add("rotate")
    .to(" .burger-one", 0.3, { y: "10", ease: "circ.out" }, "rotate")
    .to(" .burger-tree", 0.3, { y: "-10", ease: "circ.out" }, "rotate")
    .to(
        " .burger-one",
        0.3,
        { rotationZ: 45, transformOrigin: "50% 50%", ease: "circ.out" },
        "rotate"
    )
    .to(
        " .burger-tree",
        0.3,
        { rotationZ: -45, transformOrigin: "50% 50%", ease: "circ.out" },
        "rotate"
    );

    let menu =  document.querySelector(".menu-full");
    let menuItems = gsap.utils.toArray(".menu-item-container");
    let flag = false;

let scroll = false;
menuBtn.addEventListener("click", () => {
  let navbar = document.querySelector(".navbar");
        flag = !flag;
        if (flag) {
            menu.visibility = "visible";
            gsap.fromTo(menu,{autoAlpha: 0},{  duration: 0.25, autoAlpha: 1, ease: "circ.out"});
            gsap.fromTo(menuItems,{autoAlpha: 0},{  duration: 0.5, autoAlpha: 1, stagger: 0.2, delay: 0.35});
            body.style.overflowY = "hidden"
            burger.restart();
        } else {
            let tl = gsap.timeline({
                paused: true
              });
              tl.fromTo(menuItems,{autoAlpha: 1},{  duration: 0.2, autoAlpha: 0 ,stagger: -0.1, delay: 0.1});
              tl.fromTo(menu,{autoAlpha: 1},{  duration: 0.4, autoAlpha: 0, ease: "circ.out", delay: 0.2});
              tl.set(menu, {visibility: "hidden"});
              tl.restart();
              body.style.overflowY = "scroll";
              burger.reverse();
        }
});



// HEADER SCROLL desktop
const nav = document.querySelector('nav');
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 50) {
      body.classList.remove(scrollUp);
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    }
     else if (currentScroll+25 < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
