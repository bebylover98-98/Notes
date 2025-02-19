// Function to show the selected class content
function showContent(classType) {
    document.querySelector(".container").style.display = "none";
    document.getElementById("content").style.display = "block";

    let classTitle = document.getElementById("class-title");
    let subjectsDiv = document.getElementById("subjects");
    subjectsDiv.innerHTML = "";

    let subjects, extras;

    if (classType === "class11") {
        classTitle.innerText = "Class 11 Subjects & Resources";
        subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"];
        extras = ["Past Year Questions", "Important Topics"];
    } else {
        classTitle.innerText = "Class 12 Subjects & Resources";
        subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"];
        extras = ["Past Year Questions", "Important Questions"];
    }

    // Create subject buttons dynamically
    [...subjects, ...extras].forEach(subject => {
        let subjectDiv = document.createElement("div");
        subjectDiv.className = "subject";
        subjectDiv.innerText = subject;
        subjectDiv.onclick = () => loadSubjectContent(subject);
        subjectsDiv.appendChild(subjectDiv);
    });
}

// Function to load subject content from Google
function loadSubjectContent(subject) {
    document.getElementById("content").style.display = "none";
    document.getElementById("subject-content").style.display = "block";
    document.getElementById("subject-title").innerText = subject;
    
    let query = encodeURIComponent(`${subject} Class Notes`);
    document.getElementById("google-frame").src = `https://www.google.com/search?q=${query}`;
}

// Function to go back to class selection
function goBack() {
    document.querySelector(".container").style.display = "block";
    document.getElementById("content").style.display = "none";
}

// Function to go back to subjects list
function goBackToSubjects() {
    document.getElementById("subject-content").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Function to show Creator Popup
function showCreator() {
    document.getElementById("creator-popup").style.display = "block";
}

// Function to close Creator Popup
function closeCreator() {
    document.getElementById("creator-popup").style.display = "none";
}