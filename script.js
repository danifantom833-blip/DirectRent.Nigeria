// Smooth fade in on scroll
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

document.querySelectorAll(".feature-box,.hero-left,.hero-right,.stats div").forEach((el)=>{
el.classList.add("hidden");
observer.observe(el);
});


// Animated counter
const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {
let update = () => {
let target = counter.innerText.replace(/\D/g,'');
let count = +counter.getAttribute("data-count") || 0;
let increment = target / 80;

if(count < target){
count += increment;
counter.setAttribute("data-count", count);
counter.innerText = Math.ceil(count) + counter.innerText.replace(/[0-9]/g,'').replace(/\+/g,'');
setTimeout(update,20);
}else{
counter.innerText = counter.innerText;
}
};

update();
});


// Button click effects
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.style.transform="scale(.95)";
setTimeout(()=>{
btn.style.transform="";
},150);
});
});


// Floating title pulse
setInterval(()=>{
document.title = "🏠 DirectRent Nigeria";
setTimeout(()=>{
document.title = "DirectRent Nigeria";
},1000);
},3000);


// Fake loading transition
window.addEventListener("load",()=>{
document.body.classList.add("loaded");
});

function toggleMenu(){
document.getElementById("navMenu").classList.toggle("active");
}

// Search Demo
function searchHomes(){
alert("Searching available homes and projects...");
}

// Senior Mode Toggle
function toggleSeniorMode(){
document.body.classList.toggle("senior-mode");
}

// Language Demo
function changeLanguage(lang){

if(lang === "Yoruba"){
alert("E kaabo si DirectRent Nigeria");
}

else if(lang === "Hausa"){
alert("Barka da zuwa DirectRent Nigeria");
}

else if(lang === "Igbo"){
alert("Nnọọ na DirectRent Nigeria");
}

else{
alert("Welcome to DirectRent Nigeria");
}

}

// Save Home
function saveHome(){
alert("Property saved to favorites ❤️");
}

// Book Inspection
function bookInspection(){
alert("Inspection booked successfully 📅");
}

// Contact Owner
function contactOwner(){
alert("Connecting you to landlord now 📞");
}

// Report Scam
function reportScam(){
alert("Listing reported. Our trust team will review 🚨");
}

// Developer Actions
function investNow(){
alert("Investment request submitted successfully 💰");
}

function meetDeveloper(){
alert("Connecting you with project developer 📞");
}

// ROI Calculator
function calculateROI(){

let amount = document.getElementById("roiInput").value;

if(amount === "" || amount <= 0){
document.getElementById("roiResult").innerHTML = "Enter valid amount";
return;
}

let roi = amount * 1.35;

document.getElementById("roiResult").innerHTML =
"Projected Return: ₦" + Number(roi).toLocaleString();

}

// Partnership Form
function submitPartnership(){
alert("Thank you. Your partnership request has been received 🤝");
}

// Loader
window.addEventListener("load", function(){
setTimeout(()=>{
document.getElementById("loader").classList.add("hide");
},1200);
});

// Floating CTA
function quickApply(){
alert("Thank you for your interest. Download coming soon 📲");
}

// Fake App Download
function downloadApp(){
alert("DirectRent Nigeria mobile app launching soon 🚀");
}

// Smooth button pop
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("mouseenter",()=>{
btn.style.transform="translateY(-3px)";
});
btn.addEventListener("mouseleave",()=>{
btn.style.transform="";
});
});

// Mobile Menu Toggle
function toggleMenu(){
const nav = document.getElementById("navMenu");
if(nav){
nav.classList.toggle("active");
}
}

// Highlight Current Page Link
document.addEventListener("DOMContentLoaded", function(){

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {

let href = link.getAttribute("href");

if(href === currentPage){
link.classList.add("active-link");
}

});

});

// Smooth Scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click", function(e){
e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}
});
});

// Count-up animation for stats
function animateCounters(){

document.querySelectorAll(".stats h3").forEach(counter=>{

let finalText = counter.innerText;
let number = parseInt(finalText.replace(/[^0-9]/g,'')) || 0;

if(number === 0) return;

let count = 0;
let step = Math.ceil(number / 60);

let timer = setInterval(()=>{

count += step;

if(count >= number){
count = number;
clearInterval(timer);
}

counter.innerText = finalText.replace(/[0-9]+/, count);

},30);

});

}

window.addEventListener("load", animateCounters);

// Auto close mobile menu after click
document.querySelectorAll("#navMenu a").forEach(link=>{
link.addEventListener("click", ()=>{
document.getElementById("navMenu").classList.remove("active");
});
});

// Welcome effect
window.addEventListener("load", ()=>{
setTimeout(()=>{
console.log("DirectRent Nigeria Ready");
},1500);
});

// Professional Toast Message
function showToast(message){

const toast = document.getElementById("toast");

if(!toast) return;

toast.innerText = message;
toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},2500);

}