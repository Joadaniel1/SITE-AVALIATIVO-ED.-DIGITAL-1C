/* ===================== */
/* FAKE API */
/* ===================== */
const courses = [
  { title: "HTML", level: "Iniciante" },
  { title: "CSS", level: "Intermediário" },
  { title: "JavaScript", level: "Avançado" }
];

/* ===================== */
/* RENDER */
/* ===================== */
const container = document.getElementById("courses-container");

function renderCourses(list) {
  container.innerHTML = "";
  list.forEach(c => {
    container.innerHTML += `
      <div class="card">
        <h3>${c.title}</h3>
        <p>${c.level}</p>
      </div>
    `;
  });
}

renderCourses(courses);

/* ===================== */
/* FILTRO */
/* ===================== */
document.getElementById("filter").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(value)
  );
  renderCourses(filtered);
});

/* ===================== */
/* MENU MOBILE */
/* ===================== */
document.querySelector(".menu-toggle").onclick = () => {
  document.querySelector(".menu").classList.toggle("active");
};

/* ===================== */
/* DARK MODE */
/* ===================== */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* ===================== */
/* CONTRASTE */
/* ===================== */
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

/* ===================== */
/* FONTE */
/* ===================== */
let size = 16;
function changeFontSize(step) {
  size += step;
  document.body.style.fontSize = size + "px";
}

/* ===================== */
/* FORM VALIDAÇÃO */
/* ===================== */
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name.length < 3) {
    showToast("Nome inválido");
    return;
  }

  if (!email.includes("@")) {
    showToast("Email inválido");
    return;
  }

  showToast("Mensagem enviada!");
});

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

/* ===================== */
/* SCROLL REVEAL */
/* ===================== */
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 50) {
      sec.classList.add("active");
    }
  });
});
