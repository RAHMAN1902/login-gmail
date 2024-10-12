document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const options = { 
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: true
        };
        document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
    }

    updateTime();
    setInterval(updateTime, 1000);
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});
