export default function conductoEntraDatos (tipoConductoCircular, seleccionaTipoConducto, tipoConductoRectangular, textoConductoRectangularInoxidable, textoTipoConductoCircular, tipoConductoOval, textoTipoConductoOval, formConducto, textoConductoChapa, textoDiametrosConductoChapa, textoConductoPvc, textoDiametrosConductoPvc, diametroPvc, diametroChapa, diametroInox, textoConductoInox, textoDiametrosConductoInox, textoConductoFlexible, textoDiametrosConductoFlexible, diametroFlexible, tipoConductoRectangularPvc, seccionConductoPvc, textoConductoRectangularPvc, textoConductoRectangularGalvanizado, ladoMenor, ladoMayor, textoConductoOval, textoConductoRectangularClimaver, textoConductoRectangularClimaverPlus, textoConductoRectangularClimaverNeto){
  
  const d = document,
    $tipoConductoCircular = d.querySelector(tipoConductoCircular),
    $seleccionaTipoConducto = d.querySelector(seleccionaTipoConducto),
    $tipoConductoRectangular = d.querySelector(tipoConductoRectangular),
    $textoConductoRectangularInoxidable = d.querySelector(textoConductoRectangularInoxidable),
    // $textoTipoConductoCircular = d.querySelector(textoTipoConductoCircular),
    $tipoConductoOval = d.querySelector(tipoConductoOval),
    // $textoTipoConductoOval = d.querySelector(textoTipoConductoOval),
    $formConducto = d.querySelector(formConducto),
    $textoConductoChapa = d.querySelector(textoConductoChapa),
    $textoDiametrosConductoChapa = d.querySelector(textoDiametrosConductoChapa),
    $textoConductoPvc = d.querySelector(textoConductoPvc),
    $textoDiametrosConductoPvc = d.querySelector(textoDiametrosConductoPvc),
    $diametroPvc = d.querySelector(diametroPvc),
    $diametroChapa = d.querySelector(diametroChapa),
    $diametroInox = d.querySelector(diametroInox),
    $textoConductoInox = d.querySelector(textoConductoInox),
    $textoDiametrosConductoInox = d.querySelector(textoDiametrosConductoInox),
    $textoConductoFlexible = d.querySelector(textoConductoFlexible),
    $textoDiametrosConductoFlexible = d.querySelector(textoDiametrosConductoFlexible),
    $diametroFlexible = d.querySelector(diametroFlexible),
    // $tipoConductoRectangularPvc = d.querySelector(tipoConductoRectangularPvc),
    $seccionConductoPvc = d.querySelector(seccionConductoPvc),
    $textoConductoRectangularPvc = d.querySelector(textoConductoRectangularPvc),
    $textoConductoRectangularGalvanizado = d.querySelector(textoConductoRectangularGalvanizado),
    $ladoMenor = d.querySelector(ladoMenor),
    $ladoMayor = d.querySelector(ladoMayor),
    $textoConductoOval = d.querySelector(textoConductoOval),
    $textoConductoRectangularClimaver = d.querySelector(textoConductoRectangularClimaver),
    $textoConductoRectangularClimaverPlus = d.querySelector(textoConductoRectangularClimaverPlus),
    $textoConductoRectangularClimaverNeto = d.querySelector(textoConductoRectangularClimaverNeto);


  d.addEventListener("click", (e) => {

    if(e.target.matches("#conducto-circular")){//he de secionar el id del DOM desde quí no en la función
       $tipoConductoCircular.classList.remove("none");
      $seleccionaTipoConducto.classList.add("none");
    };
  
      if(e.target.matches("#conducto-circular-pvc")){
        $formConducto.classList.remove("none");
        $tipoConductoCircular.classList.add("none"); 
        $textoConductoPvc.classList.remove("none");
        $textoDiametrosConductoPvc.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $ladoMayor.classList.add("none");
        $ladoMenor.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroFlexible.classList.add("none");
      };

      if(e.target.matches("#conducto-circular-chapa")){
        $formConducto.classList.remove("none");
        $tipoConductoCircular.classList.add("none");
        $textoConductoChapa.classList.remove("none");
        $textoDiametrosConductoChapa.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $ladoMayor.classList.add("none");
        $ladoMenor.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroFlexible.classList.add("none");

 
      };

      if(e.target.matches("#conducto-circular-inox")){
        $formConducto.classList.remove("none");
        $tipoConductoCircular.classList.add("none"); 
        $textoConductoInox.classList.remove("none");
        $textoDiametrosConductoInox.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $ladoMayor.classList.add("none");
        $ladoMenor.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList.add("none");


      };

      if(e.target.matches("#conducto-circular-flexible")){
        $formConducto.classList.remove("none");
        $tipoConductoCircular.classList.add("none");
        $textoConductoFlexible.classList.remove("none");
        $textoDiametrosConductoFlexible.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $ladoMayor.classList.add("none");
        $ladoMenor.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");


      };

    if(e.target.matches("#conducto-rectangular")){//he de secionar el id del DOM desde quí no en la función
      $tipoConductoRectangular.classList.remove("none");
      $seleccionaTipoConducto.classList.add("none");
    };

      if(e.target.matches("#conducto-rectangular-pvc")){
        $formConducto.classList.remove("none");
        $tipoConductoRectangular.classList.add("none");
        $textoConductoRectangularPvc.classList.remove("none");
        $seccionConductoPvc.classList.remove("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
        $ladoMayor.classList.add("none");
        $ladoMenor.classList.add("none");
      };

      if(e.target.matches("#conducto-rectangular-galvanizado")){
        $formConducto.classList.remove("none");
        $tipoConductoRectangular.classList.add("none");
        $textoConductoRectangularGalvanizado.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
      };

      if(e.target.matches("#conducto-rectangular-inoxidable")){
        $formConducto.classList.remove("none");
        $tipoConductoRectangular.classList.add("none");
        $textoConductoRectangularInoxidable.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
      };


      if(e.target.matches("#conducto-rectangular-climaver")){
        $formConducto.classList.remove("none");
        $tipoConductoRectangular.classList.add("none");
        $textoConductoRectangularClimaver.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
      };

      if(e.target.matches("#conducto-rectangular-climaver-plus")){
        $formConducto.classList.remove("none");
        $tipoConductoRectangular.classList.add("none");
        $textoConductoRectangularClimaverPlus.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
      };

      if(e.target.matches("#conducto-rectangular-climaver-neto")){
        $formConducto.classList.remove("none");
        $tipoConductoRectangular.classList.add("none");
        $textoConductoRectangularClimaverNeto.classList.remove("none");
        $seccionConductoPvc.classList.add("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
      };



    if(e.target.matches("#conducto-oval")){//he de secionar el id del DOM desde quí no en la función
      $tipoConductoOval.classList.remove("none");
      $seleccionaTipoConducto.classList.add("none");
    };

      if(e.target.matches("#conducto-oval-galvanizado")){
        $formConducto.classList.remove("none");
        $tipoConductoOval.classList.add("none");
        $textoConductoOval.classList.remove("none");
        $diametroChapa.classList.add("none");
        $diametroInox.classList.add("none");
        $diametroPvc.classList.add("none");
        $diametroFlexible.classList. add("none");
        $seccionConductoPvc.classList.add("none");
      };
  });
};
        // d.querySelectorAll(".presion-diferencial").forEach((el) => {//quito todos los none de los inputs y labels presion diferencial
        //   el.classList.remove("none");
        // });
