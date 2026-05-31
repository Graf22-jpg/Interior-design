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

const navLinks = document.querySelectorAll('.nav__list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            if (burgerBtn) burgerBtn.classList.remove('active');
            if (nav) nav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});

const projects = [
    { title: "Скандинавська вітальня", category: "Житловий інтер'єр", img: "assets/img/project1.webp" },
    { title: "Мінімалістична кухня", category: "Кухні", img: "assets/img/project2.webp" },
    { title: "Сучасний офіс", category: "Комерційний інтер'єр", img: "assets/img/project3.webp" },
    { title: "Затишна спальня", category: "Житловий інтер'єр", img: "assets/img/project4.webp" }
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

function initReviews() {
    const reviewForm = document.getElementById('review-form');
    const reviewsGrid = document.getElementById('reviews-grid');

    if (!reviewForm || !reviewsGrid) return;

    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('review-name');
        const textInput = document.getElementById('review-text');
        let isValid = true;

        if (nameInput.value.trim().length < 2) {
            nameInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            nameInput.parentElement.classList.remove('error');
        }

        if (textInput.value.trim().length < 10) {
            textInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            textInput.parentElement.classList.remove('error');
        }

        if (isValid) {
            const newCard = document.createElement('div');
            newCard.className = 'service-card reveal';
            
            newCard.innerHTML = `
                <h3>${nameInput.value.trim()}</h3>
                <p style="color: #ffcc00; margin-bottom: 10px;">★★★★★</p>
                <p>${textInput.value.trim()}</p>
            `;
            
            reviewsGrid.insertBefore(newCard, reviewsGrid.firstChild);
            
            reviewForm.reset();
            alert('Дякуємо! Ваш відгук успішно опубліковано.');
            
            initReveal();
        }
    });
}

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
    initReviews();
    initReveal();
});