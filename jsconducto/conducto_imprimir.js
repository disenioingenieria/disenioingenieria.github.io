export default function conductoImprimir(formConducto, containerValidaDatosConducto, footer, menu, textoSumaRestaCaidas, nombreDeLaObra, obra){
    const d = document,
      $formConducto = d.querySelector(formConducto),
      $containerValidaDatosConducto = d.querySelector(containerValidaDatosConducto),
      $footer = d.querySelector(footer),
      $menu = d.querySelector(menu),
      $textoSumaRestaCaidas = d.querySelector(textoSumaRestaCaidas),
      $nombreDeLaObra = d.querySelector(nombreDeLaObra),
      $obra = d.querySelector(obra);

      console.log($nombreDeLaObra.value);//al ser un input, tiene que se un value no un textContent

      d.querySelector(".obra").textContent = `Obra: ${$nombreDeLaObra.value}`;
    
      $formConducto.classList.add("none");
      $containerValidaDatosConducto.classList.add("none");
      $footer.classList.add("none");
      $menu.classList.add("none");
      $textoSumaRestaCaidas.classList.add("none");
      $obra.classList.remove("none");
    
    d.querySelector(".tabla").classList = "imprimir";
      print();
    
      location.reload();
    
    }