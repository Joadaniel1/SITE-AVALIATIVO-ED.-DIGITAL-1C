/* ===================== */
/* DADOS MAIS COMPLETOS */
/* ===================== */
const courses = [
  { name: "HTML", level: "Iniciante", desc: "Aprenda estrutura web" },
  { name: "CSS", level: "Intermediário", desc: "Estilização moderna" },
  { name: "JavaScript", level: "Avançado", desc: "Lógica e interatividade" }
];

const testimonials = [
  "Muito bom!",
  "Aprendi rápido!",
  "Top demais!"
];

/* ===================== */
/* RENDER CURSOS */
/* ===================== */
const list = document.getElementById("courseList");

function renderCourses(data) {
  list.innerHTML = "";

  data.forEach(c => {
    list.innerHTML += `
      <div class="card">
        <h3>${c.name}</h3>
        <p>${c.level}</p>
        <button onclick="openModal('${c.name}','${c.desc}')">
          Ver mais
        </button>
      </div>
    `;
  });
}

renderCourses(courses);

/* ===================== */
/* BUSCA */
/* ===================== */
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = courses.filter(c =>
    c.name.toLowerCase().includes(value)
  );

  renderCourses(filtered);
});

/* ===================== */
/* MODAL */
/* ===================== */
function openModal(title, desc) {
  modal.style.display = "flex";
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}

function closeModal() {
  modal.style.display = "none";
}

/* ===================== */
/* CARROSSEL */
/* ===================== */
let i = 0;

function show() {
  slide.innerText = testimonials[i];
}

function next() {
  i = (i + 1) % testimonials.length;
  show();
}

function prev() {
  i = (i - 1 + testimonials.length) % testimonials.length;
  show();
}

show();

/* ===================== */
/* FORM MELHORADO */
/* ===================== */
form.onsubmit = e => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  if (inputs[0].value.length < 3) {
    showToast("Nome muito curto");
    return;
  }

  if (!inputs[1].value.includes("@")) {
    showToast("Email inválido");
    return;
  }

  showToast("Mensagem enviada com sucesso!");
  form.reset();
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
  }, 2500);
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
