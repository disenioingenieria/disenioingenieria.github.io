export default function calderinImprimir(containerCalcularDeNuevo, footer){
const d = document,
  $containerCalcularDeNuevo = d.querySelector(containerCalcularDeNuevo),
  $footer = d.querySelector(footer);

  $containerCalcularDeNuevo.classList.add("opacity");
  // $footer.classList.add("opacity");
  d.querySelector(".footer").classList.add("opacity");

  d.querySelectorAll(".container-datos-a-pantalla p").forEach((e) => 
    e.classList = "imprimir");

  print();

  location.reload();

}