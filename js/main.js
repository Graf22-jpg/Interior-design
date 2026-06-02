document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav__list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

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
                if (targetPage) {
                    targetPage.classList.add("active");
                }
            });
        });
    }
});