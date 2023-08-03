let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  const slides = document.getElementsByClassName('slide');
  const buttons = document.getElementsByTagName('button');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  slides[index].style.display = 'block';
  buttons[index].classList.add('active');
  slideIndex = index;
}

function changeSlide(n) {
  slideIndex += n;
  const slides = document.getElementsByClassName('slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

let slideIndexSLE = 0;
showSlideSLE(slideIndexSLE);

function showSlideSLE(index) {
  const slides = document.getElementsByClassName('slide-SLE');
  const buttons = document.getElementsByTagName('button');

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Remove active class from all buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active-SLE');
  }

  // Show the selected slide and set the corresponding button as active
  slides[index].style.display = 'block';
  buttons[index].classList.add('active-SLE');
  slideIndexSLE = index;
}

function changeSlideSLE(n) {
  slideIndexSLE += n;
  const slides = document.getElementsByClassName('slide-SLE');
  if (slideIndexSLE >= slides.length) {
    slideIndexSLE = 0;
  } else if (slideIndexSLE < 0) {
    slideIndexSLE = slides.length - 1;
  }
  showSlideSLE(slideIndexSLE);
}

let slideIndexOSR = 0;
showSlideOSR(slideIndexOSR);

function showSlideOSR(index) {
  const slides = document.getElementsByClassName('slide-OSR');
  const buttons = document.getElementsByTagName('button');

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Remove active class from all buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active-OSR');
  }

  // Show the selected slide and set the corresponding button as active
  slides[index].style.display = 'block';
  buttons[index].classList.add('active-OSR');
  slideIndexOSR = index;
}

function changeSlideOSR(n) {
  slideIndexOSR += n;
  const slides = document.getElementsByClassName('slide-OSR');
  if (slideIndexOSR >= slides.length) {
    slideIndexOSR = 0;
  } else if (slideIndexOSR < 0) {
    slideIndexOSR = slides.length - 1;
  }
  showSlideOSR(slideIndexOSR);
}

document.addEventListener('mousemove', function (e) {
    const loupe = document.getElementById('loupe');
    const slideshowContainer = document.querySelector('.slideshow-container-SLE');
    const rect = slideshowContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
  
    loupe.style.left = offsetX + 'px';
    loupe.style.top = offsetY + 'px';
  
    const slide = document.getElementsByClassName('slide-SLE')[slideIndexSLE];
    const img = slide.querySelector('img');
    loupe.innerHTML = `<img src="${img.src}" alt="Loupe Image">`;
  });
  
