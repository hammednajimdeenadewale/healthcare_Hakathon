// Ensure DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Register Button Interaction
    const registerButton = document.querySelector('.bb a');
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        const formSection = document.querySelector('#fem');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Accept and Reject Cookies buttons
    document.querySelector('.findd').addEventListener('click', () => {
        alert('You accepted all cookies. Thank you!');
    });

    document.querySelector('.finddd').addEventListener('click', () => {
        alert('You rejected all cookies.');
    });

    // Toggle 'Create an account' text behavior
    const createAccountText = document.querySelector('.pia');
    if (createAccountText) {
        createAccountText.addEventListener('click', () => {
            alert('Redirecting to create account page...');
            // Redirect logic if necessary
            window.location.href = 'register.html'; // Replace with actual registration URL
        });
    }

    // Buttons with external links
    document.querySelectorAll('.bt a').forEach(button => {
        button.addEventListener('click', (e) => {
            const externalLink = button.getAttribute('href');
            window.open(externalLink, '_blank');
        });
    });
});
