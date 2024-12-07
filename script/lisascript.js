document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Validate name
    if (!name.value || !/^[a-zA-Z\s]+$/.test(name.value)) {
        alert('Please enter a valid name (only letters and spaces are allowed).');
        return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate message
    if (!message.value || message.value.length < 10) {
        alert('Please provide a message with at least 10 characters.');
        return;
    }

    // If all validations pass, show success message
    successMessage.classList.remove('d-none');
    successMessage.style.display = 'block'; // Ensure it becomes visible
    successMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';

    //RESET FORM
    setTimeout(function() {
    successMessage.classList.add('d-none');
    successMessage.style.display = 'none';
}, 5000); // Hide after 5 seconds
});
