window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.scroll-image');
    images.forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (imagePosition < windowHeight - 100) {
            image.classList.add('visible');
        }
    });
});




    // Get the button
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Show the button when the user scrolls down 100px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };
    
    // When the user clicks on the button, scroll to the top of the document
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    });
    
    
    
    window.addEventListener('scroll', function() {
        const images = document.querySelectorAll('.scroll-image');
        images.forEach(image => {
            const imagePosition = image.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (imagePosition < windowHeight - 100) {
                image.classList.add('visible');
            }
        });
    });



    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }
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