
// nut mua hang
function notifyShop(productElement) {
    var shopEmail = "huongjennyarjes@gmail.com";
    var subject = "Đặt hàng mới từ khách hàng";
  
    var productName = productElement.querySelector('.tensp').textContent;
    
    var quantityInput = productElement.querySelector('.quantity-input');
    var quantity = parseInt(quantityInput.value);
  
    var priceSpan = productElement.querySelector('.gia span');
    var price = parseInt(priceSpan.textContent) + "000";
  
    var total = quantity * price;
    var formattedTotal = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    var body = "Đơn hàng mới:\n\nSản phẩm: " + productName + "\nSố lượng: " + quantity + "\nGiá: " + formattedTotal  + "\nSố điện thoại(người nhận hàng) : "  + "\nĐịa chỉ :(người nhận hàng) : " ;
  
    var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  // het nut mua hang