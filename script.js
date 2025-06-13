 const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
const locomotiveAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
};
locomotiveAnimation();

var to;
var prevx=0;
var prevy=0;
var xdif=1;
var ydif=1;

 var cur =document.querySelector("#cur");
document.addEventListener("mousemove",e=>{
    clearTimeout(to);
      xdif=gsap.utils.clamp(0.8,1.2,e.clientX-prevx);
      ydif=gsap.utils.clamp(0.8,1.2,e.clientY-prevy);
      prevx=e.clientX;
      prevy=e.clientY;
     
    // cur.style.transform=`scale(${xdif},${ydif})`;
    gsap.to(cur,{
        scaleX:xdif,
        scaleY:ydif,
        x:e.clientX-cur.getBoundingClientRect().width/2+50,
        y:e.clientY-cur.getBoundingClientRect().height/2+50,
        ease:Power4,
        duration:.6
    })
    to=setTimeout(()=>{
        gsap.to(cur,{
        scaleX:1,
        scaleY:1,
        ease:Power3
        })
    },100);
})



gsap.from("#page1 h1",{
    opacity:0,
    y:100,
    ease:Power3,
    delay:0.5,
    stagger:0.3,
    duration:1
})


gsap.from("#page1 #vc",{
    scaleX:0.5,
    scaleY:0.5,
    opacity:0,
    y:500,
    ease:Power3,
    delay:0.4,
    duration:2
})

document.querySelector("#vc").addEventListener("mouseenter",e=>{
    cur.classList.remove("mix-blend-difference");
    cur.style.backgroundColor="black";
    cur.style.color="white"
    cur.textContent="PLAY";
    gsap.to(cur,{
        scaleX:1.3,
        scaleY:1.3,
        ease:Power3,
        duration:0.5
    })
})


document.querySelector("#vc").addEventListener("mouseleave",e=>{
    cur.textContent="";
    cur.classList.add("mix-blend-difference");
     cur.style.backgroundColor="white";
    gsap.to(cur,{
        scaleX:1,
        scaleY:1,
        ease:Power3,
        duration:0.5
    })
})

  gsap.to("#nav #lt", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      // markers: "true",
      start: "top -10%",
      end: "top -15%",
      scrub: 1,
    },
  });
  gsap.to("#nav #li", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      // markers: "true",
      start: "top -10%",
      end: "top -15%",
      scrub: 1,
    },
  });

  document.querySelector("#child1").addEventListener("mouseenter",()=>{
    cur.classList.remove("mix-blend-difference");
    cur.classList.add("backdrop-blur-lg")
    gsap.to(cur,{
      opacity:0.8,
      backgroundColor:"#00ffff4e"
    })
  })
  document.querySelector("#child1").addEventListener("mouseleave",()=>{
    cur.classList.add("mix-blend-difference");
     cur.classList.remove("backdrop-blur-lg");
    gsap.to(cur,{
      opacity:1,
      backgroundColor:"white"
    })
  })

   document.querySelector("#child2").addEventListener("mouseenter",()=>{
    cur.classList.remove("mix-blend-difference");
    cur.classList.add("backdrop-blur-lg")
    gsap.to(cur,{
      opacity:0.7,
      backgroundColor:"#d8709355"
    })
  })
  document.querySelector("#child2").addEventListener("mouseleave",()=>{
    cur.classList.add("mix-blend-difference");
     cur.classList.remove("backdrop-blur-lg");
    gsap.to(cur,{
      opacity:1,
      backgroundColor:"white"
    })
  })

   document.querySelector("#child3").addEventListener("mouseenter",()=>{
    cur.classList.remove("mix-blend-difference");
    cur.classList.add("backdrop-blur-lg")
    gsap.to(cur,{
      opacity:0.7,
      backgroundColor:"#acff2f40"
    })
  })
  document.querySelector("#child3").addEventListener("mouseleave",()=>{
    cur.classList.add("mix-blend-difference");
     cur.classList.remove("backdrop-blur-lg");
    gsap.to(cur,{
      opacity:1,
      backgroundColor:"white"
    })
  })

   document.querySelector("#child4").addEventListener("mouseenter",()=>{
    cur.classList.remove("mix-blend-difference");
    cur.classList.add("backdrop-blur-lg")
    gsap.to(cur,{
      opacity:0.7,
      backgroundColor:"#8080804e"
    })
  })
  document.querySelector("#child4").addEventListener("mouseleave",()=>{
    cur.classList.add("mix-blend-difference");
     cur.classList.remove("backdrop-blur-lg");
    gsap.to(cur,{
      opacity:1,
      backgroundColor:"white"
    })
  })

 