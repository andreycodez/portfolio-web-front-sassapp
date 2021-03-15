$(window).scroll(function() {
    let viewPortWidth = $(window).width()
    let scroll = $(window).scrollTop();
    if (viewPortWidth >= 1024) {
        if (scroll >= 800) {
            $('#img-movable').addClass("appear-on-scroll");
        }
        if (scroll >= 2900) {
            $('.pricing-info').addClass("animated-pricing");
        }
    }
    if (scroll >= 600) {
        $('#sticky-header').addClass("main-grid-sticky-header");
        $('#header-extender-on-roll-out').addClass("header-extender");
        $('#sticky-header').removeClass("header-close");
        $('#backToTopButton').removeClass('invisible');
        $('#backToTopButton').removeClass('back-to-top-button-close');
        $('#backToTopButton').addClass('back-to-top-button-open');
    } else if ((scroll < 600) && (scroll >= 200)) {
        $("#sticky-header").addClass("header-close");
    } else {
        $("#sticky-header").removeClass("main-grid-sticky-header");
        $("#header-extender-on-roll-out").removeClass("header-extender");
        $("#sticky-header").removeClass("header-close");
        $('#backToTopButton').removeClass('back-to-top-button-open');
        if (!($('#backToTopButton').hasClass('invisible'))) {
            $('#backToTopButton').addClass('back-to-top-button-close');
        }
    }

    if (viewPortWidth >= 720) {
        if (scroll >= 600) {
            $("#top-link-home").removeClass("active");
        } else {
            $("#top-link-home").addClass("active");
        }
        if ((scroll > 599) && (scroll <= 1700)) {
            $("#top-link-features").addClass("active");
        } else {
            $("#top-link-features").removeClass("active");
        }
        if ((scroll > 1699) && (scroll <= 3370)) {
            $("#top-link-learn").addClass("active");
        } else {
            $("#top-link-learn").removeClass("active");
        }
        if ((scroll > 3369) && (scroll <= 4020)) {
            $("#top-link-pricing").addClass("active");
        } else {
            $("#top-link-pricing").removeClass("active");
        }
        if (scroll > 4020) {
            $("#top-link-hire-us").addClass("active");
        } else {
            $("#top-link-hire-us").removeClass("active");
        }
    }
});