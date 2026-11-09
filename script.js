
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const result = document.getElementById("result");

        if (!name || !message || !isValidEmail(email)) {
            result.textContent =
                "Please enter valid details and email.";
            return;
        }

        result.textContent =
            "Form validated successfully!";
    });
