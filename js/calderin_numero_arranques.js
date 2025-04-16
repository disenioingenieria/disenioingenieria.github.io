export default function numeroDeArranques(boton, caudal, presionArranque, presionDiferencial){
    const d = document;
    d.addEventListener("click", (e) => {
        // console.log(`${$caudal.value}, ${$presionArranque.value}, ${typeof(parseFloat($presionDiferencial.value))*650}, ${$numeroDeBombas.value}, ${typeof($opciones.value)}`)
        console.log("estoy en numero de arranques");
        if(e.target.matches(boton)){
          console.log(caudal.value, presionArranque, presionDiferencial);
        //   console.log(`${$caudal.value}`)
          };
      });
    
    // potenciaMotor = ((9.8 * $caudal.value / 3600) * ((parseFloat($presionArranque.value) + parseFloat($presionDiferencial.value))) / (0.55 * 75)) * 0.736;//m3/sg * Kpa / rendimiento global

};