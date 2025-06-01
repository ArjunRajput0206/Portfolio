document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can process the form data here, such as sending it to a server
    alert(`Message sent from: ${name} (${email})\nMessage: ${message}`);

    // Clear form
    document.getElementById("contactForm").reset();
});
