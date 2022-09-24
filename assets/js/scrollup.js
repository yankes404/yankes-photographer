const scrollup = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollup.style.opacity = "1";
        scrollup.style.transform = "none";
    } else {
        scrollup.style.opacity = "0";
        scrollup.style.transform = "translate(100px)";
    }
})