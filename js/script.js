jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// STICKY HEADER START
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else {
        $('.navbar').removeClass('sticky_header');
    }
    });  
// STICKY HEADER END