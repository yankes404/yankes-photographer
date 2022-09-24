const bars = document.querySelector(".bars");
const navbar = document.querySelector(".navbar");

let open = false;

bars.addEventListener("click", () => {
    if (open == true) closeNavbar();
    else openNavbar();
})

function openNavbar() {
    navbar.style.zIndex = "20";
    navbar.style.opacity = "1";
    bars.style.color = "var(--color-one)";

    open = true;
}

function closeNavbar() {
    navbar.style.zIndex = "-999";
    navbar.style.opacity = "0";
    bars.style.color = "#fff";

    open = false;
}