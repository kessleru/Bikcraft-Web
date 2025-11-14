export default function initPerguntasFrequentes() {
  // Perguntas Frequentes
  const perguntas = document.querySelectorAll(".perguntas button");

  if (!perguntas.length) return;

  function ativarPerguntas(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");

    pergunta.setAttribute("aria-expanded", ativa);
  }

  function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPerguntas);
  }

  perguntas.forEach(eventosPerguntas);
}
