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




