$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $(".mo-modal-overlay").fadeIn(500)
        $(".mo-modal").addClass("mo-modal-in");
    });
});
$(document).ready(function () {
    new WOW().init();
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $(".mo-bannerpop-overlay").fadeIn(500)
        $(".mo-bannerpop").addClass("mo-bannerpop-in");
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $(".mo-bannerpop-overlay").fadeIn(500)
        $(".mo-bannerpop").addClass("mo-bannerpop-in");
    });

    $('.mo-bannerpop-overlay').click(function () {
        $(".mo-bannerpop-overlay").fadeOut(400);
        $(".mo-bannerpop").removeClass("mo-bannerpop-in");
        $("body").removeClass("overflow")
    });
    $('.mo-bannerpop').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-bannerpop-close').click(function () {
        $(".mo-bannerpop-overlay").fadeOut(400);
        $(".mo-bannerpop").removeClass("mo-bannerpop-in");
        $("body").removeClass("overflow")
    });
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        effect: 'fade',
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    //////////** main slider **//////////
    var newArrivalswiper = new Swiper('.newArrival .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.newArrival .swiper-button-next',
            prevEl: '.newArrival .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        },
    });
    //////////** search **//////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusout();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    //////////** menu **//////////
    if ($(window).width() <= 991) {
        $('.drop-li .nav-a').click(function () {
            $(".drop-li .nav-a").not(this).removeClass("open");
            $(this).toggleClass("open");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".drop-li .nav-a").not(this).siblings().slideUp(500);
        })



        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").toggleClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
    }

});