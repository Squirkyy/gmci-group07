const users = [
  { username: 'Darius', password: '123', role: 'Student' },
  { username: 'Thomas', password: '321', role: 'Tutor' }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Save user info in localStorage
    localStorage.setItem('username', user.username);
    localStorage.setItem('role', user.role);

    // Log to verify that data is saved
    if (user.role === 'Student') {
        window.location.href = 'pages/student/index.html';
    } else if (user.role === 'Tutor') {
        window.location.href = 'pages/tutor/index.html';
    }
	
  } else {
      alert('Username oder Passwort ist falsch!');
  }
});
