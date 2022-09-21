const nav = ["მთავარი", "სერვისები", "გალერეა", "კონტაქტი", "ოსტატები"];
const navlinks = ["index.html", "about.html", "gallery.html", "contact.html", "workers.html"];
// nav.push("donate us");
// navlinks.push("donate.html");
let navsigrdze = nav.length;

let navtext = '<ul>';
for(let i=0; i<navsigrdze;i++ ){
    navtext += '<li><a href="'+ '#' + '">' + nav[i] + "</a></li>";
    // console.log(navtext);
}
navtext += "</ul>";
document.getElementById("nav").innerHTML = navtext;


console.log(navtext);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let show = () => {
  document.getElementById
  ("messagebox").style.display = "block";
  document.getElementById ("messagebutton").style.display = "none";
}

let hide = () => {
  document.getElementById
  ("messagebox").style.display = "none";
  document.getElementById ("messagebutton").style.display = "block";
}

