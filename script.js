// Toggle Skills Section
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skillsSection');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
// Handle Profile Picture Preview
var profilePicInput = document.getElementById('profilePic');
if (profilePicInput) {
    profilePicInput.addEventListener('change', function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = document.getElementById('profilePicPreview');
                if (img && e.target) {
                    img.src = e.target.result;
                    img.style.display = 'block';
                }
            };
            reader.readAsDataURL(input.files[0]);
        }
    });
}
// Generate Resume
var generateResumeButton = document.getElementById('generateResume');
var resumeOutput = document.createElement('div'); // Create a div to hold the resume content
resumeOutput.id = 'resumeOutput';
document.body.appendChild(resumeOutput);
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeContent = "\n        <h1>".concat(name, "</h1>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume in the resumeOutput div
    resumeOutput.innerHTML = resumeContent;
});
// Download Resume
var downloadResumeButton = document.getElementById('downloadResume');
downloadResumeButton === null || downloadResumeButton === void 0 ? void 0 : downloadResumeButton.addEventListener('click', function () {
    var resumeContent = resumeOutput.innerHTML;
    // Create a Blob from the resume content
    var blob = new Blob([resumeContent], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    // Create a link element
    var a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html'; // Set the file name
    // Append to the body
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Clean up
    URL.revokeObjectURL(url); // Free up memory
});
