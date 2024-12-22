// accordion.js
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            const openItem = document.querySelector(".accordion-item.active");
            if (openItem && openItem !== item) {
                openItem.classList.remove("active");
            }

            item.classList.toggle("active");
        });
    });
});
