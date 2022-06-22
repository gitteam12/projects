const
    accordion__items =
        [...document.querySelectorAll(" .accordion .accordion__item")];
accordion__items[0].querySelector('.accordion__body').style.height =
    accordion__items[0].querySelector('.accordion__body').scrollHeight + "px";
console.log(accordion__items[0].querySelector('.accordion__body'));
accordion__items.forEach((item) => {
    header = item.querySelector(".accordion__header");
    header.addEventListener("click", () => {
        opened = document.querySelector(".accordion__item.open");
        toggler(item);
        if (opened && opened !== item) {
            toggler(opened);
        }
    });
});

function toggler(item) {
    let accordion__body = item.querySelector(".accordion__body");
    if (accordion__body) { // if 
        if (!item.classList.contains('open')) {
            item.classList.add("open");
            accordion__body.style.height = accordion__body.scrollHeight + "px";
        } else {
            item.classList.remove("open");
            accordion__body.style.height = "0px";
        }
    }
}




/* ========== TOGGLE  THEME ========= */
let themeToggler = document.querySelector('.theme__toggler');
themeToggler.addEventListener("click", () => {
    themeToggler.classList.toggle('active');
    document.body.classList.toggle('dark__theme')
})

/* ========= SCROLL  REVEAL ========= */
let sections = document.querySelectorAll('.section');
window.addEventListener('scroll', (e) => {

    /* ======= NAVBAR TOGGLER ======= */
    let pageTop = document.documentElement.scrollTop;
    if (pageTop > 300) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
    /* ======== LINKS  REVEAL ======= */
    sections.forEach(section => {
        let id = section.id;
        console.log(pageTop)
        console.log("pageTop ==> ", pageTop, "offsetTop ==>", section.offsetTop)
        if (pageTop + 100 >= section.offsetTop) {
            document.querySelectorAll('.nav__link').forEach(a => a.classList.remove('active'));
            document.querySelector(`.nav__link[href=#${id}]`).classList.add('active')

        }
    })
})


