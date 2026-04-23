/* ===================== */
/* DADOS DINÂMICOS */
/* ===================== */
const courses = [
  { title: "HTML & CSS", desc: "Aprenda a criar sites" },
  { title: "JavaScript", desc: "Interatividade web" },
  { title: "React", desc: "Front-end moderno" }
];

const testimonials = [
  "Curso incrível!",
  "Aprendi muito rápido",
  "Muito didático!"
];

/* ===================== */
/* RENDERIZAÇÃO */
/* ===================== */
const container = document.getElementById("courses-container");

courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.desc}</p>
  `;

  container.appendChild(card);
});

/* ===================== */
/* CARROSSEL */
/* ===================== */
let index = 0;

function showSlide() {
  document.getElementById("carousel-content").innerText = testimonials[index];
}

function nextSlide() {
  index = (index + 1) % testimonials.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showSlide();
}

showSlide();

/* ===================== */
/* ACCORDION */
/* ===================== */
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

/* ===================== */
/* ACESSIBILIDADE */
/* ===================== */
let fontSize = 16;

function changeFontSize(step) {
  fontSize += step;
  document.body.style.fontSize = fontSize + "px";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

/* ===================== */
/* SCROLL REVEAL */
/* ===================== */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});
