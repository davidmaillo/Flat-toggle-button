$(document).ready(function(){
    $('.flat-toggle').on('click', function() {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });
}