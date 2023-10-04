var btnBars = document.querySelector('.fa-bars');
var hienMenu = document.querySelector('.chuyenTrang');
var trangThai = 0;

btnBars.addEventListener('click', () => {
  if (trangThai === 0) {
    hienMenu.style.display = "block";
    trangThai = 1;
  } else {
    hienMenu.style.display = "none";
    trangThai = 0;
  }
});