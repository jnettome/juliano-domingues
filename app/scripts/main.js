'use strict';

// Hover effect on portfolio gallery
$(function() {
    $('.background-image').each(function() {
        $(this).css('background-image', 'url('+$(this).data('background')+')');
    });

    $('.background-image').on('mouseenter', function() {
        $(this).css('background-image', 'url('+$(this).data('background-hover')+')');
    });

    $('.background-image').on('mouseleave', function() {
        $(this).css('background-image', 'url('+$(this).data('background')+')');
    });
});

// Animation
$(document).ready(function() {
    var finishEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.headline').addClass('animated fadeInDown').one(finishEvents, function() {
        $('.site-navigation').addClass('animated fadeIn');
        $('.scroll-holder').addClass('animated fadeIn');
    });
});
