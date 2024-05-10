function loaderAnimations(){

    let tl = gsap.timeline()
    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
    })

    tl.from(".wait",{
        opacity:0,
        duration:0.4,
    })

    tl.from("#line1-part1, .line h2", {
        opacity:0,
        onStart: () => {
            let h5Timer = document.querySelector('#line1-part1 h5');
            let grow = 0;
            setInterval(() => {
                if(grow < 100){
                    h5Timer.innerHTML = grow++;
                }
                else{
                    grow = 100;
                    h5Timer.innerHTML = grow;
                }
            }, 50)
        }
    })

    tl.to(".line h2", {
        animationName: "loaderAnime",
        opacity: 1,
    });

    tl.to('#loader', {
        opacity:0,
        duration:0.4,
        delay:5,
    })

    tl.from(".page1", {
        delay:0.2,
        y:1600, 
        opacity:0,
        duration:0.5,
        ease:Power4,
    })

    tl.to("#loader",{
        display:'none',
    })

    tl.from(".nav",{
        opacity:0,
        duration:0.5,
        delay:0.3,
    })

    tl.from("#hero1 h1,#hero2 h1,#hero4 h1,#hero3 h2, #hero3 h3",{
        y:130,
        stagger:0.2,
    })

    tl.from("#hero1 h4",{
        opacity:0,
        duration:0.5,
    })

    tl.from(".base h5",{
        y:20,
        opacity:0,
        repeat: -1,
        duration:1.5,
    })

}

loaderAnimations();

function cursorAnimation(){
    document.addEventListener("mousemove", (position) => {
        gsap.to("#curser",{
            left:position.x,
            top:position.y,
        })
    })
    
    
    Shery.makeMagnet(".page1 .nav .nav-part1 svg", {
    });
    
    Shery.makeMagnet(".page1 .nav .nav-part2 h4", {
    });

    Shery.makeMagnet("#hero1 h4", {
    });
}

cursorAnimation();

