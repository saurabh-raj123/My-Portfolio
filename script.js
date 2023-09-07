var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab')
}

var activelinks=document.getElementsByClassName("active");
function activate(name){
    for(activelink of activelinks){
        activelink.classList.remove("activated");
    }
    event.currentTarget.classList.add("activated");
}

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxC4UOWLaUcp9qqZFV1Sr3sndhHgCS5IBhJZFs36kXiqKMFu3AKoo0WCopPFxgEu6D6/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully" 
        setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})


// src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
// var typed = new Typed(".auto-input", {
//     strings: ["Web Developer", "ML Enthusiast"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     loop: true
// })
