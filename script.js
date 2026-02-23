let hamburger = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav-links");
let navigation = document.querySelectorAll(".nav-links a");
let closenav = document.querySelector("#close");


hamburger.addEventListener('click',function () {
   if(nav.style.display = "none"){
         nav.style.display = "flex"
      closenav.style.display = "flex"
      hamburger.style.display = "none"
   }
})

closenav.addEventListener("click",function () {
      if(nav.style.display = "flex"){
      closenav.style.display = "none"
      hamburger.style.display = "flex"
      nav.style.display = "none"
   }
    
})

navigation.forEach(function (click) {
    click.addEventListener("click",function () {
    nav.style.display = "none";
    closenav.style.display = "none";
    hamburger.style.display = "flex";
        
    })
    
})