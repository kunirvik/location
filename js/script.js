
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
    "(max-width: 799px)": function() {

      let tl667 = gsap.timeline({
      
        scrollTrigger:{
        trigger:"#c",
        start: "top",
        scrub: 1,
        end: "200vh ",
        
        
      
        }
      });
   
         
        tl667.to("#c", {  
       y:-325,
       x:0,
        scale: 0.1,
 
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

"(max-width: 799px)": function() {
    
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
    "(max-width: 799px)": function() {
    
      let tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: ".video01",
          start: "-80px",
       end:"1900px",
       pin:  true,
       
        
      
        }
  });
  tl11.from(".video01", { y:100,   } );
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
  "(max-width: 799px)": function() {
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video02",
        start: "-80px",
     end:"1550px",
     pin:  true,
   
      
    
      }
    });
  
  
    tl2.from(".video02", { y:300, opacity:0, } );
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
  "(max-width: 799px)": function() {
    
    let tl2 = gsap.timeline({
      
      scrollTrigger: {
        trigger: ".video03",
        start: "-80px",
        end:"1500px",
     pin:  true,
      
      
    
      }
    });
  
  
    tl2.from(".video03", { y:300,opacity:0,  } );
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
"(max-width: 799px)": function() {
    
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
    start: "-300px",
    end: "clamp(2000vh)",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl5.from(".description", {y:700, duration:1.5, scale: 0});

  },
  "(max-width: 799px)": function() {
    
    let tl208 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "-650vh",
   
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
    start: "-425px",
    end: "clamp(2000vh)",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl55.from(".description2", {y:700, duration:1.5 });
},
"(max-width: 799px)": function() {
    
  let tl2081 = gsap.timeline({
    scrollTrigger: {
      trigger: ".description2",
      start: "-650vh",

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
    start: "-550px",
    end: "clamp(505vh)",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl555.from(".description3", {y:700, duration:1.5 });

  },

  "(max-width: 799px)": function() {
    
    let tl228 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description3",
        start: "-650vh",
     
        pin:  true,
       
      
    
      }
    });
  
  
    tl228.from(".description3", {x:500, opacity:0, scale:0, } );
      },

});
}