$("#slider").owlCarousel({

      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem : true,
      autoPlay : true,
      responsive : true,
 
  });
//$("ul.navbar-nav > li > a").on('click', function(event){
    //event.preventDefault();
  //  $("html, body").animate({scrollTop:$(this.hash).offset().top-50}, 1200);
//});


$(window).scroll(function(){
    var TopMenu = $(this).scrollTop();
    
    if (TopMenu > 200) {
        $('#navegacao').addClass('navegacao-fixa');
    }
    else{
        $('#navegacao').removeClass('navegacao-fixa');
    }
})