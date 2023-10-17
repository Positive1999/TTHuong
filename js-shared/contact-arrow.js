var ScollHeader = document.getElementById("body");
var scrollTop = ScollHeader.scrollTop;

var btnArrowUp = document.querySelector(".arrow-up");
btnArrowUp.addEventListener('click', () => {
 window.scrollTo({
   top: 0,
   behavior: 'smooth'
 });
});

//contact phone and arrow up