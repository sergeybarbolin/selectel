var slides = document.querySelectorAll('.slider__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider__slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__slide--active';
}

var playing = true;

function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    playing = true;
    slideInterval = setInterval(nextSlide,5000);
}


var next = document.getElementById('nextSlid');
var previous = document.getElementById('prevSlide');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};


