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
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top center+=50",
                end: "bottom center+=200",
                //markers: true
            }
        }
    );
}

export { fadeIn };