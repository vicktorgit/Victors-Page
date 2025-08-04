//   toggle icon navbar

  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
})
  )




// Typed Js
const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer','Sign language Interpreter ','AI Enthusiast','Budding Entrepreneur'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}); 





let greet = document.querySelector(".greet");
let timeNow = new Date().getHours();
// timeNow = 7;
// console.log(timeNow);

let greeting = 
timeNow >=5 && timeNow < 12 
? "Good Morning"
: timeNow >=12 && timeNow < 18 
? "Good Afternoon" 
: "Good Evening";
// console.log(greeting);
greet.innerHTML = `<h3> ${greeting}</h3>`


// toggle icon navbar
// Dark Mode Trial



const Darkbut = document.getElementById("but");
console.log(Darkbut);








// // ORIGINAL ONE
// Darkbut.addEventListener("click",() => {
// // document.body.style.backgroundColor = "green";
// if (document.body.style.backgroundColor === "white"){
//   alert("You are about to change to dark mode");
//   // document.header.style.backgroundColor = "blue"
//   // document.body.style.backgroundColor = " rgb(8,22,45)"
//   document.body.style.backgroundColor = " #002868"
//   Darkbut.innerText = "Turn Light mode";
// }
// else{
//  document.body.style.backgroundColor = "blue";
//  alert("You are about to change to light mode")
//  Darkbut.innerText = "Dark Mode";
//  document.body.style.backgroundColor = "white";
// }

// });





Darkbut.addEventListener("click",() => {
  // document.body.style.backgroundColor = "green";
  if (document.body.style.backgroundColor == "grey"){
    alert("You are about change mode")
  document.body.style.backgroundColor = "white";
  Darkbut.innerText = "ON Dark Mode";
  
}
  else{
    alert("You Are about to change  mode");
    document.body.style.backgroundColor = "white"
    document.body.style.backgroundColor = "grey";
    Darkbut.innerText = " ON Light mode";
  }
  
  });






