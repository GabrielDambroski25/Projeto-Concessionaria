// === Alerta de login bem-sucedido ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      alert("Login bem-sucedido! 🚗");
      window.location.href = "index.html"; 
    });
  }
});

// === Efeito de digitação (caso exista a seção .sobre) ===
window.addEventListener("load", () => {
  const titulo = document.querySelector(".sobre h2");
  if (!titulo) return;

  const texto = titulo.textContent;
  titulo.textContent = "";
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      titulo.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 80);
    }
  }

  digitar();
});

// === Animação de scroll (caso exista .sobre) ===
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".sobre p, .sobre h2");
  if (!elements.length) return;

  function showOnScroll() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 60) {
        el.classList.add("show");
      }
    });
  }

  showOnScroll();
  window.addEventListener("scroll", showOnScroll);
});
