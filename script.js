document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function() {
        window.location.href = 'loginpage/index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.getElementById('signupButton');

    signupButton.addEventListener('click', function() {
        window.location.href = 'signuppage/index.html';
    });
});
