 // Hole den Datei-Input und das Element zur Anzeige des Dateinamens
 const fileInput = document.getElementById('fileuploader');
 const fileNameDisplay = document.getElementById('file-name');

 // Event-Listener für Änderungen im Datei-Input
 fileInput.addEventListener('change', function () {
     if (fileInput.files.length > 0) {
         // Hole den Namen der ausgewählten Datei
         fileNameDisplay.textContent = fileInput.files[0].name;
     } else {
         // Falls keine Datei ausgewählt ist
         fileNameDisplay.textContent = 'Keine Datei ausgewählt';
     }
 });

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

function logout() {
    document.getElementById('logoutButton').addEventListener('click', function () {
        // Clear localStorage
        localStorage.clear();

        // Redirect to the login page
        window.location.href = 'index.html';
    });
}

function renderCourses() {
    const courses = [
        { id: 1, name: 'Grundlagen der Mensch-Computer-Interaktion', code: 'GMCI', instructor: 'Prof. Dr. Rohs', isActive: true, assignments: [
            { id: 1, name: 'Assignment 1', number: 1, dueDate: '2024-02-01', isSubmitted: true },
            { id: 2, name: 'Assignment 2', number: 2, dueDate: '2024-02-15', isSubmitted: true },
            { id: 3, name: 'Assignment 3', number: 3, dueDate: '2024-03-01', isSubmitted: true },
            { id: 4, name: 'Assignment 4', number: 4, dueDate: '2024-03-15', isSubmitted: true },
            { id: 5, name: 'Assignment 5', number: 5, dueDate: '2024-04-01', isSubmitted: false },
            { id: 6, name: 'Assignment 6', number: 6, dueDate: '2024-04-15', isSubmitted: true },
            { id: 7, name: 'Assignment 7', number: 7, dueDate: '2024-05-01', isSubmitted: true },
            { id: 8, name: 'Assignment 8', number: 8, dueDate: '2024-05-15', isSubmitted: true },
            { id: 9, name: 'Assignment 9', number: 9, dueDate: '2024-06-01', isSubmitted: false },
            { id: 10, name: 'Assignment 10', number: 10, dueDate: '2025-01-10', isSubmitted: false },
        ] },
        { id: 2, name: 'Grundlagen der Betriebssysteme', code: 'GBS', instructor: 'Dr. Fielder', isActive: false, assignments: [] },
        { id: 3, name: 'Grundlagen der theoretischen Informatik', code: 'GTI', instructor: 'Prof. Dr. Vollmer', isActive: false, assignments: [] }
    ];

    const container = document.getElementById("courses");

    if (!container) return;

    container.innerHTML = "";

    courses.forEach(course => {
        const item = document.createElement("li");
        if (course.isActive) {
        item.innerHTML = `
            <div class="ul-item">
            <a href="submit.html"><strong>${course.name}</strong></a> Assignment Nr. ${course.assignments.length}<br>
            (Kurz: ${course.code}) <br> 
            Dozent: ${course.instructor} <br>
            Abgabe bis zum ${course.assignments[course.assignments.length-1].dueDate}
            </div>
        `;
        } else {
            item.innerHTML = `
            <div class="ul-item">
            <i>${course.name}</i><br> 
            (Kurz: ${course.code}) - Dozent: ${course.instructor}
            </div>
        `;
        }

        container.appendChild(item);
    })
}

function renderAssignments() {
    const assignments = [
        { id: 1, name: 'Assignment 1', number: 1, dueDate: '2024-02-01', isSubmitted: true, score: 18 },
        { id: 2, name: 'Assignment 2', number: 2, dueDate: '2024-02-15', isSubmitted: true, score: 15 },
        { id: 3, name: 'Assignment 3', number: 3, dueDate: '2024-03-01', isSubmitted: true, score: 20 },
        { id: 4, name: 'Assignment 4', number: 4, dueDate: '2024-03-15', isSubmitted: true, score: 14 },
        { id: 5, name: 'Assignment 5', number: 5, dueDate: '2024-04-01', isSubmitted: false },
        { id: 6, name: 'Assignment 6', number: 6, dueDate: '2024-04-15', isSubmitted: true, score: 12 },
        { id: 7, name: 'Assignment 7', number: 7, dueDate: '2024-05-01', isSubmitted: true, score: 17 },
        { id: 8, name: 'Assignment 8', number: 8, dueDate: '2024-05-15', isSubmitted: true, score: 13 },
        { id: 9, name: 'Assignment 9', number: 9, dueDate: '2024-06-01', isSubmitted: false },
        { id: 10, name: 'Assignment 10', number: 10, dueDate: '2025-01-10', isSubmitted: false }
    ];

    const container = document.getElementById("assignments");
    const totalScoreContainer = document.getElementById("totalScore");

    if (!container || !totalScoreContainer) return;

    container.innerHTML = "";

    let totalAchievedPoints = 0;
    let totalPossiblePoints = 0;

    // Retrieve the username from localStorage
    const username = localStorage.getItem('username');

    // Iterate over all assignments except the last one
    assignments.slice(0, -1).forEach(assignment => {
        const item = document.createElement("li");
        if (assignment.isSubmitted) {
            item.innerHTML = `
                <div class="assignment">
                <strong>${assignment.name}</strong> - Assignment Nr. ${assignment.number} <br>
                Due Date: ${assignment.dueDate} <br>
                Submitted: Yes (Score: ${assignment.score}) <br>
                <button class="button-email" onclick="location.href='mailto:vollmer@stud.uni-hannover.de?subject=Fragen%20zum%20GMCI%20Assignment%20${assignment.number}&body=Meine%20Damen%20und%20Herren,%0D%0A%0D%0AMein%20Name%20ist%20${username}.%20Ich%20habe%20eine%20Frage%20zum%20${assignment.name}%20(Assignment%20Nr.%20${assignment.number}).%0D%0A%0D%0AVielen%20Dank%20im%20Voraus.';">Email an den Tutor</button>
                </div>
            `;
            totalAchievedPoints += assignment.score;
        } else {
            item.innerHTML = `
                <div class="assignment">    
                <strong>${assignment.name}</strong> - Assignment Nr. ${assignment.number} <br>
                Due Date: ${assignment.dueDate} <br>
                Submitted: No <br>
                <button onclick="location.href='mailto:vollmer@stud.uni-hannover.de?subject=Fragen%20zum%20GMCI%20Assignment%20${assignment.number}&body=Meine%20Damen%20und%20Herren,%0D%0A%0D%0AMein%20Name%20ist%20${username}.%20Ich%20habe%20eine%20Frage%20zum%20${assignment.name}%20(Assignment%20Nr.%20${assignment.number}).%0D%0A%0D%0AVielen%20Dank%20im%20Voraus.';">Email an den Tutor</button>
                </div>
            `;
        }

        totalPossiblePoints += 20; // Each assignment can bring up to 20 points
        container.appendChild(item);
    });

    // Calculate percentage
    const percentage = totalPossiblePoints > 0 ? ((totalAchievedPoints / totalPossiblePoints) * 100).toFixed(2) : 0;

    // Display total score, total possible points, and percentage
    totalScoreContainer.innerHTML = `Total Score: ${totalAchievedPoints} / ${totalPossiblePoints} points (${percentage}% achieved, excluding the latest assignment)`;
}

