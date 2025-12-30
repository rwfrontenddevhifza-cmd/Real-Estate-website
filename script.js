var search_btn = document.querySelectorAll(".search-btn");

search_btn.forEach(searchbtn => {

    searchbtn.addEventListener("click", () => {
        search_btn.forEach((btn) => btn.classList.remove("active"));
        searchbtn.classList.add("active");
    })
})


///////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".feature-menu-list button");
    const cards = document.querySelectorAll(".productcard");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const tab = button.dataset.tab;

            cards.forEach(card => {

                if (tab === "tab-1") {
                    card.closest(".feature-tab").style.display = "block";
                } 
                else if (card.dataset.tab === tab) {
                    card.closest(".feature-tab").style.display = "block";
                } 
                else {
                    card.closest(".feature-tab").style.display = "none";
                }

            });

        });
    });

});

///////////// slider ///////////////

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {

var slider = new Swiper(".testimonial-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
})
///////////////////////////////////////////
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav-container");

openBtn.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)";
});