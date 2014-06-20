'use strict';

$(function() {
    $('.background-image').each(function() {
        $(this).css('background-image', 'url('+$(this).data('background')+')');
    });

});
