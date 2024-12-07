document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.previousElementSibling; // The .card-text element
        content.classList.toggle("hidden"); // Toggle visibility of content

        // Toggle the active class on the button for arrow changes
        button.classList.toggle("active");

        // Change button text based on visibility of content
        if (content.classList.contains("hidden")) {
            button.textContent = "Show Details"; // Change text to "Show Details" when content is hidden
        } else {
            button.textContent = "Hide Details"; // Change text to "Hide Details" when content is visible
        }
    });
});
