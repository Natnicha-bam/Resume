const menuItems = document.querySelectorAll(".menu li");
const sections = document.querySelectorAll("section, footer");
const navbar = document.querySelector(".navbar");

let lastScroll = 0;

// ===== Click Menu =====
menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const target = document.getElementById(item.dataset.section);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

// ===== Scroll =====
window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // ซ่อน / แสดง Navbar
    if (currentScroll < 50) {

        navbar.classList.remove("hide");

    } else if (currentScroll > lastScroll) {

        navbar.classList.add("hide");

    } else {

        navbar.classList.remove("hide");

    }

    lastScroll = currentScroll;

    // Active Menu
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });

    menuItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.section === current) {

            item.classList.add("active");

        }

    });

});