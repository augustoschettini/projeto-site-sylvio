$("#slider").owlCarousel({

      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem : true,
      autoPlay : true,
      responsive : true,
 
  });
$(window).scroll(function(){
    var TopMenu = $(this).scrollTop();
    
    if (TopMenu > 200) {
        $('#navegacao').addClass('navegacao-fixa');
    }
    else{
        $('#navegacao').removeClass('navegacao-fixa');
    }
})
