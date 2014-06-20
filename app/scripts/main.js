'use strict';

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

$(window).on('resize load', function() {
    $('.resizr').css('width', $('.background-image').outerWidth());
    $('.resizr').css('height', $('.background-image').outerHeight());
});
