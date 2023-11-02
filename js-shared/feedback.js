// phan hoi 
function Feedback(Feedback) {
    var shopEmail = "hieutran11525@gmail.com";
    var subject = "-----Phản hồi của khách hàng-----";
    var NameCustomer = Feedback.querySelector('#name-input').value;
    var Messenge = Feedback.querySelector('#message-input').value;

    var body = "*******************************"+"\nTên khách hàng : " + NameCustomer +"\n Nội dung :"+ Messenge;

    var mailtoLink = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
}