document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active navigation link
    const navLinks = document.querySelectorAll(".nav-item a");
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.style.fontWeight = "bold";
        link.style.color = "blue";
      }
    });
  
    // Add greeting to header based on the time of day
    const headerText = document.querySelector("header p");
    const now = new Date();
    const hours = now.getHours();
    let greeting = "Welcome";
    if (hours >= 5 && hours < 12) greeting = "Good Morning";
    else if (hours >= 12 && hours < 17) greeting = "Good Afternoon";
    else if (hours >= 17 && hours < 21) greeting = "Good Evening";
    headerText.innerHTML += ` | ${greeting}!`;
  
    // Cookie consent functionality
    const acceptCookiesBtn = document.querySelector(".findd a[href='']");
    const rejectCookiesBtn = document.querySelector(".finddd a[href='']");
    
    if (acceptCookiesBtn && rejectCookiesBtn) {
      acceptCookiesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("You accepted all cookies!");
        // Here, implement any necessary logic to set cookies.
      });
  
      rejectCookiesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("You rejected all cookies!");
        // Here, implement logic to reject cookies.
      });
    }
  
    // Add smooth scroll for footer links (Optional, if needed)
    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  