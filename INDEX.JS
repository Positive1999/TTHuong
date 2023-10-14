// logo
var logo = document.querySelector('.fa-square-facebook');
let isRotated = false;
setInterval(() => {
  if (isRotated) {
    logo.style.transform = 'rotate(-20deg)';
  } else {
    logo.style.transform = 'rotate(20deg)';
  }
  isRotated = !isRotated;
}, 1200);
//het logo

//arrow down
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
//het arrow down


// click = jquery
// $(function () {
//   trungBay = $('.banner').offset().top;
//   $('.trungbay').click(function () {
//     $('body,html').animate({ scrollTop: trungBay });
//   })
// })
// click = jquery


//nut xem them va an bot
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
  // Xử lý sự kiện khi nhấp vào nút "ẩn bớt"
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
//nut xem them va an bot




// function decreaseQuantity() {
//   var quantityInput = document.querySelector('.quantity-input');
//   var currentQuantity = parseInt(quantityInput.value);
//   if (currentQuantity > 1) {
//       quantityInput.value = currentQuantity - 1;
//   }
// }

// function increaseQuantity() {
//   var quantityInput = document.querySelector('.quantity-input');
//   var currentQuantity = parseInt(quantityInput.value);
//   quantityInput.value = currentQuantity + 1;
// }


// nut mua hang
function notifyShop(productElement) {
  var shopEmail = "hieutran11525@gmail.com";
  var subject = "Đặt hàng mới từ khách hàng";

  var productName = productElement.querySelector('.tensp').textContent;
  
  var quantityInput = productElement.querySelector('.quantity-input');
  var quantity = parseInt(quantityInput.value);

  var priceSpan = productElement.querySelector('.gia span');
  var price = parseInt(priceSpan.textContent) + "000";

  var total = quantity * price;
  var formattedTotal = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  var body = "Đơn hàng mới:\n\nSản phẩm: " + productName + "\nSố lượng: " + quantity + "\nGiá: " + formattedTotal ;

  var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
// het nut mua hang


// slider
  const slider = document.querySelector('.slider');
  let currentSlide = 0;
  const slides = slider.querySelectorAll('img');
  const slideCount = slides.length;
  const slideWidth = slides[0].clientWidth;

  function moveToSlide(slideIndex) {
      if (slideIndex < 0 || slideIndex >= slideCount) {
          return;
      }
      slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
      currentSlide = slideIndex;
  }

  function nextSlide() {
      moveToSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 3000);
// slider

