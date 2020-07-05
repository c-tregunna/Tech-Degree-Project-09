
//----------------------
// Menu slide in and out
//----------------------

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
    mainNav.style.backgroundColor = "#ecf0f1";
    mainNav.style.transition = "all 1s"
    menu.style.width = "0";
    menu.style.transition = "all .8s";
});

// Target the li's so on click the menu closes

//----------------------
// Skills Chart
//----------------------

var ctx = document.getElementById('mySkills').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['HTML', 'CSS', 'Javascript'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#ccc5b9ff',
            '#403d39ff',
            '#eb5e28ff'],
            data: [40, 40, 20]
        }]
    },

    // Configuration options go here
    options: {
    }
});

