function myFunction() {
    document.getElementById("display-trigger-fuel").style.display = "block";
    document.getElementById("display-trigger-iCNG").style.display = "none";
    document.getElementById("display-trigger-elec").style.display = "none";
    
  }

// function myFunction2() {
//     document.getElementById("display-trigger-fuel").style.display = "none";
//     document.getElementById("display-trigger-iCNG").style.display = "block";
//     document.getElementById("display-trigger-elec").style.display = "none";
//   }
// function myFunction3() {
//     document.getElementById("display-trigger-fuel").style.display = "none";
//     document.getElementById("display-trigger-iCNG").style.display = "none";
//     document.getElementById("display-trigger-elec").style.display = "block";
//   }

//   For Fuel Sectionp Start
var tl=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-1",
        start: "00% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(202, 172, 124)",
    // skewX:0,

  },'fuel');
  

var tl2=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-2",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(210, 201, 36)",
    // skewX:0,

  },'fuel');
var tl3=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-3",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(38, 24, 102)",
    // skewX:0,

  },'fuel');
var tl4=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-4",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(185, 165, 147)",
    // skewX:0,

  },'fuel');
var tl5=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-5",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(160, 127, 82)",
    // skewX:0,

  },'fuel');
var tl6=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-6",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(24, 100, 179)",
    // skewX:0,

  },'fuel');
var tl7=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-7",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(24, 100, 179)",
    // skewX:0,

  },'fuel');
var tl8=gsap.timeline({
    scrollTrigger: {
        trigger: ".car-box-8",
        start: "0% 50%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    },
})
.to(".display-trigger-fuel .cars-area", {
    backgroundColor:"rgb(0, 40, 111)",
    // skewX:0,

  },'fuel');
//   For Fuel section Ends






  
  
  
  
  
  
  
  
  
  
  // Dark Section Ends



// Dark section bottom part 2 Ends 

// Dark ke 3 Features Starts 


// Test Ride



var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("modal"); // Assuming the modal has an ID "modal"

var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("modal"); // Assuming the modal has an ID "modal"
var modalContent = document.getElementsByClassName("modal-content")[0]; // Assuming modal content has the class "modal-content"

// Function to disable scrolling
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// Function to enable scrolling
function enableScroll() {
  document.body.style.overflow = "auto";
}

btn.onclick = function () {
  modal.style.display = "block";
  disableScroll(); // Disable scrolling when the modal is opened
};

span.onclick = function () {
  modal.style.display = "none";
  enableScroll(); // Enable scrolling when the modal is closed
};

window.onclick = function (event) {
  if (event.target === modal) { // If click is outside the modal content
    modal.style.display = "none";
    enableScroll(); // Enable scrolling if modal is closed
  }
};






// 




const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');

hamburger.addEventListener('click', () => {
  navItems.classList.toggle('active');
});