import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesLoaded';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
Swiper.use([Navigation, Pagination]);




// FUNCTION DESKTOP
function initDesktop(){
  let scrollContainer = document.querySelector("[data-scroll-container]");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    inertia: 0.8,
    getDirection: true,
    smartphone: {
         smooth: false,
         inertia: 0.2,
     },
     tablet: {
         smooth: true,
         breakpoint: 0,
         inertia: 0.2,
     }
  });


    locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollContainer, {

        scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },

        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },

    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();


  imagesLoaded(scrollContainer, { background: true }, function () {
    locoScroll.update();
  });

  const target = document.querySelector('#scrollto');
  let scrollto = document.querySelector(".scroll");
  scrollto.addEventListener("click", function(){
    locoScroll.scrollTo(target);
  })

}

initDesktop();
