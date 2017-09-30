/*

My Custom JS
============


*/
$(document).ready(function () {

    $('.vegas-container').vegas({
        slides: [
            {src: 'images/slider/1.jpg'},
            {src: 'images/slider/2.jpg'},
            {src: 'images/slider/3.jpg'}
        ],
        overlay: 'includes/js/vegas/overlays/06.png'

    });


    $('#slider1').vegas('play');

    //parallax
    $('.parallax-window-header').parallax({
        // naturalWidth: 1920,
        // naturalHeight: 850,
        speed: 0.2
    });

//    bxslider
    slider = $('.bxslider').bxSlider({
        mode: 'vertical',
        // slideMargin: 400,
        pager: false, // отключаем индикатор количества слайдов
        responsive: true,
        controls: false,
        nextSelector: $('.bx-next'),
        prevSelector: $('.bx-prev'),
    });


    $('.bx-next').click(function (e) {
        e.preventDefault();
        slider.goToNextSlide();
    });

    $('.bx-prev').click(function (e) {
        e.preventDefault();
        slider.goToPrevSlide();
    });
});
