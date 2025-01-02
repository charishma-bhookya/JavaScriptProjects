document.addEventListener('DOMContentLoaded', () => {
    const welcomeDiv = document.querySelector('.welcome');
    const loginForm = document.querySelector('.loginform');

    console.log(welcomeDiv, loginForm); // Check if elements are correctly selected

    welcomeDiv.addEventListener('click', () => {
        console.log("Welcome button clicked"); // Verify click event
        welcomeDiv.classList.add('hide'); // Add the hide class to move the Welcome text
        loginForm.classList.add('show-login'); // Add the show-login class to slide the login form
    });
});
