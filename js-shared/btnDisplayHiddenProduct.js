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