const navbar = document.querySelector('.navbar');

// Smooth scrolling on clincking navbar itmes
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = navbar.offsetHeight;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    });
});

//  toggle menu on small screens 
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// on big screen the dropdown opens on hover but on small screen it need to opens on click
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {

        // run on small screens
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
});