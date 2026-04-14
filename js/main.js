/**
 * 1. КЕРУВАННЯ МОБІЛЬНИМ МЕНЮ
 */
const burgerBtn = document.getElementById('burger-btn');
const nav = document.querySelector('.nav');
const body = document.body;

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
}

// Закриття меню ТІЛЬКИ при кліку на мобілці
const navLinks = document.querySelectorAll('.nav__list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Перевіряємо, чи зараз активний мобільний вигляд (бургер видимий)
        if (window.innerWidth <= 768) {
            if (burgerBtn) burgerBtn.classList.remove('active');
            if (nav) nav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});

/**
 * 2. ДИНАМІЧНЕ ПОРТФОЛІО
 */
const projects = [
    { title: "Скандинавська вітальня", category: "Житловий інтер'єр", img: "img/project1.webp" },
    { title: "Мінімалістична кухня", category: "Кухні", img: "img/project2.webp" },
    { title: "Сучасний офіс", category: "Комерційний інтер'єр", img: "img/project3.webp" },
    { title: "Затишна спальня", category: "Житловий інтер'єр", img: "img/project4.webp" }
];

function displayProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = "";
    projects.forEach(project => {
        const projectHTML = `
            <div class="project-card reveal">
                <div class="project-card__img">
                    <img src="${project.img}" alt="${project.title}">
                </div>
                <div class="project-card__info">
                    <h3>${project.title}</h3>
                    <p>${project.category}</p>
                </div>
            </div>
        `;
        portfolioGrid.innerHTML += projectHTML;
    });
    initReveal(); 
}

/**
 * 3. ВАЛІДАЦІЯ ФОРМИ
 */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value.trim().length < 2) {
            nameInput.parentElement.classList.add('error');
            isValid = false;
        } else { nameInput.parentElement.classList.remove('error'); }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.parentElement.classList.add('error');
            isValid = false;
        } else { emailInput.parentElement.classList.remove('error'); }

        if (messageInput.value.trim().length < 5) {
            messageInput.parentElement.classList.add('error');
            isValid = false;
        } else { messageInput.parentElement.classList.remove('error'); }

        if (isValid) {
            alert('Дякуємо, ' + nameInput.value + '! Ваша заявка успішно надіслана.');
            contactForm.reset();
        }
    });
}

/**
 * 4. АНІМАЦІЯ ПОЯВИ (REVEAL)
 */
function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    initReveal();
});