
//----------------------
// Menu slide in and out
//----------------------

const menuIcon = document.getElementById("menuIcon");
const mainNav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".closebtn");
const menu = document.getElementById("myNav");
const links = document.querySelector(".overlay-content");

menuIcon.addEventListener('click', () => { // on click of menu icon hide the main-nav background and icon
    menuIcon.style.display = "none";
    mainNav.style.backgroundColor = "transparent";
    mainNav.style.transition = "all 1s"
    menu.style.width = "100%";
    menu.style.transition = "all .8s";
});

function menuHide(callback) {
    menuIcon.style.display = "block";
    mainNav.style.backgroundColor = "#ecf0f1";
    mainNav.style.transition = "all 1s"
    menu.style.width = "0";
    menu.style.transition = "all .8s";
};

closeBtn.addEventListener('click', () => { // on click of close button, show main-nav and menu button
    menuHide();
});

links.addEventListener('click', () => { // on click of links, show main-nav and menu button
    menuHide();
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
            data: [45, 40, 15]
        }]
    },

    // Configuration options go here
    options: {
    }
});

//-------------------------------
// Show current year for copywrite
//-------------------------------

let today = new Date();
let year = today.getFullYear();
let currentYear = document.querySelector('#date');
currentYear.innerHTML = year;

