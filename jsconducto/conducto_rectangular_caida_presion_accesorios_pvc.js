
export default function conductoRectangularCaidaDePresionAccesoriosPvc(){
  console.log("caida de presion accesorios de pvc conducto rectangular");
  const d = document,
  $densidadDelAire = parseFloat(d.querySelector("#densidad-del-aire").value),
  $velocidad = parseFloat(d.querySelector("#velocidad-calculada").value),
  $coeficienteZ = parseFloat(d.getElementById("coeficiente-z").value),
  $ultimoBoton = d.getElementById("ultimo-boton"),
  $codosCirculares90 = parseFloat(d.getElementById("codos-circulares-90-grados").value),
  $codosCirculares45 = parseFloat(d.getElementById("codos-circulares-45-grados").value),
  $reducciones = parseFloat(d.getElementById("reducciones").value),
  $derivaciones = parseFloat(d.getElementById("derivaciones").value),
  $diametroNominal = parseFloat(d.querySelector("#diametro-nominal").value),
  $relacionRadioDiametroCodosChapa90 = parseFloat(d.getElementById("relacion-radio-diametro-codos-chapa-90").value),
  $relacionRadioDiametroCodosChapa45 = parseFloat(d.getElementById("relacion-radio-diametro-codos-chapa-45").value);

  //coeficienteZ = radio/diametronominal; radio = diametronominal/2 + 

  let coeficienteZ = 0,
      coeficienteCodosRectangulares90,
      coeficienteCodosRectangulares45,
      coeficienteReducciones,
      coeficienteDerivaciones;

  if($ultimoBoton.textContent === "conducto-rectangular-pvc"){//detecto tipo de conducto
    console.log("caida presion accesorios conducto rectangular pvc");
  

      if($codosCirculares90){
        coeficienteZ = 1.4;
        coeficienteCodosRectangulares90 = coeficienteZ*$codosCirculares90/2;
      } else {
          coeficienteCodosRectangulares90 = 0;
      };

      if($codosCirculares45){
        coeficienteZ = 0.7;
        coeficienteCodosRectangulares45 =coeficienteZ*$codosCirculares45/2;;          
      } else {
          coeficienteCodosRectangulares45 = 0;
      };
      
      if($reducciones){
         coeficienteZ = 0.4 
         coeficienteReducciones = coeficienteZ*$reducciones/2; 
      } else {
          coeficienteReducciones = 0;
      };

      if($derivaciones){
          coeficienteZ = 1.3 
          coeficienteDerivaciones = coeficienteZ*$derivaciones/2; 
      } else {
          coeficienteDerivaciones = 0;
      };
  };

  let caidaAccesoriosRectangularesPvc = ((coeficienteCodosRectangulares90+coeficienteCodosRectangulares45+coeficienteDerivaciones+coeficienteReducciones)*$densidadDelAire*$velocidad**2)/9.81;//paso los Pa mm.c.a
  console.log(`Coef codos 90: ${coeficienteCodosRectangulares90} coef codos 45: ${coeficienteCodosRectangulares45} coef reducciones: ${coeficienteDerivaciones} caida coef derivaciones: ${coeficienteReducciones}`)

    console.log(`Caida codos 90: ${coeficienteCodosRectangulares90*$densidadDelAire*$velocidad**2/9.81} caida codos 45: ${coeficienteCodosRectangulares45*$densidadDelAire*$velocidad**2/9.81} caida reducciones: ${coeficienteDerivaciones**$densidadDelAire*$velocidad**2/9.81} caida derivaciones: ${coeficienteReducciones**$densidadDelAire*$velocidad**2/9.81}`)

  d.getElementById("caida-de-presion-accesorios").value = caidaAccesoriosRectangularesPvc;
  
  console.log(`densidad ${$densidadDelAire} velocidad^2 ${$velocidad*$velocidad}`)
  console.log(`caida ${caidaAccesoriosRectangularesPvc}`)

};







