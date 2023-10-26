
  // Lấy danh sách tất cả sản phẩm
  const allProducts = document.querySelectorAll('.sp');

  // Lắng nghe sự kiện khi người dùng nhập từ khóa tìm kiếm
  function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    allProducts.forEach(product => {
      const productName = product.querySelector('.tensp').textContent.toLowerCase();

      if (productName.includes(searchTerm)) {
        product.style.display = 'block'; // Hiển thị sản phẩm nếu tên sản phẩm khớp với từ khóa tìm kiếm
      } else {
        product.style.display = 'none'; // Ẩn sản phẩm nếu tên sản phẩm không khớp với từ khóa tìm kiếm
      }
    });
  }
