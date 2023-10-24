document.addEventListener("DOMContentLoaded", function (event) {
    // Lắng nghe sự kiện submit của biểu mẫu
    document.getElementById("feedback-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi lại trang

        // Lấy giá trị từ các trường input
        var name = document.getElementById("name-input").value;
        var message = document.getElementById("message-input").value;
        var image = document.getElementById("image-input").files[0];

        // Tạo một đối tượng chứa thông tin phản hồi
        var feedback = {
            name: name,
            message: message,
            image: URL.createObjectURL(image)
        };

        // Lấy danh sách phản hồi từ localStorage (nếu có)
        var feedbackList = localStorage.getItem("feedbackList");
        if (feedbackList) {
            feedbackList = JSON.parse(feedbackList);
        } else {
            feedbackList = [];
        }

        // Thêm phản hồi mới vào danh sách
        feedbackList.push(feedback);

        // Lưu danh sách phản hồi mới vào localStorage
        localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

        // Tạo phần tử mới cho phản hồi
        var feedbackItem = document.createElement("li");
        feedbackItem.classList.add("feedback-item");

        // Tạo phần tử hình ảnh
        var imageElement = document.createElement("img");
        imageElement.classList.add("feedback-image");
        imageElement.src = feedback.image;
        feedbackItem.appendChild(imageElement);

        // Tạo phần tử tên
        var nameElement = document.createElement("h3");
        nameElement.textContent = feedback.name;
        feedbackItem.appendChild(nameElement);

        // Tạo phần tử nội dung phản hồi
        var messageElement = document.createElement("p");
        messageElement.textContent = feedback.message;
        feedbackItem.appendChild(messageElement);

        // Thêm phản hồi vào danh sách
        document.getElementById("feedback-list").appendChild(feedbackItem);

        // Xóa giá trị trong các trường input
        document.getElementById("name-input").value = "";
        document.getElementById("message-input").value = "";
        document.getElementById("image-input").value = "";
    });

    // Kiểm tra nếu có danh sách phản hồi trong localStorage và hiển thị chúng
    var feedbackList = localStorage.getItem("feedbackList");
    if (feedbackList) {
        feedbackList = JSON.parse(feedbackList);
        feedbackList.forEach(function (feedback) {
            var feedbackItem = document.createElement("li");
            feedbackItem.classList.add("feedback-item");

            var imageElement = document.createElement("img");
            imageElement.classList.add("feedback-image");
            imageElement.src = feedback.image;
            feedbackItem.appendChild(imageElement);

            var nameElement = document.createElement("h3");
            nameElement.textContent = feedback.name;
            feedbackItem.appendChild(nameElement);

            var messageElement = document.createElement("p");
            messageElement.textContent = feedback.message;
            feedbackItem.appendChild(messageElement);

            document.getElementById("feedback-list").appendChild(feedbackItem);
        });
    }
});