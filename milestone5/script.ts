// Declare jsPDF globally
declare var jsPDF: any; // Yeh line add karna zaroori hai

// Get DOM elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfBtn = document.getElementById('download-pdf') as HTMLButtonElement;

// Form submit event
form.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Form ko submit hone se rokna

    // Form data collect karna
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Resume ka content create karna
    const resumeContent = `
        <h1>Resume of ${name}</h1>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Father's Name:</strong> ${fathername}</p>
        <p><strong>CNIC:</strong> ${cnic}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Resume ko display karna
    resumeDisplay.innerHTML = resumeContent;

    // Shareable link ka container show karna
    shareableLinkContainer.style.display = 'block';

    // Shareable link create karna
    const resumeData = encodeURIComponent(resumeContent);
    const link = `data:text/html;charset=utf-8,${resumeData}`;
    shareableLink.href = link;
    shareableLink.textContent = 'Click here to view or edit your Resume';

    // PDF download ka function
    downloadPdfBtn.addEventListener('click', function() {
        const doc = new jsPDF(); // Directly use jsPDF

        // Resume content ko PDF mein convert karna
        doc.html(resumeDisplay, {
            callback: function(doc) {
                doc.save('resume.pdf'); // PDF save karna
            },
            margin: [10, 10, 10, 10],
            x: 10,
            y: 10
        });
    });
});
