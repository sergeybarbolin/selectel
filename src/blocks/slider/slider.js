$(window).load(function() {
    $('.slider').css('visability', 'visible');
});
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

