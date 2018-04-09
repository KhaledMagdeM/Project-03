/* global $, document, console, jQuery, window, SmoothScroll, alert */

/*jslint browser: true*/

/*jslint devel: true*/



$(document).ready(function () {
                  
    "use strict";
    
    // Start Nice Scroll
    
    // 1. Simple mode, it styles document scrollbar:
    $(function () {
        $("html").niceScroll();
    });

    
    // slider 
    
    $('.carousel').carousel({
        
        interval: 5000 // وقت الانتقال من صوره لصوره
    });
    
    
    // Show Tool Box
    
    $(".gear-check").click(function () {
                           
        $(".option-box .color-option").toggle(500);
    });
    
    
    // Change Theme Color
    
    var colorLi = $(".color-option ul li"),
        
        scrollBbutton = $("#scroll-top");
    
    
    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#171cd8").end()
        .eq(2).css("backgroundColor", "#28c2e6").end()
        .eq(3).css("backgroundColor", "#8f3bda").end()
        .eq(4).css("backgroundColor", "#12bf11").end();
    
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    
    // Scroll To Top
    
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollBbutton.fadeIn();
            
        } else {
            scrollBbutton.fadeOut();
        }
        
        
    });
    
    
     // click on button to scroll top
        
    scrollBbutton.click(function () {
            
        $("html,body").animate({scrollTop : 0}, 650);
            
    });
        
});

/////////////////////////////////////////////////////////////////////////

// loading screen


$(window).on('load', function () {
    
    "use strict";
    
    $(".loading-overlay, .loading-overlay .spinner").fadeOut(1000, function () {
        
        $(this).remove(); // to remove div from html after loading screen fadeOut
    });
    
    $("body").css("overflow", "auto");
});


    