$(document).ready(function(){
  // เพิ่ม Smooth scrolling ให้กับทุกลิงก์ที่ href เริ่มต้นด้วย #
  $("a[href^='#']").on('click', function(event) {

    // ตรวจสอบให้แน่ใจว่า this.hash มีค่าก่อนที่จะ override default behavior
    if (this.hash !== "") {
      // ป้องกันการทำงานปกติของลิงก์ (การกระโดด)
      event.preventDefault();

      // เก็บค่า hash
      var hash = this.hash;

      // ใช้ jQuery's animate() method เพื่อเพิ่ม smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // เพิ่ม hash (#) ไปที่ URL เมื่อเลื่อนเสร็จ
        window.location.hash = hash;
      });
    } // End if
  });
});