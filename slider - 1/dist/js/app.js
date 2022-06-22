const Api = "https://api.github.com/users/ElzeroWebSchool/repos";


let carousel = document.querySelector('.carousel');
let slides = carousel.querySelectorAll('.slider .slide');
let slider = carousel.querySelector('.slider');
let nextBtn = carousel.querySelector(' .next');
let previousBtn = carousel.querySelector(' .previous');
let pagination = carousel.querySelector('.pagination');
let preview = 2;
let width = 100 / preview;
let paginationCount = slides.length - preview + 1;
let slideMover = slides[0]
let count = 0;
window.addEventListener('resize', () => { 
    if (matchMedia("765px")) { 
        preview = 1; 
    }
})
if (preview > 1) {

    slides.forEach(e => e.style.width = width + "%");
    slider.classList.add('active')
}
// Adding pagination items to page  ; 

for (let i = 1; i <= paginationCount; i++) {
    let li = document.createElement('li');
    li.classList.add('pagination-item');
    pagination.append(li);
}
// selection pagination itesms
let paginationItems = pagination.querySelectorAll('.pagination-item');
// adding class active to firdt pagination item
paginationItems[count].classList.add('active');
// add click event on  pagination item 
paginationItems.forEach((el, index) => el.addEventListener('click', () => {

    count = index;
    Mover(count);
}))
// run mover function
Mover(count);

nextBtn.onclick = () => moveSlide('next')
previousBtn.onclick = () => moveSlide("previous");


//  create the mover function ;
function Mover(index) {
    // moving the slide Mover 
    slideMover.style.marginLeft = `${-width * index}%`;
    function checkBullets() {
        let activated = pagination.querySelector('.pagination-item.active');
        let el = paginationItems[index];
        if (el && activated && activated !== el) {
            activated.classList.remove('active');
            el.classList.add('active')
        }
    }
    // run checke function
    checkBullets();
}
function moveSlide(dir) {
    if (dir === "next") {
        if (count >= slides.length - preview) return;
        else {
            count++;
            Mover(count);
        }
    } else if (dir === "previous") {
        if (count <= 0) return;
        else {
            count--;
            Mover(count);
        }
    }
}
