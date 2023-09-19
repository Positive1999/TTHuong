// Lấy danh sách bình luận từ LocalStorage (nếu có)
let comments = localStorage.getItem('comments');
comments = comments ? JSON.parse(comments) : [];

// Hiển thị danh sách bình luận
function displayComments() {
    const commentContainer = document.querySelector('.danhgiacuakhachhang');
    commentContainer.innerHTML = '';

    for (let i = comments.length - 1; i >= 0; i--) {
        const comment = comments[i];
        const commentElement = document.createElement('div');
        commentElement.classList.add('kh');
        commentElement.innerHTML = `<div class="tenKH"> - ${comment.name} : ${comment.content}</div>`;
        commentContainer.appendChild(commentElement);
    }
}

// Thêm bình luận mới
function addComment() {
    const nameInput = document.querySelector('.vbl');
    const name = nameInput.value.trim();
    const content = name !== '' ? name : 'Anonymous';

    if (content !== '') {
        const newComment = { name, content };
        comments.push(newComment);

        // Lưu danh sách bình luận vào LocalStorage
        localStorage.setItem('comments', JSON.stringify(comments));

        // Hiển thị danh sách bình luận mới
        displayComments();

        // Xóa nội dung khung nhập bình luận
        nameInput.value = '';
    }
}

// Gọi hàm hiển thị danh sách bình luận khi trang được tải
displayComments();