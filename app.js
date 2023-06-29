gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});

var avatar=document.getElementById('avatar');
avatar.addEventListener('mousemove',(event)=>{
    let xpos=event.clientX/window.innerWidth;
    let ypos=event.clientY/window.innerHeight;
    gsap.to(avatar,{
        duration:0.5,
        rotationY: -(xpos - 0.5) * 40,
        stagger:0.055,
    })
})


const image = document.querySelector('.image');


image.style.opacity = 0;

// create a timeline for the animation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: image,
    start: "top center",
  }
});


tl.to(image, {opacity: 1, duration: 4});
window.addEventListener("mousemove", function(chahcha){
    document.querySelector("#slidephoto").style.top=`${chahcha.clientY}px`
    document.querySelector("#slidephoto").style.left=`${chahcha.clientX}px`
    document.querySelector("#slidephoto").style.transform =`translate(${-chahcha.clientX*0.20}px, ${-chahcha.clientY*0.45}px)`
});

// select the image element
const img = document.querySelector('.skill');

// hide the image initially
img.style.opacity = 0;

// create a timeline for the animation
const t = gsap.timeline();

// add animation to the timeline
t.to(img, {opacity: 1, x: 0, duration: 2});

// initialize ScrollTrigger
ScrollTrigger.create({
  animation: t,
  trigger: img,
  start: "top center",
});

document.querySelector("#first")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#first").style.color = "white"
})

document.querySelector("#first")
.addEventListener("mouseleave", function(){
    document.querySelector("#first").style.color = "initial"
})

document.querySelector("#sec")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-120%"
    document.querySelector("#sec").style.color = "white";
})

document.querySelector("#sec")
.addEventListener("mouseleave", function(){
    document.querySelector("#sec").style.color = "initial"
})

document.querySelector("#third")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-240%"
    document.querySelector("#third").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#third")
.addEventListener("mouseleave", function(){
    document.querySelector("#third").style.color = "initial"
})

document.querySelector("#tapso")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-360%"
    document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#tapso")
.addEventListener("mouseleave", function(){
    document.querySelector("#tapso").style.color = "initial"
})

document.querySelector("#eff")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephoto").style.display = "initial"
    document.querySelector("#slidephoto").style.opacity = 1
})

document.querySelector("#eff")
.addEventListener("mouseleave", function(){
    document.querySelector("#slidephoto").style.display = "none"
    document.querySelector("#slidephoto").style.opacity = 0
})


document.querySelector("#btnsm")
.addEventListener("mousemove", function(){
    document.querySelector("#btnsm").style.backgroundColor = "blue"
    document.querySelector("#btnsm").style.cursor = "pointer"
    document.querySelector("#btnsm h1").style.color = "white"
})

document.querySelector("#btnsm")
.addEventListener("mouseleave", function(){
    document.querySelector("#btnsm").style.backgroundColor = "initial"
    document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"

})

