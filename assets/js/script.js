(function($) {
    "use strict";

    jQuery(document).ready(function() {
      $('.menu').on('click', function() {
        $('.mobile_nav').toggleClass('on');
        $('body').toggleClass('overflow-hidden');
      });      
      $('.close_menu').on('click', function() {
        $('.mobile_nav').toggleClass('on');
        $('body').toggleClass('overflow-hidden');
      });

      $('.home-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,   
      });  
         
      $('.prod-caro').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]       
      });  

      $(document).ready(function() {
        $('.tabs ul li:first').addClass('active');
        $('.tabs-content:first').show();
        
        $('.tabs ul li').click(function(){
          var tab_id = $(this).attr('data-tab');
    
          $('.tabs ul li').removeClass('active');
          $('.tabs-content').hide();
    
          $(this).addClass('active');
          $("#" + tab_id).fadeIn();
        });
      });

      $('.best_seller_product').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        nextArrow: '<button class="any-class-name-you-want-next">Next</button>',
        prevArrow: '<button class="any-class-name-you-want-previous">Previous</button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]    
      });  

      // filter open
      $('.filter-title').on('click', function(e) {
        $('.filter-list').removeClass('h-full');
        $(this).siblings().toggleClass('h-full');     
      });
      // Set up the slider
      $(document).ready(function() {
        var slider = $("#range");
        var thumb1 = $("#thumb1");
        var thumb2 = $("#thumb2");
  
        // Set initial position of the thumbs
        thumb1.css("left", slider.val() + "%");
        thumb2.css("left", (parseInt(slider.val()) + 25) + "%");
  
        // Update thumbs position as the slider changes
        slider.on("input", function() {
          thumb1.css("left", $(this).val() + "%");
          thumb2.css("left", (parseInt($(this).val()) + 25) + "%");
        });
  
        // Display range when the slider is released
        slider.on("change", function() {
          alert("Selected range: " + $(this).val() + " - " + (parseInt($(this).val()) + 25));
        });
      });

      $(".xzoom, .xzoom-gallery").xzoom({
        tint: '#006699', Xoffset: 15,
      });
     

      // scroll top 
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.scroll-top').addClass('top');
        } else {
          $('.scroll-top').removeClass('top');
        }
      });
      $('.scroll-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
      });

    }); //document ready

}(jQuery));