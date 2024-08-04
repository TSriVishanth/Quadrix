//HEADER JS
const header = document.querySelector("header");
let lastScroll = 0;

const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};

const validateHeader = () => {
  const windowY = window.scrollY;
  const windowH = window.innerHeight;
  if (windowY > windowH) {
    // We passed the first section, set a toggable class
    header.classList.add("header-top");
    // Determine is we ready to animate
    if (windowY > windowH + 40) {
      header.classList.add("header-top");
      if (windowY < lastScroll) {
        // Determine if we scrolling up
        header.classList.add("scroll-up");
      } else {
        header.classList.remove("scroll-up");
      }
    } else {
      header.classList.remove("scroll-up");
    }
  } else {
    header.classList.remove("header-top", "header-top");
  }
  lastScroll = windowY;
};

window.addEventListener("scroll", throttle(validateHeader, 100));


// header scroll
const navbar = document.getElementsByClassName('header')[0];

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 70) {
    navbar.classList.add("header-bg");
  } else {
    navbar.classList.remove("header-bg")
  }
}

// Use the function
window.addEventListener('scroll', onScroll)




// SIDEBAR

function sideBar() {
  var element = document.getElementById("sideBar");
  element.classList.toggle("sidebaropen");
}

// DROP--DOWN
// function drpdown() {
//   var element = document.getElementById("drpshow");
//   element.classList.add("dropopen");
// }


// gsap script

// gsap.fromTo(".particleseven .part1", {y:0,}, {  y:1000, x:-100,  duration:5,  repeat: -1,   repeatDelay: 0,  yoyo: true, ease:Circ.easeOuteaseOut});
// gsap.fromTo(".particles span",{y:0,}, {  y:20,  duration:2,  repeat: -1,  repeatDelay: 0,  yoyo: true,});


// SCROLL TRIGER SCRIPT

// gsap.from(".Best", {
//   scrollTrigger: {
//     trigger: ".Best",
//     start: "top 80%",
//     end: "end 70%",
//     scrub: 2,
//   },
//   x: 300,
//   duration: 1,
//   opacity: 1,
// }
// );

// gsap.fromTo(".Best", {
//   opacity: 0,
// }, {
//   opacity: 1,
//   duration: 1,
//   repeat: -1,
//   repeatDelay: 1,
//   yoyo: true,
// });


// PARTICLES

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#tesla-car",
    start: "top center",
    end: "bottom center",
    toggleClass: "active",

    scrub: 2,

  },
});

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#tes",
    start: "top center",
    end: "bottom center",
    toggleClass: "active",

    scrub: 2,

  },
});




document.addEventListener("DOMContentLoaded", function (event) { // <-- add this wrapper
  var element = document.querySelectorAll('.percen');

  if (element) {

    element.forEach(function (el, key) {

      el.addEventListener('click', function () {
        console.log(key);

        el.classList.toggle("active");

        element.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove('active');
          }
          console.log(els);
        });
      });
    });
  }
});




// DROP--DOWN-REMOVE
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");
}


// PROGRESS

// const progress = document.querySelector('.progress-done');
// setTimeout(() => {
//   progress.style.opacity = 1;
//   progress.style.width = progress.getAttribute('data-done') + '%';
// }, 500)


// SET TIME OUT




const box = document.querySelector(".box")
let lastTime
function playAnimation(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    box.style.left = `${parseFloat(box.style.left) + delta * .1}%`

    if (parseFloat(box.style.left) >= 100) {
      box.style.left = 0
    }
  }

  lastTime = time
  window.requestAnimationFrame(playAnimation)
}
window.requestAnimationFrame(playAnimation)