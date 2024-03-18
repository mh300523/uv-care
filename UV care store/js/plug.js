$(document).ready(function () {
 
    
    $(window).on('load', function () {
        $('.pre-loader').fadeOut("500", function () {
            $(this).remove();
            $("body").removeClass("overflow");
        });
    });
  
    ///////// **mobile size** /////////
    
    $('#navbtn').click(function(){
		$('.main_nav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('.main_nav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});


    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main_slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    },
    speed: 500,
    updateOnWindowResize: true,
    
        
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
    var banners = new Swiper('.bans_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.bans_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bans_slider .swiper-button-next',
            prevEl: '.bans_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    
    
  });  

