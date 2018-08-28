// $(window).load(function() {
//     
// });
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        dots: true,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'onDemand',
    });
});

function sliderInit() {
    let slider = document.querySelector('.slider');
    slider.classList.add('visible');
}

window.onload = sliderInit();