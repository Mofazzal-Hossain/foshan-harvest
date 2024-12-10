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
    $bannerSwiper = $('.banner-swiper');
    if($bannerSwiper.length > 0) {
        var width = document.documentElement.clientWidth
        if (width > 960) {
          $('.mh-header-wrapper').addClass('active')
        }
        // header scroll
        window.onscroll = function () {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            var sheight = $bannerSwiper.height();
            if (width > 960) {
              if (t >= sheight - 700) {
                $('.mh-header-wrapper').removeClass('active')
              } else {
                $('.mh-header-wrapper').addClass('active')
              }
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

    // on hover effect 
    $('.news-content .item-box .item').hover(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
   // on hover effect 
    $('.news-content .item-box .item').hover(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    // smooth scroll when click on link
    $('a[href*="#"]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 600);
    });

    // a swiper
    var aSwiper = new Swiper('.qualifications-wrapper .aSwiper', {
        spaceBetween: 21,
        slidesPerView: 4,
        loop: true,
        speed: 4000,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        pagination: {
          el: '.qualifications-wrapper .swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1000: {  
            spaceBetween: 21,
            slidesPerView: 4,
          },
          960: { 
            spaceBetween: 10,
            slidesPerView: 2,
          },
        },
    });

    AMapLoader.load({
      key: "8d28a4794709a8da2e032edcef64a426",
      version: "1.4.15",
    }).then((AMap) => {

      const map = new AMap.Map('map', {
        viewMode: '2D',
        zoom: 14,
        center: [113.17, 22.91],
        lang: "en",
        zoomEnable: false,
        dragEnable: true,
      });

      const icon = new AMap.Icon({
        size: new AMap.Size(40, 50),
        image: 'assets/images/map.png',

        imageSize: new AMap.Size(20, 27)
      });
      const marker = new AMap.Marker({
        position: new AMap.LngLat(113.17, 22.91),
        icon: icon,
      });

      var info = [];
      info.push(`<h4 class='c-map-h4'>Foshan Harvest Electric Appliance Co.,Ltd</h4>`);
      info.push(`<p class='c-map-p'>address：No. 3 Longyong Industrial Avenue, Beijiao Town, Shunde District, Foshan City</p></div></div>`);
      infoWindow = new AMap.InfoWindow({
        content: info.join(""),
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, -40)
      });
      infoWindow.open(map, map.getCenter());
      map.add(marker);
    })

    var pdSwiper = new Swiper('.pdSwiper', {
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
      // effect: 'fade',
    });

});