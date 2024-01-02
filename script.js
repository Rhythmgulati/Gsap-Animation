
const t1 = gsap.timeline();
t1.from("#nav img,#nav h3,#nav button ",{
    y:-100,
    duration:1,
    delay:1,
    stagger:0.5
})
t1.from("main h1",{
     y:100,
     duration:1,
     stagger:0.2,
     opacity:0
})
t1.from("#left-img,#right-img",{
    scale:0,
    opacity:0,
    duration:0.5
})
t1.from("main h4",{
    scale:0,
    opacity:0,
})
t1.to("main h4",{
    y:40,
    repeat:-1,
    duration:.5,
    yoyo:true
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        markers:true,
        scrub:1,
        end:"top 30%"


    }
})
gsap.from("#page3 .box",{
    scale:0,
    opacity:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 .box",
        scroller:"body",
        markers:true,
        scrub:1,
        
    }
})