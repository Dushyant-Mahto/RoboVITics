const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const toggles = document.querySelectorAll('.faq-toggle')
const items = document.querySelectorAll('.accordion button');


toggles.forEach(toggle => {
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
})

//FAq

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

// Ask a doubt
function fun() {
  var a = prompt("Enter some text", "the javatpoint.com");
  if (a != null) {
  document.getElementById("para").innerHTML = "We got your Question, Thanks!";
  // document.getElementById("para").innerHTML = "Click the above button to ask more questions";
  }
  }

  // carousal
  const cSlide = document.querySelector('.carousel-slide');
const cImages = document.querySelectorAll('.carousel-slide img');



//buttons

const prevbtn = document.querySelector('#btnPrev');
const nextbtn = document.querySelector('#btnNext');


///Counter

let counter = 1;
const size = cImages[0].clientWidth;   //returns the original width of the image 


cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';   // - sign to move the image to the right one

//button listeners

 nextbtn.addEventListener('click', () => {                   //()=> means function()
 	if(counter >= cImages.length - 1) return;		// not adding it causes the slides to go blank after finishing

 	cSlide.style.transition = "transform 1s ease-in-out";       //will move 1 second slower

 	counter++;
 	// console.log(counter);
 	cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 });

 prevbtn.addEventListener('click', () => {                   //()=> means function()
 	
 	if(counter <= 0) return;                              // not adding it causes the slides to go blank after finishing
	cSlide.style.transition = "transform 1s ease-in-out";       //will move 1 second slower

 	counter--;
 	// console.log(counter);
 	cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 });

 cSlide.addEventListener('transitionend', () => {                   // this function works when the lastclone picture is in container,
 																		//	 ends the transition and  -2 moves the picture from last clone
 																		//  to 2nd last meaning from photo no (-1) TO 6 whithin 7 pics
 																		// (-1) => (7) => (6) 

 	// console.log('Fired');

 	if (cImages[counter].id === 'lastClone'){
 		cSlide.style.transition = "none";
 		counter = cImages.length - 2 ;
 		cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 	}


 	if (cImages[counter].id === 'firstClone') {
 		cSlide.style.transition = "none";
 		counter = cImages.length - counter ;										// -counter minuses the previous length(counter) from 
 																					// total mage length
 		cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 	}

 });