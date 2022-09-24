// Lightbox

const projectsBox = document.querySelector(".projects-box");
const body = document.querySelector("body");
const lightbox = document.querySelector(".lightbox");
const lightboxIMG = document.querySelector(".lightbox img");

const leftArrow = document.querySelector(".lightbox .lightbox-left-arrow")
const rightArrow = document.querySelector(".lightbox .lightbox-right-arrow")

const projectsCount = document.querySelectorAll(".project-box").length;

projectsBox.addEventListener("click", (e) => {
    openLightBox(e.target.id.slice(15))
})

const xmark = document.querySelector(".xmark");

xmark.addEventListener("click", () => {
    lightbox.style.display = "none";
    body.style.overflowY = "visible";
})

window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        lightbox.style.display = "none";
        body.style.overflowY = "visible";
    }
})

function openLightBox(imgid) {
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";

    let id = parseInt(imgid);

    body.style.overflowY = "hidden";
    lightbox.style.display = "grid";

    lightboxIMG.setAttribute("src", `assets/img/projects/${id}.webp`);

    if (id == 1) rightArrow.style.display = "block";
    else if (id == projectsCount) leftArrow.style.display = "block";
    else {
        leftArrow.style.display = "block";
        rightArrow.style.display = "block";
    }

    leftArrow.setAttribute("onclick", `openLightBox(${id - 1})`);
    rightArrow.setAttribute("onclick", `openLightBox(${id + 1})`);
}