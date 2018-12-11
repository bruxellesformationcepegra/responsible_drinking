// MyBurgerMenu 🍔
$('.burger-menu').click(function () { 
    $(this).add('.main-nav').toggleClass('active');
});

// Effet de disparition/apparition 👻
let hauteurHeader = $('.header').outerHeight();
$(window).scroll(function () {
    let scrollActuel = $(window).scrollTop();
    if (scrollActuel > hauteurHeader) {
        $('.burger-menu').addClass('fixed');
    } else {
        $('.burger-menu').removeClass('fixed');
    }
});

// Smooth Criminal 🕺 
$('a[href^="#"]').click(function () {
    $('.main-nav, .burger-menu').toggleClass('active');
        $(this).each(function () {
            let destination = $(this).attr("href").replace("#", "");
            let distance = $('[id="' + destination + '"]').offset().top;
            $("html, body").animate({
                scrollTop: distance
            }, {
                    duration: 1000,
                    easing: 'easeOutCirc',
                });
            return false;
        });
});

