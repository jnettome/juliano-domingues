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
