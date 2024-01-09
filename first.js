document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if username and password match a predefined value
    if (username === 'user' && password === 'password') {
      document.getElementById('loginMessage').innerText = 'Login successful!';
      // Redirect to another page or perform other actions upon successful login
    } else {
      document.getElementById('loginMessage').innerText = 'Invalid username or password. Please try again.';
    }
  });
  