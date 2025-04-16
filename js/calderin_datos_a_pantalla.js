export default function calderinDatosAPantalla(aPantalla, caudal, caudalArranqueAPantalla, presionArranque, presionArranqueAPantalla, caudalDeParoAPantalla, presionDiferencial, presionDiferencialAPantalla, volumenCalderin, volumenCalderinAPantalla, volumenComercialCalderin, volumenComercialCalderinAPantalla, presionTrabajoCalderin, presionTrabajoCalderinAPantalla, potenciaMotor, potenciaComercialMotorAPantalla, numeroDeBombas, numeroDeBombasAPantalla, numeroDeArranques, numeroDeArranquesAPantalla, opciones, descripcionSeleccion, nombreDeLaObra, nombreDeLaObraAPantalla){
 
  const d = document,
    $aPantalla = (d.querySelector(aPantalla)),
    $caudal = parseFloat(d.querySelector(caudal).value),  
    $caudalArranqueAPantalla = d.querySelector(caudalArranqueAPantalla),
    $presionArranque = parseFloat(d.querySelector(presionArranque).value), 
    $presionArranqueAPantalla = d.querySelector(presionArranqueAPantalla),
    $caudalDeParoAPantalla = d.querySelector(caudalDeParoAPantalla),
    $presionDiferencial = parseFloat(d.querySelector(presionDiferencial).value),
    $presionDiferencialAPantalla = d.querySelector(presionDiferencialAPantalla),
    $volumenCalderin = parseFloat(d.querySelector(volumenCalderin).value),
    $volumenCalderinAPantalla = d.querySelector(volumenCalderinAPantalla),
    $volumenComercialCalderin = parseFloat(d.querySelector(volumenComercialCalderin).value),
    $volumenComercialCalderinAPantalla = d.querySelector(volumenComercialCalderinAPantalla),
    $presionTrabajoCalderin = parseFloat(d.querySelector(presionTrabajoCalderin).value),
    $presionTrabajoCalderinAPantalla = d.querySelector(presionTrabajoCalderinAPantalla),
    $potenciaMotor = parseFloat(d.querySelector(potenciaMotor).value),
    $potenciaComercialMotorAPantalla = d.querySelector(potenciaComercialMotorAPantalla),
    $numeroDeBombas = parseFloat(d.querySelector(numeroDeBombas).value),
    $numeroDeBombasAPantalla = d.querySelector(numeroDeBombasAPantalla),
    $numeroDeArranques = parseFloat(d.querySelector(numeroDeArranques).value),
    $numeroDeArranquesAPantalla = d.querySelector(numeroDeArranquesAPantalla),
    $select = d.querySelector(opciones),
    $descripcionSeleccion = d.querySelector(descripcionSeleccion),
    $nombreDeLaObra = d.querySelector(nombreDeLaObra).value,
    $nombreDeLaObraAPantalla = d.querySelector(nombreDeLaObraAPantalla);

    $aPantalla.classList.toggle("is-active");

    let caudalDeParo = 0,//caudal de paro es cero para variadores salvo que sea convencional que lo hacermos un 40 % menos que el caudal total
      textoDescripcion = "";
      // console.log($select.value);
      // console.log(textoDescripcion);
    if($select.value === "2") {
      caudalDeParo = $caudal * 0.6;
      textoDescripcion = "Convencional";
    } else if ($select.value === "1"){
      textoDescripcion = "con variador por bomba";
    } else if ($select.value === "0"){
      textoDescripcion = "un solo variador";
    };  
    console.log(textoDescripcion)
    $caudalArranqueAPantalla.textContent = `Caudal Arranque, Qc: ${$caudal} lts/h.`;
    $presionArranqueAPantalla.textContent = `Presión Arranque, Pb: ${$presionArranque.toFixed(2)} Kg/cm2.`;
    $caudalDeParoAPantalla.textContent = `Caudal de Paro, Qp: ${caudalDeParo} lts/h.`;
    $presionDiferencialAPantalla.textContent = `Presión diferencial, d: ${$presionDiferencial.toFixed(2)} Kg/cm2.`;
    $volumenCalderinAPantalla.textContent = `Volumen calderin calculado Vext: ${$volumenCalderin.toFixed(2)} lts.`;
    $volumenComercialCalderinAPantalla.textContent = `Volumen calderin Vreal: ${$volumenComercialCalderin} lts.`;
    $presionTrabajoCalderinAPantalla.textContent = `Presión trabajo calderín: ${$presionTrabajoCalderin} Kg/cm2.`;
    $potenciaComercialMotorAPantalla.textContent = `Potencia de cada motor: ${$potenciaMotor} kW`;
    $numeroDeBombasAPantalla.textContent = `Número de bombas del grupo: ${$numeroDeBombas} Uds.`;
    $numeroDeArranquesAPantalla.textContent = `Número de arranques/hora: ${$numeroDeArranques}`;
    $descripcionSeleccion.textContent = `Calderín diseñado para grupo a presión del tipo: ${textoDescripcion}`;
    $nombreDeLaObraAPantalla.textContent = `Diseño realizado para: ${$nombreDeLaObra}`;

    if($volumenComercialCalderin < 200){
        alert("Conforme a la UNE 149202:2013, apdo. 5.3.2.3 y 5.3.3.3, que no es de obligado cumplimiento, el volumen mínimo a instalar de calderín será de 200 lts. Según el apdo. 5.3.4.3, los equipos con variador por bomba permiten la reducción del volumen del depósito hidroneumático, estableciéndose un volumen mínimo de 5 lts.");
    };
};


