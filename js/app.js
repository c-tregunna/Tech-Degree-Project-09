
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


// Validate form
const send = document.querySelector('#show');
send.addEventListener('click', e => {
  let validateName = document.querySelector('#name').value;
  let validateEmail = document.querySelector('#email').value;
  let validateMessage = document.querySelector('#message').value;

  let form = document.getElementById('form');

  const formAlert = document.getElementById('form-alert');
  const alertExit = document.getElementById('alert-exit');
  const formConfirm = document.getElementById('form-confirm');
  const confirmExit = document.getElementById('confirm-exit');


  e.preventDefault();
    if (validateName === "" || validateEmail === "" || validateMessage === "") {
        formAlert.style.display = "block"; // show the alert that form must be complete
        alertExit.addEventListener('click', e => {
            formAlert.style.display = "none";
        })
    } else {
        formConfirm.style.display = "block";  // show the alert that form has been submitted
        confirmExit.addEventListener('click', e => {
            formConfirm.style.display = "none";
        })
        form.reset(); // resets input and text area
        console.log(validateName);
    }});



    //jQuery validate form

// const send = document.querySelector('#show');
// send.addEventListener('click', e => {
//   let validateName = $('input[name="name"]').val();
//   let validateEmail = $('input[name="email"]').val();
//   let validateMessage = $('textarea[name="message"]').val();
//   e.preventDefault();
//     if (validateName === "" || validateEmail === "" || validateMessage === "") {
//       $('#form-alert').show(); // show the alert that form must be complete
//       $('#alert-exit').on('click', () => {
//         $('#form-alert').hide();
//       });
//     } else {
//       $('#form-confirm').show(); // show the alert that form has been submitted
//       $('#confirm-exit').on('click', () => {
//         $('#form-confirm').hide();
//         $('#form').trigger("reset"); // resets input and text area
//       });
//     }
// });



// code from menu
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }

  // function closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }

