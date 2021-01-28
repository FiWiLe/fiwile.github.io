$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow__left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow__right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
  });