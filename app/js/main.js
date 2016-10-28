 $(document).ready(function() {
     
  // var  oc_w = $(window).width();
  // var  oc_c = $('.content').width();
  // var  oc= oc_w - oc_c
        

     
     
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});
     
     
$('.center').slick({
  centerMode: true,
  centerPadding: '640px',
  slidesToShow: 1,
  responsive: [
      
      
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1
      }
    }, 
      
      
      
      
    {
      breakpoint: 1850,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1
      }
    },
            
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
      
      
      
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});    
     
     
});
 
