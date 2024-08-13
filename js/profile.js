document.addEventListener('DOMContentLoaded', function() {
    const userInfo = {
        name: '홍길동',
        email: 'honggildong@example.com',
        phone: '010-1234-5678',
        password: 'password123'
    };

    // 사용자 정보 저장
    if (!localStorage.getItem('userInfo')) {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    // 사용자 정보 불러오기
    function loadUserInfo() {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        document.getElementById('user-name').innerText = storedUserInfo.name;
        document.getElementById('user-email').innerText = storedUserInfo.email;
        document.getElementById('user-phone').innerText = storedUserInfo.phone;
    }

    loadUserInfo();

    const editInfoButton = document.getElementById('edit-info-button');
    const changePasswordButton = document.getElementById('change-password-button');
    const deleteAccountButton = document.getElementById('delete-account-button');

    const userInfoSection = document.getElementById('user-info');
    const editInfoSection = document.getElementById('edit-info');
    const changePasswordSection = document.getElementById('change-password');

    editInfoButton.addEventListener('click', function() {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        document.getElementById('edit-name').value = storedUserInfo.name;
        document.getElementById('edit-email').value = storedUserInfo.email;
        document.getElementById('edit-phone').value = storedUserInfo.phone;

        userInfoSection.classList.add('hidden');
        editInfoSection.classList.remove('hidden');
    });

    changePasswordButton.addEventListener('click', function() {
        userInfoSection.classList.add('hidden');
        changePasswordSection.classList.remove('hidden');
    });

    deleteAccountButton.addEventListener('click', function() {
        if (confirm('정말로 회원 탈퇴를 하시겠습니까?')) {
            localStorage.removeItem('userInfo');
            alert('회원 탈퇴가 완료되었습니다.');
            // 회원 탈퇴 처리 후 추가 로직 (예: 메인 페이지로 이동)
        }
    });

    const editInfoForm = document.getElementById('edit-info-form');
    editInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userName = document.getElementById('edit-name').value;
        const userEmail = document.getElementById('edit-email').value;
        const userPhone = document.getElementById('edit-phone').value;

        const updatedUserInfo = {
            ...JSON.parse(localStorage.getItem('userInfo')),
            name: userName,
            email: userEmail,
            phone: userPhone
        };

        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
        loadUserInfo();
        alert('회원정보가 수정되었습니다.');
        userInfoSection.classList.remove('hidden');
        editInfoSection.classList.add('hidden');
    });

    const changePasswordForm = document.getElementById('change-password-form');
    changePasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (currentPassword !== storedUserInfo.password) {
            alert('현재 비밀번호가 일치하지 않습니다.');
        } else if (newPassword !== confirmPassword) {
            alert('새 비밀번호가 일치하지 않습니다.');
        } else {
            storedUserInfo.password = newPassword;
            localStorage.setItem('userInfo', JSON.stringify(storedUserInfo));
            alert('비밀번호가 변경되었습니다.');
            userInfoSection.classList.remove('hidden');
            changePasswordSection.classList.add('hidden');
        }
    });
});
