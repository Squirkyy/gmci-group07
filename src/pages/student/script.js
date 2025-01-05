function onLoad() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    console.log(username + role);
    // Display a welcome message
    if (username) {
        document.getElementById('loginstatus').textContent = `Angemeldet als ${username} (${role})!`;
    } else {
        // Redirect to login if not logged in or wrong role
        window.location.href = '../../index.html';
    }
}