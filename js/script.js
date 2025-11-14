import initGaleria from "./modules/galeria.js";
import initItensOrcamento from "./modules/itens-orcamento.js";
import initLinksMenu from "./modules/links-menu.js";
import initPerguntasFrequentes from "./modules/perguntas-frequentes.js";

initGaleria();
initItensOrcamento();
initLinksMenu();
initPerguntasFrequentes();

// Animação
if(window.SimpleAnime){
  new SimpleAnime();
}


