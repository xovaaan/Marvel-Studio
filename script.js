let cursor = document.querySelector('.cursor');
let blur = document.querySelector('.c-blur');
document.addEventListener('mousemove', (dets) =>{
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})

const h4 = document.querySelectorAll("#nav h4")
h4.forEach((ment)=>{
    ment.addEventListener('mouseenter', () =>{
      cursor.style.scale = 2
      cursor.style.border = "1px solid #fff"
      cursor.style.backgroundColor = "transparent"
    })
    ment.addEventListener('mouseleave', () =>{
      cursor.style.scale = 1
      cursor.style.border = "0px solid brown"
      cursor.style.backgroundColor = "maroon"
    })
    
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.5,
    height : "100px",
    scrollTrigger :{
        trigger : "#nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }

})

gsap.to(".main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger : ".main",
        scroller : "body",
        start : "top -30%",
        end : "top -100%",
        scrub : 1
    }
})


gsap.to(".card",{
    scale : 0.8,
    opacity : 0,
    duration : 1,
    stagger: 0.2,
    scrollTrigger :{
        trigger :".card",
        scroller : "body",
        start : " top 60%",
        end : "top 65%",
        scrub : 1
    }

})

gsap.from(".one",{
    y : -70,
    x : -70,
    scrollTrigger :{
        trigger : ".one",
        scroller: "body",
        start : "top 50%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from(".two",{
    y : 70,
    x : 70,
    scrollTrigger :{
        trigger : ".one",
        scroller: "body",
        start : "top 50%",
        end: "top 45%",
        scrub: 3
    }
})