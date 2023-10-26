  // Lấy danh sách tất cả sản phẩm
  const allProducts = document.querySelectorAll('.sp');
  const searchMessage = document.getElementById('searchMessage');

  // Lắng nghe sự kiện khi người dùng nhập từ khóa tìm kiếm
  function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let foundMatch = false;

    allProducts.forEach(product => {
      const productName = product.querySelector('.tensp').textContent.toLowerCase();

      if (productName.includes(searchTerm)) {
        product.style.display = 'block'; // Hiển thị sản phẩm nếu tên sản phẩm khớp với từ khóa tìm kiếm
        foundMatch = true;
      } else {
        product.style.display = 'none'; // Ẩn sản phẩm nếu tên sản phẩm không khớp với từ khóa tìm kiếm
      }
    });

    if (foundMatch) {
      searchMessage.style.display = 'none'; // Ẩn thông báo nếu có sản phẩm khớp
    } else {
      searchMessage.style.display = 'block'; // Hiển thị thông báo nếu không có sản phẩm khớp
    }
  }


