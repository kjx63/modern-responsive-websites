jQuery(document).ready(() => {
    "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
    });

    var typed = new Typed('.text', {

        strings: ["<strong>I love </strong>to learn <strong class='primary'> anything. </strong>", "<strong>And </strong><strong class='primary'> Share.</strong>"],
        typeSpeed: 50,
        loop: true

    });

    $(window).scroll(function() {

        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        } else
        if ($("nav").hasClass('secondary')) {
            $("nav").removeClass('secondary');
        }
    });

    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    $(".owl-carousel").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('a.smooth-scroll').click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 2
        }, 1250, "easeInOutExpo");
    });

    new WOW().init();

});