const form = document.getElementById('signupForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add further validation or send data to a server here
});