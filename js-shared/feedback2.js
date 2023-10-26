  // Cấu hình Firebase
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBnZYneCmlaTmL1frQD-330kk6vmigwLIU",
          authDomain: "dogiadung-ed467.firebaseapp.com",
          projectId: "dogiadung-ed467",
          storageBucket: "dogiadung-ed467.appspot.com",
          messagingSenderId: "77995492602",
          appId: "1:77995492602:web:a39e27ffaba913379b3543",
          measurementId: "G-ZGT5YWJ1VD"
      };

        // Khởi tạo Firebase
        firebase.initializeApp(firebaseConfig);

        // Kết nối đến Firebase Realtime Database
        var database = firebase.database();

        // Lắng nghe sự kiện submit của biểu mẫu
        document.getElementById("feedback-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Ngăn chặn việc gửi lại trang

            // Lấy giá trị từ các trường input
            <ul id="feedback-list"></ul>
            var name = document.getElementById("name-input").value;
            var message = document.getElementById("message-input").value;
            var image = document.getElementById("image-input").files[0];

            // Tạo một đối tượng chứa thông tin phản hồi
            var feedback = {
                name: name,
                message: message
            };

            // Lưu phản hồi vào Firebase Realtime Database
            var newFeedbackRef = database.ref("feedbacks").push();
            newFeedbackRef.set(feedback)
                .then(function () {
                    // Lưu ảnh vào Firebase Storage (nếu có)
                    if (image) {
                        var imageRef = firebase.storage().ref().child(newFeedbackRef.key);
                        imageRef.put(image);
                    }

                    // Xóa giá trị trong các trường input
                    document.getElementById("name-input").value = "";
                    document.getElementById("message-input").value = "";
                    document.getElementById("image-input").value = "";
                })
                .catch(function (error) {
                    console.error("Lỗi khi lưu phản hồi:", error);
                });
        });

        // Lắng nghe sự kiện child_added của Firebase Realtime Database
        database.ref("feedbacks").on("child_added", function (snapshot) {
            var feedback = snapshot.val();
            var feedbackItem = document.createElement("li");
            feedbackItem.classList.add("feedback-item");

            var nameElement = document.createElement("h3");
            nameElement.textContent = feedback.name;
            feedbackItem.appendChild(nameElement);

            var messageElement = document.createElement("p");
            messageElement.textContent = feedback.message;
            feedbackItem.appendChild(messageElement);

            // Hiển thị ảnh từ Firebase Storage (nếu có)
            var imageRef = firebase.storage().ref().child(snapshot.key);
            imageRef.getDownloadURL()
                .then(function (url) {
                    var imageElement = document.createElement("img");
                    imageElement.classList.add("feedback-image");
                    imageElement.src = url;
                    feedbackItem.appendChild(imageElement);
                })
                .catch(function (error) {
                    console.error("Lỗi khi tải ảnh:", error);
                });

            document.getElementById("feedback-list").appendChild(feedbackItem);
        });