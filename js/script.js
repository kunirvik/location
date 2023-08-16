
ScrollTrigger.saveStyles(".pusto2, #c, .zagolovok, .video01, .video02, .logotip, .description, .scoot ");

if (ScrollTrigger.isTouch !== 2) {

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
let tl001 = gsap.timeline({

  scrollTrigger:{
  trigger: ".pusto2",
  start: "top top",
  end: "1000px",

  scrub: true,
  }
  
  



});


  tl001.to('#c', {    
    y: -350,
    x: -850,
  
  scale: 0.25,
 
  
});

    },
    "(max-width: 480px)  and (min-height: 500px)": function() {

      let tl667 = gsap.timeline({
    
        scrollTrigger:{
        trigger: "#c",
        start: "top top ",
        scrub:true,
      pin:true,
      
      
        }
        
        
      
      
      
      });
   
      
        tl667.to("#c", {  
       
        duration:1.5,
        scale: 0.35,
       
        
      });
      }

  });

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".zagolovok",
    start: "-260px",
    end: "clamp(4000vh)",
 pin:  true,
    pinSpacing:false,
   
  markers:true,

  }
});


tl2.from(".zagolovok", { x:1500, opacity:0, scale:0, duration:1.5} );
},

"(max-width: 480px) and (min-height: 500px)": function() {
    
  let tl22 = gsap.timeline({
    scrollTrigger: {
      trigger: ".zagolovok",
      start: "-50px",

   
   pin:  true,
  
   pinSpacing:false,
  
    }
  });


  tl22.from(".zagolovok", { opacity:1, scale:1,} );
    },

  });

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video01",
    start: "-200px",
    end: "clamp(4000vh)",
 toggleActions: "play none reset reset",
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl3.from(".video01",{ y:100});
    },
    "(max-width: 480px) and (min-height: 500px)": function() {
    
      let tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: ".video01",
          start: "-50px",
       end:"1900px",
       pin:  true,
       
        
      
        }
  });
  tl11.from(".video01", { y:0, opacity:0, scale:0,  } );
},


});

  
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function() {
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video02",
    start: "-200px",
    end: "clamp(3000vh)",
  
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }

});

tl4.from(".video02", { y:100});
  },
  "(max-width: 480px) and (min-height: 500px)": function() {
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video02",
        start: "-50px",
     end:"1550px",
     pin:  true,
   
      
    
      }
    });
  
  
    tl2.from(".video02", { y:100, opacity:0, scale:0, } );
      },
  
  
});


ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video03",
    start: "-200px",
    end: "clamp(2000vh)",
  
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});

tl8.from(".video03", { y:100});
  },
  "(max-width: 480px) and (min-height: 500px)": function() {
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video03",
        start: "-50px",
        end:"1500px",
     pin:  true,
       
      
    
      }
    });
  
  
    tl2.from(".video03", { y:100, opacity:0, scale:0, } );
      },
  


});

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function() {
let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".logotip",
    start: "-200px",
    end: "clamp(3000vh)",
  
    
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});

tl6.from(".logotip", { y:100});
},
"(max-width: 480px) and (min-height: 500px)": function() {
    
  let tl208 = gsap.timeline({
    scrollTrigger: {
      trigger: ".logotip",
      start: "-600px",
   end:"-500px",
      
    
  
    }
  });


  tl208.to(".logotip", { y:-1000, duration:2.5  } );
    },

});
ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {
let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".description",
    start: "-380px",
    end: "clamp(2000vh)",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl5.from(".description", {y:700, duration:1.5, scale: 0});

  },
  "(max-width: 480px) and (min-height: 500px)": function() {
    
    let tl208 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "-800px",
   
     pin:  true,
       
      
    
      }
    });
  
  
    tl208.from(".description", {
      x:500, opacity:0, scale:0, } );
      },
});

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {
let tl55 = gsap.timeline({
  scrollTrigger: {
    trigger: ".description2",
    start: "-480px",
    end: "clamp(2000vh)",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl55.from(".description2", {y:700, duration:1.5 });
},
"(max-width: 480px) and (min-height: 500px)": function() {
    
  let tl2081 = gsap.timeline({
    scrollTrigger: {
      trigger: ".description2",
      start: "-1000px",

      pin:  true,
     
    
  
    }
  });


  tl2081.from(".description2", { x:500, opacity:0, scale:0, } );
    },
});


ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {

let tl555 = gsap.timeline({
 x:500,
  scrollTrigger: {
    trigger: ".description3",
    start: "-580px",
    end: "clamp(500vh)",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl555.from(".description3", {y:700, duration:1.5 });

  },

  "(max-width: 480px) and (min-height: 480px)": function() {
    
    let tl228 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description3",
        start: "-800px",
     
        pin:  true,
       
      
    
      }
    });
  
  
    tl228.from(".description3", {x:500, opacity:0, scale:0, } );
      },

});
}