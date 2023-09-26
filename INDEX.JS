// logo
var logo = document.querySelector('.fa-kitchen-set');
let isRotated = false;
setInterval(() => {
  if (isRotated) {
    logo.style.transform = 'rotate(-20deg)';
  } else {
    logo.style.transform = 'rotate(20deg)';
  }
  isRotated = !isRotated;
}, 1200);


var menu = document.querySelector('.menu');
var humberger = document.querySelector('.humberger');
var congtac = false;

humberger.addEventListener('click', () => {
  congtac = !congtac; // Chuyển đổi giá trị của biến congtac

  if (congtac) {
    menu.style.display = 'block'; // Hiển thị menu
  } else {
    menu.style.display = 'none'; // Ẩn menu
  }
});





$(document).ready(function() {
  // Kiểm tra loại màn hình khi tải xong tài liệu

  if (window.matchMedia("(max-width: 600px)").matches) {
    // Thực hiện hành động dành cho màn hình nhỏ hơn hoặc bằng 600px
    console.log("Màn hình nhỏ");

    $(document).ready(function() {
      $(window).scroll(function() {
        var banner = $('.banner');
        var bannerBottom = banner.offset().top + banner.outerHeight();
        var scrollPosition = $(window).scrollTop();
        var taskbar = $('.taskbar');
        
        if (scrollPosition >= bannerBottom) {
          taskbar.css('background-color', 'pink');
        } else {
          taskbar.css('background-color', '');
        }
      });
    });


  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    // Thực hiện hành động dành cho màn hình nhỏ hơn hoặc bằng 1024px
    console.log("Màn hình trung bình");
  } else {
    // Thực hiện hành động dành cho màn hình lớn hơn 1024px
    console.log("Màn hình lớn");


    $(document).ready(function() {
      $(window).scroll(function() {
        var banner = $('.banner');
        var bannerBottom = banner.offset().top + banner.outerHeight();
        var scrollPosition = $(window).scrollTop();
        var taskbar = $('.taskbar');
        
        if (scrollPosition >= bannerBottom) {
          taskbar.css('background-color', 'green');
          taskbar.css('padding', '10px');
          taskbar.css('border-radius', '20px');
        } else {
          taskbar.css('background-color', '');
        }
      });
    });
  }})



  $(function(){
    cmt = $('.comment').offset().top;
     $('.bl').click(function(){
         $('body,html').animate({scrollTop:cmt});
     })
 })