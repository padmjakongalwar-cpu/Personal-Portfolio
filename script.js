// 1. Grab the button
const themeButton = document.querySelector("#theme-toggle");

// 2. Listen for a click event
themeButton.addEventListener("click", function() {
    // 3. Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");
});