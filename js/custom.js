$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
});


$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });


    const mainNoticeSlide = new Swiper('.main_notice_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_notice .arrows .next',
            prevEl: '.main_notice .arrows .prev',
        },

        pagination: {
            el: '.main_notice_slide .page',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
        },


    })
});


$(function () {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});

$(function () {
    AOS.init();
});

// 모바일

$(function () {
    $('#header .moblie_btn').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            //$('#header .gnb>ul>li ul').slideUp();
            $(this).next().slideDown().parent().siblings().find('ul').slideUp();
        }

    });

    $(window).on('scroll', function () {
        if ($('#header .gnb').hasClass('on')) {
            $('#header').removeClass('on')
        }
    })

    $(window).on('resize', function () {
        $('#header .gnb').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style')
    })
})