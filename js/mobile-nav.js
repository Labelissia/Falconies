const hamburger = document.querySelector(".hamburger-menu");
const navsub = document.querySelector(".nav-sub");
hamburger.addEventListener('click', () => {
hamburger.classList.toggle("change")
navsub.classList.toggle("nav-change")
});