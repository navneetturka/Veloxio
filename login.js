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
    window.location.href = 'main.html';
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
     window.location.href = 'main.html'; 
    // Clear inputs
    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
});


//navbar

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
