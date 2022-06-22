let body = document.body,
    log = (...texts) => console.log(texts.join(" ")),
    upper = (...texts) => texts.join(" ").toUpperCase(),
    lower = (...texts) => texts.join(" ").toLowerCase(),
    floor = (e) => Math.floor(e),
    round = (e) => Math.round(e),
    ceil = (e) => Math.ceil(e),
    trunc = (e) => Math.trunc(e),
    random = () => Math.random(),
    createElement = (e) => document.createElement(e),
    createTextNode = (e) => document.createTextNode(e),
    querySelector = (e) => document.querySelector(e),
    querySelectorAll = (e) => document.querySelectorAll(e),
    getElementById = (e) => document.getElementById(e),
    getElementsByClassName = (e) => document.getElementsByClassName(e);
/* -------------------------------------------- */
/* -------------------------------------------- */
let slides = querySelectorAll(".slider img"),
    ul = querySelector("ul"),
    next = querySelector(".nextbtn"),
    prev = querySelector(".prevbtn"),
    slidesCount = slides.length - 1,
    currentSlide = floor(slidesCount / 2);
for (i = 0; i <= slidesCount; i++) {
    li = createElement("li");
    ul.appendChild(li);
}
let dots = querySelectorAll("ul li");
next.onclick = nextFn;
prev.onclick = prevFn;
function prevFn() {
    if (currentSlide <= 0) {
        currentSlide = slidesCount;
        sliderFn(currentSlide);
    } else {
        currentSlide--;
        sliderFn(currentSlide);
    }
}

function nextFn() {
    if (currentSlide >= slidesCount) {
        currentSlide = 0;
        sliderFn(currentSlide);
    } else {
        currentSlide++;
        sliderFn(currentSlide);
    }
}
sliderFn(currentSlide);
dots.forEach((dot, i) => {
    dot.onclick = () => {
        currentSlide = i;
        sliderFn(currentSlide);
    };
});
window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") {
        prev.click();
    } else if (e.key === "ArrowRight") {
        next.click();
    }
});
function sliderFn(i) {
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    dots[i].classList.add("active");
    slides[i].classList.add("active");
}
