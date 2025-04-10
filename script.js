function toggleMenu() {
    const menu = document.querySelector(".mobile-links");
    menu.classList.toggle("open");
}

document.addEventListener("click", function (event) {
    const menu = document.querySelector(".mobile-links");
    const toggleButton = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove("open");
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
