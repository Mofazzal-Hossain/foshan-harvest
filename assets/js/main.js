jQuery(document).ready(function($) {
    // hamburger
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        logoliststyle = $('.logolist'),
        aheader = $('.headerwrap'),
        isClosed = false;

    trigger.click(function() {
        hamburger_cross();
    });

    // close menu
    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
            logoliststyle.removeClass('is-open');
            aheader.removeClass('is-open');
            $(".sidebar-nav").removeClass("sidebar-nav-open");
            $(".xl").slideUp();
            $(".sj").removeClass("sjrotate");
            $("a").removeClass("activ");
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            logoliststyle.addClass('is-open');
            aheader.addClass('is-open');
            isClosed = true;
            $(".sidebar-nav").addClass("sidebar-nav-open");
        }
    }

    // toggle class
    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });

    // sidebar nav menu
    $(".sidebar-nav .sidebar-brand>a").click(function() {
        $(this).siblings(".sidebar-nav-two").slideToggle();
        $(this).children().toggleClass("sjrotate").parents(".sidebar-brand").siblings().find(".sj").removeClass("sjrotate");
        $(this).parents(".sidebar-brand").siblings().find(".sidebar-nav-two").slideUp();
        $(this).parent().siblings().find(".xl").slideUp();
        $(this).toggleClass("activ").parent().siblings().find("a").removeClass("activ");
        $(this).parent().siblings().find("a").removeClass("activ02");

    });

      // sidebar nav menu 2
    $(".sidebar-brand-two>a").click(function() {
        $(this).siblings(".sidebar-nav-there").slideToggle().parent().siblings().find(".sidebar-nav-there").slideUp();
        $(this).children().toggleClass("sjrotate").parents(".sidebar-brand-two").siblings().find(".sj").removeClass("sjrotate");
        $(this).toggleClass("activ02").parent().siblings().find("a").removeClass("activ02");
        $(this).parent().siblings().find("a").removeClass("activ02");
        $(this).parent().siblings().find(".xl").slideUp();

    });

      // sidebar nav menu 3
    $(".sidebar-brand-there>a").click(function() {
        $(this).siblings(".sidebar-nav-four").slideToggle().parent().siblings().find(".sidebar-nav-four").slideUp();
        $(this).children().toggleClass("sjrotate").parents(".sidebar-brand-there").siblings().find(".sj").removeClass("sjrotate");
        $(this).toggleClass("activ02").parent().siblings().find("a").removeClass("activ02");
        $(this).parent().siblings().find("a").removeClass("activ02");
    });


    // header add class
    var width = document.documentElement.clientWidth
    if (width > 960) {
      $('.mh-header-wrapper').addClass('active')
    }


    // header scroll
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var sheight = $('.banner-swiper').height();
        if (width > 960) {
          if (t >= sheight - 700) {
            $('.mh-header-wrapper').removeClass('active')
          } else {
            $('.mh-header-wrapper').addClass('active')
          }
        }
    }

    // banner slider
    const mySwiper = new Swiper('#bannerSwiper', {
        loop: true,
        speed: 3000,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
  
    });
    // bottom slider
    var bottomSwiper = new Swiper('.bottom-swiper', {
        spaceBetween: 50,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideThumbActiveClass: "my-slide-thumb-active",
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
         
        },
    });

    // top slider
    var topSwiper = new Swiper('.top-swiper', {
        spaceBetween: 50,
        loop: true,
        speed: 4000,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
    
        thumbs: {
          swiper: bottomSwiper
        },
    });

    // aos animation
    AOS.init({
        easing: 'ease-out-expo',
        duration: 1200,
        once: false,
        disable: window.innerWidth < 960
    });

    $('.news-content .item-box .item').hover(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
  
    $('.news-content .item-box .item').hover(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })

});