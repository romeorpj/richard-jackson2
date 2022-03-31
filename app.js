// TODO: GSAP STUFF
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults:{ease: "power1.out"}});

tl.to(".text",{y:"0", duration:1, stagger:0.25});
tl.to(".slider",{y:"-100%", duration: 1.5,delay:0.5});
tl.to(".intro",{y:"-100%",duration:1}, "-=.8");

function init(){
    gsap.to(".developer", {x: 200,scrollTrigger: {
        trigger: ".developer",
            scrub: .8
        }})
    gsap.to(".fullstack", {x: -100,scrollTrigger: {
            trigger: ".fullstack",
            scrub: .2
        }})
}

// TODO: DOM STUFF
// Global Variables
// let imageContainer = document.querySelector(".image-containers");
// let projectTitle = document.querySelector(".project-title");
let contactEmail = document.querySelector(".contact-email");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
let mouseCursor = document.querySelector(".cursor");
let introSwitcher = document.querySelector(".intro-switcher");

let developer = document.querySelector(".developer");
// TODO: FUNCTION CALLS
setInterval(changeIntroText,3500)

// TODO: FUNCTION DEFINITIONS
// Hero text changer
function changeIntroText() {
    let introText = ["apps","sites","experiences"];
    introSwitcher.textContent = `${introText[Math.floor(Math.random() * 3)]}`
}

//navbar event
let animateLinks = ()=>{
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
}

//Copy text to clipboard
async function clickToGetText()
{await navigator.clipboard.writeText("richard.p.jackson2@gmail.com");}

//Cursor image follow
function cursor(e){
mouseCursor.style.top = `${e.pageY}px`;
mouseCursor.style.left = `${e.pageX}px`;
}

//Turn hero text purple
// function turnLettersPurple(event){
//     let fullstack = document.querySelector(".fullstack");
//    return fullstack.split()
//
// }


// TODO: eventlisteners

//click to copy email
contactEmail.addEventListener("click", clickToGetText);
//animates nav links
hamburger.addEventListener('click', animateLinks);
//cursor animation
// window.addEventListener("mousemove", cursor)
// window.addEventListener('DOMContentLoaded', turnLettersPurple);
window.addEventListener('load', function(){
    init();
});