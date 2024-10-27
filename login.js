const container=document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');
registerBtn.addEventListener('click',() =>{
    container.classList.add('active');
});

loginBtn.addEventListener('click',() =>{
    container.classList.remove('active');
});

document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    localStorage.setItem('login-username', username);
    localStorage.setItem('login-password', password);

    console.log('Stored Login Username:', localStorage.getItem('login-username'));
    console.log('Stored Login Password:', localStorage.getItem('login-password'));
    alert('Logged in successfully!');

    // Clear inputs
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});

// Function to store registration form data
document.getElementById('registerform').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    localStorage.setItem('register-username', username);
    localStorage.setItem('register-email', email);
    localStorage.setItem('register-password', password);

    console.log('Stored Registration Username:', localStorage.getItem('register-username'));
    console.log('Stored Registration Email:', localStorage.getItem('register-email'));
    console.log('Stored Registration Password:', localStorage.getItem('register-password'));
    alert('user registered successfully!');

    // Clear inputs
    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
});
