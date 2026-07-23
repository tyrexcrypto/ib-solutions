const faqs = document.querySelectorAll(".faq-item");
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

console.log(menuBtn);

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

menuBtn.addEventListener("click", () => {
  sideBar.classList.add("open");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  sideBar.classList.remove("open");
  overlay.classList.remove("show");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("open");
  overlay.classList.remove("show");
});

AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out",
});
