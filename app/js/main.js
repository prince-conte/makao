 $(document).ready(function() {

     
 var topHeight = $(window).height();
     
    if ( topHeight < 500 ) {
        
    $('.inner').css('top' , topHeight + 70);    
        
    }
     
 
        

 $("#mont1").click(function () { 
     
 $('#news1').fadeIn(1000);        
 $('#news2').fadeOut(1000);        
 $('#news3').fadeOut(1000);        
 $('.news__button-block a').removeClass('active');
 $('#mont1').addClass('active');
 
       
 });    
  
         

 $("#mont2").click(function () { 
     
 $('#news2').fadeIn(1000);        
 $('#news1').fadeOut(1000);        
 $('#news3').fadeOut(1000);        
 $('.news__button-block a').removeClass('active');
 $('#mont2').addClass('active');
 
       
 });    
  
            

 $("#mont3").click(function () { 
     
 $('#news3').fadeIn(1000);        
 $('#news1').fadeOut(1000);        
 $('#news2').fadeOut(1000);        
 $('.news__button-block a').removeClass('active');
 $('#mont3#').addClass('active');
 
       
 });    
  
     
     
     
     
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
     
     
$("a.sc").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
     
     
});


$(window).resize(function() {
     
 var topHeight = $(window).height();
     

    if ( topHeight < 500 ) {
        
    $('.inner').css('top' , topHeight + 70);    
        
    }
    
});
 
