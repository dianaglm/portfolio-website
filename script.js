const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll("navbar.link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [80, 70, 20, 80, 0, 0, 40];

window.addEventListener("scroll",() => {
    if(window.pageYOffset >= navbarOffsetTop)
    {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

    if(window.pageYOffset + window.innerHeight >= 
        progress.offsetTop){
            document.querySelectorAll(".progress-percent").forEach
            ((el, i) => {
                el.style.width = `${progressBarPercents[i]}%`;

            });
        }
});