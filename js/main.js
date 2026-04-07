/**
 * Керування мобільним меню (Burger Menu)
 */
const burgerBtn = document.getElementById('burger-btn');
const nav = document.querySelector('.nav');
const body = document.body;

// 1. Функція відкриття/закриття меню при кліку на бургер
burgerBtn.addEventListener('click', () => {
    // Перемикаємо клас 'active' для кнопки (анімація хрестика)
    burgerBtn.classList.toggle('active');
    // Перемикаємо клас 'active' для навігації (поява меню)
    nav.classList.toggle('active');
    // Блокуємо скрол сторінки, щоб користувач не міг гортати сайт під відкритим меню
    body.classList.toggle('no-scroll');
});

// 2. Закриття меню при кліку на будь-яке посилання
// Це потрібно, щоб після переходу на іншу сторінку або якір меню ховалося
const navLinks = document.querySelectorAll('.nav__list a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

/**
 * Логіка для модального вікна (Завдання на майбутнє)
 * Оскільки у вимогах є "miss click", ми підготуємо базу вже зараз
 */
const openModalBtn = document.getElementById('open-modal');

if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        alert('Форма замовлення консультації в розробці. Це буде наше завдання на 3-й тиждень!');
    });
}