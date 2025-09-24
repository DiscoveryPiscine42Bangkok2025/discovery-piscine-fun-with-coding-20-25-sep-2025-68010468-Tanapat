$(document).ready(function() {

    $('.view-portfolio').on('click', function() {
        var targetPage = $(this).data('target');
        
        $('body').css('overflow', 'hidden'); 

        $('#homepage').fadeOut(400, function() {
            $(targetPage).fadeIn(400, function() {
                $('body').css('overflow', 'auto'); 
            });
        });
    });

    $('.back-to-home').on('click', function() {
        var currentPage = $(this).closest('.portfolio-page');

        $('body').css('overflow', 'hidden'); 

        currentPage.fadeOut(400, function() {
            $('#homepage').fadeIn(400, function() {
                $('body').css('overflow', 'auto');
            });
        });
    });

});