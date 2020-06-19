
// Menu
const menuIcon = document.getElementById("menuIcon");
const mainNav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".closebtn");
const menu = document.getElementById("myNav");


menuIcon.addEventListener('click', () => { // on click of menu icon hide the main-nav background and icon
    menuIcon.style.display = "none";
    mainNav.style.backgroundColor = "transparent";
    menu.style.width = "100%";
    menu.style.transition = "all .8s";
})

closeBtn.addEventListener('click', () => { // on click of close button, show main-nav and menu button
    menuIcon.style.display = "block";
    mainNav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    menu.style.width = "0";
    menu.style.transition = "all .8s";
})



// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

