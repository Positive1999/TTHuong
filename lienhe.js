// Lấy phần tử cần thao tác
const loadingElement = document.getElementById('loading');
// Mảng chứa các chấm
const dotsArray = [".", "..", "..."];

// Biến đếm vị trí chấm hiện tại
let dotIndex = 0;

// Hàm thay đổi chấm hiện tại và cập nhật nội dung
function changeDot() {
  loadingElement.innerHTML = `Đang cập nhật ${dotsArray[dotIndex]}`;

  // Di chuyển tới chấm tiếp theo trong mảng
  dotIndex = (dotIndex + 1) % dotsArray.length;
}

// Thực hiện hàm changeDot mỗi 1 giây
setInterval(changeDot, 1000);



//contact

function submitContact() {
  var shopEmail = "hieutran11525@gmail.com";
  var subject = "Liên hệ mới từ khách hàng";

  var nameInput = document.getElementById('name');
  var name = nameInput.value; // Trim leading/trailing white spaces

  var emailInput = document.getElementById('email');
  var email = emailInput.value;

  var messageInput = document.getElementById('message');
  var message = messageInput.value;

  if (name === '' || email === '' || message === '') {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return; // Stop further execution
  }

  var body = "Thông báo mới:\n\nTên người dùng: " +
    name + "\nEmail: " + email + "\nMessage: " + message;

  var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
// het contact


