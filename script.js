/* ===================== */
/* DARK/LIGHT MODE */
/* ===================== */
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light"));
};

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("light");
}

/* ===================== */
/* DADOS DINÂMICOS */
/* ===================== */
const features = [
  "Aulas práticas",
  "Certificado",
  "Acesso vitalício"
];

const courses = [
  "HTML & CSS",
  "JavaScript",
  "React"
];

const testimonials = [
  "Muito bom!",
  "Aprendi rápido",
  "Top demais"
];

/* ===================== */
/* RENDER */
/* ===================== */
const featureDiv = document.getElementById("features");
features.forEach(f => {
  featureDiv.innerHTML += `<div class="card">${f}</div>`;
});

const courseList = document.getElementById("courseList");
courses.forEach(c => {
  courseList.innerHTML += `<div class="card">${c}</div>`;
});

/* ===================== */
/* CARROSSEL */
/* ===================== */
let i = 0;
const track = document.getElementById("carouselTrack");

function renderSlide() {
  track.innerHTML = `<div class="card">${testimonials[i]}</div>`;
}

document.getElementById("next").onclick = () => {
  i = (i + 1) % testimonials.length;
  renderSlide();
};

document.getElementById("prev").onclick = () => {
  i = (i - 1 + testimonials.length) % testimonials.length;
  renderSlide();
};

renderSlide();

/* ===================== */
/* FORM */
/* ===================== */
document.getElementById("form").onsubmit = e => {
  e.preventDefault();
  showToast("Mensagem enviada!");
};

/* ===================== */
/* TOAST */
/* ===================== */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}
