// JavaScript to add functionality

// Form Validation
document.querySelector(".bi").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission for validation
    const fullName = document.querySelector("input[placeholder='Enter your fullname']").value.trim();
    const email = document.querySelector("input[placeholder='Enter your email address']").value.trim();
    const password = document.querySelector("input[placeholder='Enter your password']").value.trim();
    
    if (!fullName || !email || !password) {
        alert("Please fill out all fields!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Form submitted successfully!");
        // Add form submission logic here
    }
});

// Dynamic Navigation Highlight
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item a");

    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Cookie Buttons Functionality
document.querySelector(".findd").addEventListener("click", () => {
    alert("You have accepted all cookies!");
});

document.querySelector(".finddd").addEventListener("click", () => {
    alert("You have rejected all cookies!");
});
