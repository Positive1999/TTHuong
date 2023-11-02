function Feedback(Feedback) {
    var shopEmail = "hieutran11525@gmail.com";
    var subject = "-----Phản hồi của khách hàng-----";
    var NameCustomer = Feedback.querySelector('#name-input').value;
    var Messenge = Feedback.querySelector('#message-input').value;

    if (NameCustomer === '' || Messenge === '') {
        // Hiển thị hộp thoại SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Vui lòng nhập đầy đủ thông tin trước khi gửi.',
            confirmButtonText: 'OK'
        });
    } else {
        var body = "*******************************" + "\nTên khách hàng : " + NameCustomer + "\nNội dung phản hồi :" + Messenge;

        var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailtoLink;

        // Đặt giá trị rỗng cho các trường nhập liệu
        Feedback.querySelector('#name-input').value = '';
        Feedback.querySelector('#message-input').value = '';
    }
}