/* ================= */
/* LOGIN */
/* ================= */
function openLogin() {
  login.style.display = "flex";
}

function login() {
  const u = user.value;
  if (u.length < 3) {
    showToast("Usuário inválido");
    return;
  }

  localStorage.setItem("user", u);
  login.style.display = "none";
  showToast("Bem-vindo " + u);
}

/* ================= */
/* DADOS */
/* ================= */
let fav = JSON.parse(localStorage.getItem("fav")) || [];

const courses = [
  { name: "HTML", level: "Iniciante" },
  { name: "CSS", level: "Iniciante" },
  { name: "JavaScript", level: "Avançado" }
];

/* ================= */
/* RENDER */
/* ================= */
function render(listData) {
  courseList.innerHTML = "";

  listData.forEach(c => {
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
  render(courses);
  renderFav();
}

function renderFav() {
  favList.innerHTML = "";

  fav.forEach(f => {
    favList.innerHTML += `<div class="card">${f}</div>`;
  });
}

/* ================= */
/* FILTRO */
/* ================= */
search.oninput = applyFilter;
filter.onchange = applyFilter;

function applyFilter() {
  let data = courses;

  if (search.value) {
    data = data.filter(c =>
      c.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  if (filter.value) {
    data = data.filter(c => c.level === filter.value);
  }

  render(data);
}

/* ================= */
/* TOAST */
/* ================= */
function showToast(msg) {
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 2000);
}

/* INIT */
render(courses);
renderFav();
