/* ================= */
/* DADOS */
/* ================= */
let favorites = JSON.parse(localStorage.getItem("fav")) || [];

const courses = [
  { name: "HTML", desc: "Base da web" },
  { name: "CSS", desc: "Estilo moderno" },
  { name: "JavaScript", desc: "Interatividade" }
];

/* ================= */
/* RENDER */
/* ================= */
const list = document.getElementById("courseList");

function render(data) {
  list.innerHTML = "";

  data.forEach(c => {
    const fav = favorites.includes(c.name);

    list.innerHTML += `
      <div class="card">
        <h3>${c.name}</h3>
        <p>${c.desc}</p>

        <button onclick="openModal('${c.name}','${c.desc}')">
          Ver
        </button>

        <button onclick="toggleFav('${c.name}')">
          ${fav ? "★" : "☆"}
        </button>
      </div>
    `;
  });
}

render(courses);

/* ================= */
/* BUSCA */
/* ================= */
search.oninput = e => {
  const val = e.target.value.toLowerCase();

  const filtered = courses.filter(c =>
    c.name.toLowerCase().includes(val)
  );

  render(filtered);
};

/* ================= */
/* FAVORITOS */
/* ================= */
function toggleFav(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(f => f !== name);
  } else {
    favorites.push(name);
  }

  localStorage.setItem("fav", JSON.stringify(favorites));
  render(courses);
}

/* ================= */
/* MODAL */
/* ================= */
function openModal(title, desc) {
  modal.style.display = "flex";
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}

function closeModal() {
  modal.style.display = "none";
}

/* ================= */
/* CARROSSEL AUTO */
/* ================= */
const depo = ["Muito bom!", "Gostei!", "Top!"];
let i = 0;

function show() {
  slide.innerText = depo[i];
}

function next() {
  i = (i + 1) % depo.length;
  show();
}

function prev() {
  i = (i - 1 + depo.length) % depo.length;
  show();
}

setInterval(next, 3000);
show();

/* ================= */
/* SCROLL */
/* ================= */
function scrollToCourses() {
  document.getElementById("courses").scrollIntoView({
    behavior: "smooth"
  });
}

/* ================= */
/* FORM */
/* ================= */
form.onsubmit = e => {
  e.preventDefault();

  if (name.value.length < 3) {
    showToast("Nome inválido");
    return;
  }

  if (!email.value.includes("@")) {
    showToast("Email inválido");
    return;
  }

  showToast("Enviado!");
  form.reset();
};

/* ================= */
/* TOAST */
/* ================= */
function showToast(msg) {
  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

/* ================= */
/* ANIMAÇÃO */
/* ================= */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 50) {
      sec.classList.add("active");
    }
  });
});
