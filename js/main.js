document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const dropdowns = document.querySelectorAll('.dropdown > a');
        dropdowns.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    link.parentElement.classList.toggle('mobile-open');
                }
            });
        });

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

    const dots = document.querySelectorAll(".testimonials-pagination .dot");
    const pages = document.querySelectorAll(".testimonials-page");

    if (dots.length > 0 && pages.length > 0) {
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

    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;

            const nameInput = document.getElementById('name');
            if (nameInput) {
                const nameGroup = nameInput.closest('.contact-input-group');
                if (nameInput.value.trim().length < 2) {
                    nameGroup.classList.add('invalid');
                    nameGroup.querySelector('.form-error-msg').classList.add('active');
                    isValid = false;
                } else {
                    nameGroup.classList.remove('invalid');
                    nameGroup.querySelector('.form-error-msg').classList.remove('active');
                }
            }

            const emailInput = document.getElementById('email');
            if (emailInput) {
                const emailGroup = emailInput.closest('.contact-input-group');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    emailGroup.classList.add('invalid');
                    emailGroup.querySelector('.form-error-msg').classList.add('active');
                    isValid = false;
                } else {
                    emailGroup.classList.remove('invalid');
                    emailGroup.querySelector('.form-error-msg').classList.remove('active');
                }
            }

            const messageInput = document.getElementById('message');
            if (messageInput) {
                const messageGroup = messageInput.closest('.contact-input-group');
                if (messageInput.value.trim().length < 5) {
                    messageGroup.classList.add('invalid');
                    messageGroup.querySelector('.form-error-msg').classList.add('active');
                    isValid = false;
                } else {
                    messageGroup.classList.remove('invalid');
                    messageGroup.querySelector('.form-error-msg').classList.remove('active');
                }
            }

            if (isValid && successModal) {
                successModal.classList.add('active');
                contactForm.reset();
            }
        });
    }

    if (closeSuccessModal && successModal) {
        closeSuccessModal.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }

    const projectsContainer = document.getElementById('dynamic-projects-container');
    
    const projectsData = [
        { id: 1, image: 'assets/img/p1.webp', alt: 'Project 1' },
        { id: 2, image: 'assets/img/p2.webp', alt: 'Project 2' },
        { id: 3, image: 'assets/img/p3.webp', alt: 'Project 3' },
        { id: 4, image: 'assets/img/p4.webp', alt: 'Project 4' },
        { id: 5, image: 'assets/img/p5.webp', alt: 'Project 5' }
    ];

    if (projectsContainer) {
        projectsContainer.innerHTML = ''; 
        let projectsHTML = '';
        
        projectsData.forEach(project => {
            projectsHTML += `
                <div class="work-item">
                    <img src="${project.image}" alt="${project.alt}">
                </div>
            `;
        });
        
        projectsContainer.innerHTML = projectsHTML;
    }
});