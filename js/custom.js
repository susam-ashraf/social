$(document).ready(function(){
    
//    
//$(window).resize(function() {
//    if( $(this).width() < 768) {
//         $(".navbar-brand").click(function(){
//       $(".menus_2_contents").toggle();
//   });
//    }
//});
//  
    
$(".navbar-brand").click(function(event){
        $(".menus_2_contents").toggleClass("toggle");
    });    
    
    
$('#calendar').datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});
    
    
$("#owl-demo").owlCarousel({

                  //navigation : true, // Show next and prev buttons
                  slideSpeed : 300,
                  paginationSpeed : 400,
                  singleItem:true

                  // "singleItem:true" is a shortcut for:
                  // items : 1, 
                  // itemsDesktop : false,
                  // itemsDesktopSmall : false,
                  // itemsTablet: false,
                  // itemsMobile : false

});
    
});