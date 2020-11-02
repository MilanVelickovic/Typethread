import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function fadeIn (element) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(
        element,
        {
            opacity: 0,
            duration: 2,
            ease: "linear",
            y: 100,
            scrollTrigger: element
        }
    );
}

function fadeInWithScroll (element) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(
        element,
        {
            opacity: 0,
            duration: 2,
            ease: "linear",
            y: 100,
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top center+=100",
                end: "bottom bottom-=200",
                //markers: true
            }
        }
    );
}

function animateText (element, direction) {
    gsap.registerPlugin(ScrollTrigger);
    switch(direction) {
        case "topToBottom":
            gsap.from(
                element,
                {
                    scrollTrigger: element,
                    opacity: 0,
                    duration: 2,
                    y: -50,
                    ease: "Power2.easeInOut"
                }
            );
            break;
        case "bottomToTop":
            gsap.from(
                element,
                {
                    scrollTrigger: element,
                    opacity: 0,
                    duration: 2,
                    y: 50,
                    ease: "Power2.easeInOut"
                }
            );
            break;
        default:
            break;
    }
}

export { fadeIn, fadeInWithScroll, animateText };