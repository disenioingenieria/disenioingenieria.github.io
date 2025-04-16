export default function calderinPresionTrabajo(presionArranque, presionDiferencial){
    const d = document,
      $presionArranque = parseFloat(d.querySelector(presionArranque).value),
      $presionDiferencial = parseFloat(d.querySelector(presionDiferencial).value);

    let presionTotal = $presionArranque + $presionDiferencial, // presiones de trabajo normales 10 16 20 25 40
        presionTrabajoCalderin = 0;


      //ajusto la presion de trabajo del calderin  
        if(presionTotal > 0 && presionTotal <= 10){
          presionTrabajoCalderin = 10;
        } else if (presionTotal > 10 && presionTotal <= 16 ){
          presionTrabajoCalderin = 16;
        } else if (presionTotal > 16 && presionTotal <= 20 ){
          presionTrabajoCalderin = 20;
        } else if (presionTotal > 20 && presionTotal <= 25 ){
          presionTrabajoCalderin = 25;
        } else {
          presionTrabajoCalderin = 40;
        }
        d.querySelector("#presion-trabajo-calderin").value = presionTrabajoCalderin;
    };
