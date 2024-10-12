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

