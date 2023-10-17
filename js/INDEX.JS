// logo
// var logo = document.querySelector('.fa-square-facebook');
// let isRotated = false;
// setInterval(() => {
//   if (isRotated) {
//     logo.style.transform = 'rotate(-20deg)';
//   } else {
//     logo.style.transform = 'rotate(20deg)';
//   }
//   isRotated = !isRotated;
// }, 1200);
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









