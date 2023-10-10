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

var down = document.querySelector('.fa-down-long');
let isDown = false;

setInterval(() => {
  if (isDown) {
    down.style.transform = 'translateY(0)';
    down.style.color = '#4cd137';
  } else {
    down.style.transform = 'translateY(5px)';
    down.style.color = '#e84118';
  }
  isDown = !isDown;
}, 1000);


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





$(document).ready(function () {
  // Kiểm tra loại màn hình khi tải xong tài liệu

  if (window.matchMedia("(max-width: 600px)").matches) {
    // Thực hiện hành động dành cho màn hình nhỏ hơn hoặc bằng 600px
    console.log("Màn hình nhỏ");

    $(document).ready(function () {
      $(window).scroll(function () {
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


    $(document).ready(function () {
      $(window).scroll(function () {
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
  }
})



$(function () {
  cmt = $('.comment').offset().top;
  $('.bl').click(function () {
    $('body,html').animate({ scrollTop: cmt });
  })
})

$(function () {
  trungBay = $('.banner').offset().top;
  $('.trungbay').click(function () {
    $('body,html').animate({ scrollTop: trungBay });
  })
})


var products = document.querySelectorAll('.sp');
var visibleItem = 5;
var btnXemThem = document.getElementById('xemThem');
var btnAnBot = document.getElementById('anBot');
var totalProducts = products.length;

 // Hiển thị 5 sản phẩm đầu tiên, ẩn các sản phẩm còn lại
 for (var i = 0; i < totalProducts; i++) {
  if (i < visibleItem) {
      products[i].style.display = 'block';
  } else {
      products[i].style.display = 'none';
  }
}

  // Xử lý sự kiện khi nhấp vào nút "Xem thêm"
  btnXemThem.addEventListener('click', function () {
    // Hiển thị các sản phẩm còn lại
    for (var i = visibleItem; i < totalProducts; i++) {
        products[i].style.display = 'block';
    }

    // Ẩn nút "Xem thêm"
    // Hiện nút "Ẩn bớt"
    btnXemThem.style.display = 'none';
    btnAnBot.style.display = 'block';
});

btnAnBot.addEventListener('click', function () {
    // về ban đầu có 5 sản phẩm 
    for (var i = 0; i < totalProducts; i++) {
    if (i < visibleItem) {
        products[i].style.display = 'block';
    } else {
        products[i].style.display = 'none';
    }
}
    //Hiện nút "Xem thêm"
    //Ẩn nút "Ẩn bớt"
    btnXemThem.style.display = 'block';
    btnAnBot.style.display = 'none';
});


// function notifyShop() {
//   // Thực hiện các bước xử lý thông báo tại đây
//   // Ví dụ: Gửi thông báo qua Email
//   var email = "hieutran11525@gmail.com";
//   var subject = "";
//   var body = "Bạn đã nhận được một đơn hàng mới từ khách hàng.";

//   var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
//   window.location.href = mailtoLink;
// }


function decreaseQuantity() {
  var quantityInput = document.querySelector('.quantity-input');
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
  }
}

function increaseQuantity() {
  var quantityInput = document.querySelector('.quantity-input');
  var currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

function notifyShop() {
  var shopEmail = "yourshop@example.com";
  var subject = "Đặt hàng mới từ khách hàng";
  var quantityInput = document.querySelector('.quantity-input');
  var quantity = parseInt(quantityInput.value);
  var priceSpan = document.querySelector('.gia-span');
  var price = priceSpan.textContent;

  var body = "Đơn hàng mới:\n\nSố lượng: " + quantity + "\nGiá: " + price;

  var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}