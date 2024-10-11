
var tl1=gsap.timeline({
    scrollTrigger: {
        trigger: ".dark-section",
        start: "50% 50%",
        end: "100% 50%",
        scrub: true,
        // markers: true,
        pin:true,
      },
},'dark-rotate')

tl1.to(".rotate-div", {
    rotate: "-15",
    scale:"0.8",
    // skewX:0,

  },'dark-rotate');

tl1.to("#row-div-2", {
    marginTop:"-25%"

  },'dark-rotate');
tl1.to("#row-div-3", {
    marginTop:"-18%"

  },'dark-rotate');
  
tl1.to("#row-div-4", {
    marginTop:"-22%"

  },'dark-rotate');
tl1.to("#row-div-5", {
    marginTop:"-25%"

  },'dark-rotate');



tl1.to(".overlay-text h1,span", {
    opacity:"1",
    delay:0.3,

  },'dark-rotate'); 
  
tl1.to(".overlay-div", {
    backgroundColor:"#000000b4",

  },'dark-rotate'); 

tl1.to(".scrolling", {
    width:"100%",

  },'dark-rotate'); 
  


// Dark ke 3 Features 
  let tl9 =gsap.timeline({
    scrollTrigger:{
        trigger:".part-4",
        start:"50% 50%",
        end:"800% 50%",
        pin:true,
        // markers:true,
        scrub:1,
    },
});
tl9.to(".c-one",{
    marginTop:"-60%",
    opacity:"1",
},'sct-1')
tl9.to(".c-two",{
    opacity:"1",
},'sct-2')
tl9.to(".c-one",{
    marginTop:"-175%",
    opacity:"0",
},'sct-2')
tl9.to(".c-three",{
    opacity:"1",
},'sct-3')
tl9.to(".c-two",{
    opacity:"0",
    marginTop:"-85%",

},'sct-3')
tl9.to(".c-one",{
    marginTop:"-200%",
},'sct-3')


// Dark ke 3 Features Ends 

// Horizontal Scroll Starts 
var tl20=gsap.timeline({
  scrollTrigger: {
      trigger: ".horizontal-scroll-div",
      start: "50% 50%",
      end: "220% 50%",
      scrub: true,
      // markers: true,
      pin:true,
    },
})
tl20.to(".horizontal-scroller",{
  translate:"-235vw",
},'sct-3')
// Horizontal Scroll Ends 