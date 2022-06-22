
/* ============= SLIDER ============= */

let carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
    let slides = carousel.querySelectorAll(".carousel__slide");
    let slider = carousel.querySelector(".carousel__slider");
    let next = carousel.querySelector(".next");
    let previous = carousel.querySelector(".previous");
    width = 100;
    let start = 1;
    let interval;

    previous.onclick = () => moveSlide("previous", previous);
    next.onclick = () => moveSlide("next", next);

    // Adding  first and last
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    //  ADD   id name for each clone 
    firstClone.id = "firstClone";
    lastClone.id = "lastClone";
    // Add  clones to slider 
    slider.append(firstClone);
    slider.prepend(lastClone);

    // Getting the slides length 
    const getSlides = carousel.querySelectorAll(".carousel__slide");

    slider.style.transform = `translateX(${-start * width}%)`;


    // SlideShow Function 
    const slideShow = () =>
        interval = setInterval(() => moveSlide(), 5000);

    // Running   function  
    slideShow();

    // stop slidesShow on mouse hover  and rerun int on mouse out 
    carousel.addEventListener('mouseenter', () => {
        clearInterval(interval)
        window.addEventListener('keyup', function (event) {
            console.log(event.key)
            if (event.key === "ArrowLeft") previous.click();
            else if (event.key === "ArrowRight") next.click();
        })
    });
    carousel.addEventListener('mouseleave', slideShow);



    //   create the smooth infinte loop 
    slider.addEventListener("transitionend", () => {
        if (getSlides[start].id === firstClone.id) {
            start = 1;
            slider.style.transition = "none";
            slider.style.transform = `translateX(${-start * width}%)`;
        }
        if (getSlides[start].id === lastClone.id) {
            slider.style.transition = "none";
            start = getSlides.length - 2;
            slider.style.transform = `translateX(${-width * start}%`;
        }
    });
    // create the function that moves slides accordion to direction
    function moveSlide(dir = "next", el = next) {
        if (dir === "next") {
            if (start >= getSlides.length - 1) return;
            start++;
            slider.style.transition = "all .5s ease-in-out";
            slider.style.transform = `translateX(${-start * width}%)`;
            delay(el)
        }
        else if (dir === "previous") {
            if (start === 0) return;
            start--;
            slider.style.transition = "all .5s ease-in-out";
            slider.style.transform = `translateX(${-start * width}%)`;
            delay(el);
        }
        // disabling arrows for sometime after click an reenable them
        function delay(ele) {
            if (ele) {
                ele.classList.add("delay");
                setTimeout(() => ele.classList.remove("delay"), 400);
            }
        }
    }
});
