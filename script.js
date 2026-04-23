/* ================= */
/* ESTADO GLOBAL */
/* ================= */
let user = localStorage.getItem("user");
let fav = JSON.parse(localStorage.getItem("fav")) || [];

const courses = [
  { name: "HTML", level: "Iniciante" },
  { name: "CSS", level: "Iniciante" },
  { name: "JavaScript", level: "Avançado" },
  { name: "React", level: "Avançado" }
];

/* ================= */
/* INIT */
/* ================= */
window.onload = () => {
  updateUserUI();
  loadData();
};

/* ================= */
/* LOADING */
/* ================= */
function loadData() {
  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";
    renderCourses(courses);
    renderFav();
  }, 800);
}

/* ================= */
/* LOGIN */
/* ================= */
loginBtn.onclick = () => {
  loginModal.style.display = "flex";
};

function handleLogin() {
  const name = userInput.value;

  if (name.length < 3) {
    showToast("Nome inválido");
    return;
  }

  localStorage.setItem("user", name);
  user = name;

  loginModal.style.display = "none";
  updateUserUI();
  showToast("Logado com sucesso");
}

function logout() {
  localStorage.removeItem("user");
  user = null;
  updateUserUI();
  showToast("Saiu da conta");
}

/* ================= */
/* UI USER */
/* ================= */
function updateUserUI() {
  if (user) {
    userArea.innerHTML = `<span>Olá, ${user}</span>`;
    welcome.innerText = "Bem-vindo " + user;
  } else {
    userArea.innerHTML = `<button id="loginBtn">Entrar</button>`;
    document.getElementById("loginBtn").onclick = () => {
      loginModal.style.display = "flex";
    };
  }
}

/* ================= */
/* CURSOS */
/* ================= */
function renderCourses(data) {
  courseList.innerHTML = "";

  data.forEach(c => {
    const isFav = fav.includes(c.name);

    courseList.innerHTML += `
      <div class="card">
        <h3>${c.name}</h3>
        <p>${c.level}</p>
        <button onclick="toggleFav('${c.name}')">
          ${isFav ? "★" : "☆"}
        </button>
      </div>
    `;
  });
}

/* ================= */
/* FAVORITOS */
/* ================= */
function toggleFav(name) {
  if (fav.includes(name)) {
    fav = fav.filter(f => f !== name);
  } else {
    fav.push(name);
  }

  localStorage.setItem("fav", JSON.stringify(fav));

  renderCourses(courses);
  renderFav();
}

function renderFav() {
  favList.innerHTML = "";
  count.innerText = fav.length;

  fav.forEach(f => {
    favList.innerHTML += `<div class="card">${f}</div>`;
  });
}

/* ================= */
/* FILTRO + BUSCA */
/* ================= */
search.oninput = apply;
filter.onchange = apply;

function apply() {
  let data = courses;

  if (search.value) {
    data = data.filter(c =>
      c.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  if (filter.value) {
    data = data.filter(c => c.level === filter.value);
  }

  renderCourses(data);
}

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
