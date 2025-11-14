export default function initGaleria() {
  // Galeria de Bicicletas
  const galeria = document.querySelectorAll(".bicicleta-imagens img");
  const galeriaContainer = document.querySelector(".bicicleta-imagens");

  if (!galeriaContainer) return;

  galeria.forEach((img) => {
    img.addEventListener("click", (event) => {
      const img = event.currentTarget;
      const media = matchMedia("(min-width: 1000px)").matches;
      if (media) {
        galeriaContainer.prepend(img);
      }
    });
  });
}
