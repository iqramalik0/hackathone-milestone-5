// Get DOM elements
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var downloadPdfBtn = document.getElementById('download-pdf');
// Form submit event
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Form ko submit hone se rokna
    // Form data collect karna
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var cnic = document.getElementById('cnic').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('skills').value;
    // Resume ka content create karna
    var resumeContent = "\n        <h1>Resume of ".concat(name, "</h1>\n        <p><strong>Username:</strong> ").concat(username, "</p>\n        <p><strong>Father's Name:</strong> ").concat(fathername, "</p>\n        <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n    ");
    // Resume ko display karna
    resumeDisplay.innerHTML = resumeContent;
    // Shareable link ka container show karna
    shareableLinkContainer.style.display = 'block';
    // Shareable link create karna
    var resumeData = encodeURIComponent(resumeContent);
    var link = "data:text/html;charset=utf-8,".concat(resumeData);
    shareableLink.href = link;
    shareableLink.textContent = 'Click here to view or edit your Resume';
    // PDF download ka function
    downloadPdfBtn.addEventListener('click', function () {
        var doc = new jsPDF(); // Directly use jsPDF
        // Resume content ko PDF mein convert karna
        doc.html(resumeDisplay, {
            callback: function (doc) {
                doc.save('resume.pdf'); // PDF save karna
            },
            margin: [10, 10, 10, 10],
            x: 10,
            y: 10
        });
    });
});
