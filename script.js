/* ================= */
/* DADOS */
/* ================= */
const courses = ["HTML", "CSS", "JavaScript"];
const testimonials = ["Muito bom!", "Gostei!", "Top!"];

/* ================= */
/* RENDER */
/* ================= */
const list = document.getElementById("courseList");

courses.forEach(c => {
  list.innerHTML += `<div class="card">${c}</div>`;
});

/* ================= */
/* CARROSSEL */
/* ================= */
let i = 0;

function show() {
  document.getElementById("slide").innerText = testimonials[i];
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

/* ================= */
/* FORM */
/* ================= */
form.onsubmit = e => {
  e.preventDefault();
  showToast("Enviado!");
};

/* ================= */
/* TOAST */
/* ================= */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
