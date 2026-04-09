// A simple list of "Authorized" students
const authorizedStudents = [
    { reg: "251FA18214", pass: "password123", sec: "A" },
    { reg: "251FA18215", pass: "student456", sec: "B" }
];

function handleLogin() {
    const regInput = document.getElementById('reg-num').value;
    const passInput = document.getElementById('password').value;
    const secInput = document.getElementById('section').value;

    // Check if the entered credentials match our list
    const student = authorizedStudents.find(s => 
        s.reg === regInput && 
        s.pass === passInput && 
        s.sec === secInput
    );

    if (student) {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('dashboard').style.display = 'flex';
        alert("Login Successful! Welcome Section " + student.sec);
    } else {
        alert("Invalid Registration Number, Password, or Section.");
    }
}