/* ================= */
/* DARK MODE SALVO */
/* ================= */
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}

function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

/* ================= */
/* MENU */
/* ================= */
menuBtn.onclick = () => menu.classList.toggle("active");

/* ================= */
/* FAKE API + LOADING */
/* ================= */
const coursesDiv = document.getElementById("courses");

async function loadCourses() {
  coursesDiv.innerHTML = "Carregando...";

  await new Promise(r => setTimeout(r, 1000));

  const data = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JS" }
  ];

  coursesDiv.innerHTML = "";

  data.forEach(c => {
    coursesDiv.innerHTML += `<div class="card">${c.name}</div>`;
  });
}

loadCourses();

/* ================= */
/* CARROSSEL AUTO */
/* ================= */
const slides = ["Top curso!", "Muito bom!", "Recomendo"];
let i = 0;

function show() {
  slide.innerText = slides[i];
}

function next() {
  i = (i + 1) % slides.length;
  show();
}

function prev() {
  i = (i - 1 + slides.length) % slides.length;
  show();
}

setInterval(next, 3000);
show();

/* ================= */
/* TABS */
/* ================= */
document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  };
});

/* ================= */
/* ACCORDION */
/* ================= */
document.querySelectorAll(".acc").forEach(btn => {
  btn.onclick = () => {
    const c = btn.nextElementSibling;
    c.style.display = c.style.display === "block" ? "none" : "block";
  };
});

/* ================= */
/* MODAL */
/* ================= */
function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

/* ================= */
/* FORM */
/* ================= */
form.onsubmit = e => {
  e.preventDefault();
  showToast("Enviado com sucesso!");
};

/* ================= */
/* TOAST */
/* ================= */
function showToast(msg) {
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 3000);
}

/* ================= */
/* ACESSIBILIDADE */
/* ================= */
let size = 16;

function fontSize(s) {
  size += s;
  document.body.style.fontSize = size + "px";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}
