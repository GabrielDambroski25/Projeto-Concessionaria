/* =====================================================
                      MaxCarros - JS
   ===================================================== */


// =============== ANIMAÇÃO DE ENTRADA DOS CARROS ===============

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".carro-card");

  // estado inicial
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // animação de entrada
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150);
  });
});


// ANIMAÇÃO AO PASSAR O MOUSE NOS CARROS
const carros = document.querySelectorAll(".carro-card");

carros.forEach((carro) => {
  carro.addEventListener("mouseenter", () => {
    carro.style.transition = "transform 0.3s ease, filter 0.3s ease";
    carro.style.transform = "scale(1.08)";
    carro.style.filter = "brightness(1.2)";
  });

  carro.addEventListener("mouseleave", () => {
    carro.style.transform = "scale(1)";
    carro.style.filter = "brightness(1)";
  });
});


// PAGINA DE CONFIRMAÇÃO DO "FALE CONOSCO"
document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const url = `confirmacao.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&mensagem=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    alert("Login bem-sucedido! 🚗");

    
    window.location.href = "index.html";
  });
});
