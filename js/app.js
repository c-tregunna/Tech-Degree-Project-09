
// Menu
const menuIcon = document.getElementById("menuIcon");
const mainNav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".closebtn");
const menu = document.getElementById("myNav");


menuIcon.addEventListener('click', () => { // on click of menu icon hide the main-nav background and icon
    menuIcon.style.display = "none";
    mainNav.style.backgroundColor = "transparent";
    mainNav.style.transition = "all 1s"
    menu.style.width = "100%";
    menu.style.transition = "all .8s";
});

closeBtn.addEventListener('click', () => { // on click of close button, show main-nav and menu button
    menuIcon.style.display = "block";
    mainNav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    mainNav.style.transition = "all 1s"
    menu.style.width = "0";
    menu.style.transition = "all .8s";
});

// Dialog box, decided not to use as may not always show in all browsers

const send = document.querySelector('#show');
send.addEventListener('click', e => {
  let validateName = $('input[name="name"]').val();
  let validateEmail = $('input[name="email"]').val();
  let validateMessage = $('textarea[name="message"]').val();
  e.preventDefault();
    if (validateName === "" || validateEmail === "" || validateMessage === "") {
      $('#form-alert').show(); // show the alert that form must be complete
      $('#alert-exit').on('click', () => {
        $('#form-alert').hide();
      });
    } else {
      $('#form-confirm').show(); // show the alert that form has been submitted
      $('#confirm-exit').on('click', () => {
        $('#form-confirm').hide();
        $('#form').trigger("reset"); // resets input and text area
      });
    }
    console.log(e);
});




// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }

  // function closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }

