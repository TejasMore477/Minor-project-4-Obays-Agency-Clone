function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function loaderAnimations() {
    let tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    })
    .from(".wait", {
        opacity: 0,
        duration: 0.4,
    })
    .from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: () => {
            let h5Timer = document.querySelector('#line1-part1 h5');
            let grow = 0;

            function updateCounter() {
                if (grow < 100) {
                    h5Timer.innerHTML = grow++;
                    requestAnimationFrame(updateCounter);
                } else {
                    h5Timer.innerHTML = 100;
                }
            }
            requestAnimationFrame(updateCounter);
        }
    })
    .to(".line h2", {
        animationName: "loaderAnime",
        opacity: 1,
    })
    .to('#loader', {
        opacity: 0,
        duration: 0.4,
        delay: 0,
    })
    .from(".page1", {
        delay: 0.2,
        y: 3000,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
    })
    .to("#loader", {
        display: 'none',
    })
    .from(".nav", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
    })
    .from("#hero1 h1, #hero2 h1, #hero4 h1, #hero3 h2, #hero3 h3", {
        y: 130,
        stagger: 0.2,
    })
    .from("#hero1 h4", {
        opacity: 0,
        duration: 0.5,
    })
    .from(".base h5", {
        y: 20,
        opacity: 0,
        repeat: -1,
        duration: 1.5,
    });
}

function cursorAnimation() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
        duration: 1,
    });

    const magnets = [
        ".page1 .nav .nav-part1 svg",
        ".page1 .nav .nav-part2 h4",
        ".in-circle p"
    ];
    
    magnets.forEach(selector => Shery.makeMagnet(selector));

    const videoContainer = document.querySelector(".page2 #video-container");
    const circle = document.querySelector("#circle");
    const video = document.querySelector(".page2 #video-container video");
    const play = document.querySelector(".page2 #video-container #play");
    const pause = document.querySelector(".page2 #video-container #pause");

    function playVideo() {
        play.classList.add("inactive");
        play.classList.remove("active");
        pause.style.display = "block";
    }

    function pauseVideo() {
        pause.style.display = "none";
        play.classList.add("active");
        play.classList.remove("inactive");
    }

    if (videoContainer && circle) {
        videoContainer.addEventListener("mouseenter", () => {
            videoContainer.addEventListener("mousemove", (dets) => {
                const containerRect = videoContainer.getBoundingClientRect();
                const circleDiameter = circle.offsetWidth;

                const x = dets.clientX - containerRect.left - circleDiameter *6;
                const y = dets.clientY - containerRect.top - circleDiameter / 6;

                gsap.to(".mousefollower", { opacity: 0});
                gsap.to("#circle", { x, y });
            });
        });

        videoContainer.addEventListener("mouseleave", () => {
            gsap.to(".mousefollower", { opacity: 1});
            gsap.to("#video-container #circle", { 
                x: "0",
                y: "0",

            });
        });

        videoContainer.addEventListener("click", () => {
            video.style.opacity = 1;
            if (video.paused) {
                video.play();
                playVideo();
            } else {
                video.pause();
                pauseVideo();
            }
        });
    }
}

function sheryanimations() {
    Shery.imageEffect(".image-div", {
        style: 5,
        config: {
            a: { value: 1.6, range: [0, 30] },
            b: { value: 0.5, range: [-1, 1] },
            zindex: { value: -9996999, range: [-9999999, 9999999] },
            aspect: { value: 0.8275832406961723 },
            ignoreShapeAspect: { value: true },
            shapePosition: { value: { x: 0, y: 0 } },
            shapeScale: { value: { x: 0.5, y: 0.5 } },
            shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
            shapeRadius: { value: 0, range: [0, 2] },
            currentScroll: { value: 0 },
            scrollLerp: { value: 0.07 },
            gooey: { value: true },
            infiniteGooey: { value: true },
            growSize: { value: 4, range: [1, 15] },
            durationOut: { value: 2.16, range: [0.1, 5] },
            durationIn: { value: 1.5, range: [0.1, 5] },
            displaceAmount: { value: 0.5 },
            masker: { value: true },
            maskVal: { value: 1.21, range: [1, 5] },
            scrollType: { value: 0 },
            geoVertex: { range: [1, 64], value: 1 },
            noEffectGooey: { value: true },
            onMouse: { value: 1 },
            noise_speed: { value: 0.23, range: [0, 10] },
            metaball: { value: 0.44, range: [0, 2] },
            discard_threshold: { value: 0.7, range: [0, 1] },
            antialias_threshold: { value: 0, range: [0, 0.1] },
            noise_height: { value: 0.4, range: [0, 2] },
            noise_scale: { value: 15.27, range: [0, 100] },
        },
        gooey: true,
    });
}

function flagAnimation(){
    document.addEventListener("mousemove",(det)=>{
        gsap.to("#flag", {
            x: det.clientX - 755,
            y: det.clientY - 390,
        });
    })
    
    document.querySelector("#hero3").addEventListener("mouseenter", ()=>{
        gsap.to("#flag", {
            opacity:1,
        });
    });
    
    document.querySelector("#hero3").addEventListener("mouseleave", ()=>{
        gsap.to("#flag", {
            opacity:0,
        });
    });
    
}

// Initialize all animations and interactions
function init() {
    loaderAnimations();
    cursorAnimation();
    flagAnimation();
    locomotiveScroll();
    sheryanimations();
}

document.addEventListener("DOMContentLoaded", init);
