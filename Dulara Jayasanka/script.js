// script.js

// Function to handle resume download
function downloadResume() {
    // Assuming the resume file is named "resume.pdf"
    var resumeUrl = "resume.pdf";

    // Create an anchor element
    var link = document.createElement("a");

    // Set the href attribute to the resume file URL
    link.href = resumeUrl;

    // Set the download attribute to prompt the user to download the file instead of navigating to it
    link.download = "resume.pdf";

    // Programmatically trigger a click event on the anchor element
    link.click();
}
