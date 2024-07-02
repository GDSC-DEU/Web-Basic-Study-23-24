document.querySelector('#loginForm').addEventListener('submit', function(e){
    e.preventDefault(); // 폼 전송을 막음

    var name = document.querySelector('#name').value.trim();
    var email = document.querySelector('#email').value.trim();
    var password = document.querySelector('#password').value.trim();
    var confirmPassword = document.querySelector('#Confirmpassword').value.trim();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('회원가입 폼을 작성하세요');
        console.log('회원가입 폼을 작성하지 않았습니다');
        return;
    }

    // 비밀번호 검사를 위해 test 함수 호출
    if (test(password, confirmPassword)) {
        // 모든 검사가 통과되면 login.html로 이동
        window.location.href = 'login.html';
    }
});

function test(password, confirmPassword) {
    if (password.length < 8) {
        alert('입력한 글자가 8글자 이상이어야 합니다.');
        console.log('비밀번호가 8글자 이상이 아님');
        return false;
    }
    if (password !== confirmPassword) {
        alert("비밀번호가 일치 하지 않습니다.");
        console.log('비밀번호가 일치하지 않음');
        return false;
    } else {
        alert("비밀번호가 일치합니다");
        return true;
    }
}
