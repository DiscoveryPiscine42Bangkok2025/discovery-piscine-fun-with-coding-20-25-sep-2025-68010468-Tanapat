$(document).ready(function() {

    // เมื่อคลิกที่การ์ดโปรไฟล์
    $('.view-portfolio').on('click', function() {
        var targetPage = $(this).data('target');
        
        // ป้องกันการ scroll ขณะเปลี่ยนหน้า
        $('body').css('overflow', 'hidden'); 

        // ซ่อนหน้าแรก แล้วแสดงหน้า portfolio ที่เลือก
        $('#homepage').fadeOut(400, function() {
            $(targetPage).fadeIn(400, function() {
                // อนุญาตให้ scroll ได้อีกครั้ง
                $('body').css('overflow', 'auto'); 
            });
        });
    });

    // เมื่อคลิกปุ่ม 'Disconnect' (กลับหน้าแรก)
    $('.back-to-home').on('click', function() {
        var currentPage = $(this).closest('.portfolio-page');

        // ป้องกันการ scroll ขณะเปลี่ยนหน้า
        $('body').css('overflow', 'hidden'); 

        // ซ่อนหน้า portfolio ปัจจุบัน แล้วกลับไปแสดงหน้าแรก
        currentPage.fadeOut(400, function() {
            $('#homepage').fadeIn(400, function() {
                // อนุญาตให้ scroll ได้อีกครั้ง
                $('body').css('overflow', 'auto');
            });
        });
    });

});