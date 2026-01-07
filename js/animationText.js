document.addEventListener("DOMContentLoaded", function () {
  const textoElemento = document.getElementById("texto-digitando");
  const cursor = document.querySelector(".cursor");

  if (!textoElemento) return;

  // Texto que será digitado
  const textoCompleto =
    "Apaixonado por criar experiências web que conectam pessoas à tecnologia de forma natural e agradável.";

  // Configurações
  const velocidadeDigitacao = 50;
  let i = 0;

  // O cursor JÁ ESTÁ PISCANDO pelo CSS!
  // A animação já está configurada como infinite

  // Função para simular a digitação
  function digitarTexto() {
    if (i < textoCompleto.length) {
      textoElemento.textContent += textoCompleto.charAt(i);
      i++;
      setTimeout(digitarTexto, velocidadeDigitacao);
    }
    // Não precisa fazer nada especial com o cursor
    // Ele continua piscando infinitamente
  }

  // Iniciar após 1 segundo
  setTimeout(function () {
    digitarTexto();
  }, 1000);
});
