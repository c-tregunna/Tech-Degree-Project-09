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
    mainNav.style.transition = "all 1s";
    menu.style.width = "100%";
    menu.style.transition = "all .8s";
});

function menuHide(callback) {  // function for the menu overlay behaviour
    menuIcon.style.display = "block";
    mainNav.style.backgroundColor = "#ecf0f1";
    mainNav.style.transition = "all 1s";
    menu.style.width = "0";
    menu.style.transition = "all .8s";
}

closeBtn.addEventListener('click', () => { // on click of close button, show main-nav and menu button
    menuHide();
});

links.addEventListener('click', () => { // on click of links, show main-nav and menu button
    menuHide();
});

//----------------------
// Skills Chart
//----------------------

var ctx = document.getElementById('mySkills').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['HTML', 'CSS', 'Javascript', 'Sass', 'Bootstrap'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#ccc5b9ff',
            '#403d39ff',
            '#eb5e28ff',
            '#ecf0f1',
            '#252422ff'],
            data: [30, 28, 14, 15, 13]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Hover over the segments to see my skill set'
        }
    }
});

//-------------------------------
// Show current year for copywrite
//-------------------------------

let today = new Date();
let year = today.getFullYear();
let currentYear = document.querySelector('#date');
currentYear.innerHTML = year;

//-------------------------------
// Scroll through array of quotes
//-------------------------------

let quotes = [
    'If You Think Math is Hard Try Web Design - Pixxelznet',
    'It does not work, why? Oh it works....but why? - Every developer ever',
    'Website without visitors is like a ship lost in the horizon - Dr. Christopher Dayagdag',
    'If you can not explain it simply, you do no understand it well enough - Albert Einstein',
    'Digital design is like painting, except the paint never dries - Neville Brody'
];

const quote = document.querySelector('.quote');
let index = 0;
const nextQuote = document.querySelector('.next');
const prevQuote = document.querySelector('.prev');

quote.innerHTML = quotes[index]; //Print first value of array right away.

function nextElement(callback) {
    index = (index + 1) % (quotes.length);
    quote.innerHTML = quotes[index];
}

function prevElement(callback) {
    index = (index - 1) % (quotes.length);
    quote.innerHTML = quotes[index];
}

nextQuote.addEventListener('click', e => {
    nextElement();
})

prevQuote.addEventListener('click', e => {
    prevElement();
})

// for (var i = 0; i < quotes.length; i++) {
//     index += quotes[i];
//     quote.innerHTML = quotes[index + 1];
// }



