export default function calderinCalcula(caudal, presionArranque, presionDiferencial, opciones, potenciaMotor, volumenCalderin, numeroDeBombas, formCalderin){
    const d = document,
      $caudal = parseFloat(d.querySelector(caudal).value), 
      $presionArranque = parseFloat(d.querySelector(presionArranque).value),
      $select = d.querySelector(opciones),
      $numeroDeBombas = parseFloat(d.querySelector(numeroDeBombas).value),
      $formCalderin = d.querySelector(formCalderin);

      let numMaximoArranques = 0, 
          $presionDiferencial = parseFloat(d.querySelector(presionDiferencial).value);//No puede ser constante, ya que tengo que inicializarla a 0

      if(isNaN($presionDiferencial)){// Si no es un número le asigno 0
        $presionDiferencial = 0;
      };

      // console.log(`estoy en calderin calcula`);
      // console.log(`presion de arranque ${$presionArranque}, presion diferencial ${$presionDiferencial}`);

      //El caudal lo debe suministrar el conjunto total de bombas, es decir, Caudal total/número de bombas
      potenciaMotor = ((9.8 * ($caudal/$numeroDeBombas) / 3600) * (($presionArranque + $presionDiferencial)) / (0.55 * 75)) * 0.736;//m3/sg * Kpa / rendimiento global
      
      // console.log(`Potencia motor ${potenciaMotor}`);
      
      d.querySelector("#potencia-motor").value = potenciaMotor;//hay que asignar el valor de las variables al dom
      
      // console.log(`Potencia motor ${d.querySelector("#potencia-motor").value}`);

      //numero de arranques 0 y 1 velocidad variable, 2 convencional, seleccionamos el número de arranques en función de la potencia de motor calculada

  if ($select.value === "0" || $select.value === "1"){ //asigno "1" entre comillas a la igualdad ya que lo que nos envía calderín_disenio es un objeto, seleccionamos primero con variador de velocidad. 
    
    // console.log(typeof($select));

      if(potenciaMotor > 0 && potenciaMotor <= 4){
          numMaximoArranques = 40;
          // console.log(potenciaMotor.value);
        } else if(potenciaMotor > 4 && potenciaMotor <= 11){
          numMaximoArranques = 25;
        } else if(potenciaMotor > 11 && potenciaMotor <= 22){
          numMaximoArranques = 20;
        } else if(potenciaMotor > 22 && potenciaMotor <= 55){
          numMaximoArranques = 18;
        } else {
          numMaximoArranques = 15;
        }

        volumenCalderin = (900 * ($caudal / 3600) * ($presionArranque + 0.1)) / (4 * (numMaximoArranques) * $numeroDeBombas);

        console.log(`volumen calderín variador ${volumenCalderin}`);

  } else {
  
      if(potenciaMotor > 0 && potenciaMotor <= 4){
          numMaximoArranques = 35;
      // console.log(potenciaMotor.value);
        } else if(potenciaMotor > 4 && potenciaMotor <= 11){
          numMaximoArranques = 22;
        } else if(potenciaMotor > 11 && potenciaMotor <= 22){
          numMaximoArranques = 18;
        } else if(potenciaMotor > 22 && potenciaMotor <= 55){
          numMaximoArranques = 15;
        } else {
          numMaximoArranques = 10;
        }
        volumenCalderin = (900 * ($caudal / 3600) * ($presionArranque + $presionDiferencial + 0.1)) / ((numMaximoArranques * $presionDiferencial) * $numeroDeBombas);
        // console.log(`volumen calderín convencional ${volumenCalderin}`);
  };

      d.querySelector("#numero-arranques").value = numMaximoArranques;

      // console.log(`Numero máximo de arranques ${numMaximoArranques} potencia de motor ${potenciaMotor} kW`);
      d.querySelector("#volumen-calderin").value = volumenCalderin;//le asigno el valor de la variable volumenCalderin al dom

      $formCalderin.classList.add("opacity-dos");//saco a pantalla el form

  //       // Retraso la entrada del none con esta función
  // let retrasoNone;
  // function retraso(){
  //   retrasoNone = setInterval(retrasos,3000)
  // };
  // function retrasos(){      
  //   $containerDatosAPantalla.classList.add("opacity-uno");
  //   $containerCalculaDeNuevo.classList.add("opacity-uno");

  //     // $containerDatosAPantalla.classList.remove("none");
  //     // $containerCalculaDeNuevo.classList.remove("none");
  // };
  // retraso();
};