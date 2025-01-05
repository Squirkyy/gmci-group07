const users = [
  { username: 'student', password: '123', role: 'student' },
  { username: 'tutor', password: '321', role: 'tutor' }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      if (user.role === 'student') {
          window.location.href = 'pages/student/index.html';
      } else if (user.role === 'tutor') {
          window.location.href = 'pages/tutor/index.html';
      }
  } else {
      alert('Username oder Passwort ist falsch!');
  }
});
