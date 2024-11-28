document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const signInButton = form.querySelector(".bi");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const emailOrPhone = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!emailOrPhone) {
            alert("Please enter your email or phone number.");
            return;
        }

        if (!password) {
            alert("Please enter your password.");
            return;
        }

        // Simulate a successful login and redirect
        alert("Login successful!");
        window.location.href = "contact.html";
    });

    // Prevent button's default behavior when clicking the link
    signInButton.addEventListener("click", (event) => {
        event.preventDefault();
        form.dispatchEvent(new Event("submit")); // Trigger form submission
    });
});

