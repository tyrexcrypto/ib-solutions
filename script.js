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

// Counter

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      const target = Number(el.dataset.target);

      const prefix = el.dataset.prefix || "";

      const suffix = el.dataset.suffix || "";

      let current = 0;

      const duration = 2000; // 2 seconds

      const fps = 60;

      const totalFrames = Math.round((duration / 1000) * fps);

      const increment = target / totalFrames;

      function updateCounter() {
        current += increment;

        if (current >= target) {
          el.textContent = `${prefix}${target}${suffix}`;

          return;
        }

        el.textContent = `${prefix}${Math.floor(current)}${suffix}`;

        requestAnimationFrame(updateCounter);
      }

      updateCounter();

      obs.unobserve(el);
    });
  },

  {
    threshold: 0.4,
  },
);

counters.forEach((counter) => observer.observe(counter));

const star = ` <svg
                      fill="orange"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <polygon
                            points="8 11.43 3.67 14 4.84 9.19 1 5.97 6.05 5.57 8 1 9.95 5.57 15 5.97 11.15 9.19 12.33 14 8 11.43"
                          ></polygon>
                        </g>
                      </g>
                    </svg>`;
const reviewStars = document.querySelectorAll(".review-stars");
reviewStars.forEach((container) => {
  container.innerHTML = star.repeat(5);
});
