// JavaScript to add interactivity

// Function to display a dynamic greeting based on the time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage = 'Welcome to My Webpage';
    if (currentHour < 12) {
        greetingMessage = 'Good Morning! Welcome to My Webpage';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon! Welcome to My Webpage';
    } else {
        greetingMessage = 'Good Evening! Welcome to My Webpage';
    }

    greetingElement.textContent = greetingMessage;
}

// Function to display an alert when the contact button is clicked
function setupContactButton() {
    const contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', () => {
        alert('Thank you for reaching out! We will get back to you shortly.');
    });
}

// Initialize the JavaScript features after the page loads
document.addEventListener('DOMContentLoaded', () => {
    setGreeting();
    setupContactButton();
});
