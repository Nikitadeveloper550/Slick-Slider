$(document).ready(function () {
  $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      dotclass:'customize-dots',
      responsive: [
        {
          breakpoint: 1047,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
             dotclass:'customize-dots'
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
             dotclass:'customize-dots'
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             dotclass:'customize-dots'
          }
        }
      ]
  });
});


 $(document).ready(function () {
$('.slick2').slick({
  centerMode: true,
  dots:true,
  arrows:false,
  dotsclass:'slick2-dots',
  centerPadding: '60px',
  slidesToShow: 1.58,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});


$(document).ready(function () {
  $('.customer-review').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('#prev-arrow'),
    nextArrow: $('#next-arrow'),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1
        }
      }
    ]

  });
});
