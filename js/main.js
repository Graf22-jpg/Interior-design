document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    // Фіксація шапки
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Бургер меню
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Логіка для дропдаунів на мобільних (щоб не закривало все меню)
        const dropdowns = document.querySelectorAll('.dropdown > a');
        dropdowns.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // Зупиняємо перехід за посиланням
                    e.stopPropagation();
                    link.parentElement.classList.toggle('mobile-open');
                }
            });
        });

        // Закриття меню при кліку на звичайні посилання
        const navLinks = document.querySelectorAll('.nav__list > li > a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && !link.parentElement.classList.contains('dropdown')) {
                    burgerBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Пагінація відгуків
    const dots = document.querySelectorAll(".testimonials-pagination .dot");
    const pages = document.querySelectorAll(".testimonials-page");

    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener("click", function () {
                dots.forEach(d => d.classList.remove("active"));
                pages.forEach(p => p.classList.remove("active"));
                this.classList.add("active");
                const pageId = `testimonials-p${this.getAttribute("data-page")}`;
                const targetPage = document.getElementById(pageId);
                if (targetPage) targetPage.classList.add("active");
            });
        });
    }
});