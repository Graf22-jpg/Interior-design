document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    // Функція плавного фарбування шапки сайту при скролі
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Логіка роботи мобільного меню (Бургер)
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Закриваємо меню при кліку на будь-яке посилання всередині
        const navLinks = document.querySelectorAll('.nav__list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Testimonials Pagination Logic
    const dots = document.querySelectorAll(".testimonials-pagination .dot");
    const pages = document.querySelectorAll(".testimonials-page");

    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener("click", function () {
                // Видаляємо active клас у всіх кнопок та сторінок
                dots.forEach(d => d.classList.remove("active"));
                pages.forEach(p => p.classList.remove("active"));

                // Додаємо active поточній кнопці
                this.classList.add("active");

                // Показуємо відповідну сторінку відгуків
                const pageId = `testimonials-p${this.getAttribute("data-page")}`;
                document.getElementById(pageId).classList.add("active");
            });
        });
    }
});