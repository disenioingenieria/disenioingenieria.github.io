
export default function caidaDePresionAccesoriosChapa(){
  console.log("caida de presion accesorios de chapa");
  const d = document,
  $densidadDelAire = parseFloat(d.querySelector("#densidad-del-aire").value),
  $velocidad = parseFloat(d.querySelector("#velocidad-calculada").value),
  $ultimoBoton = d.getElementById("ultimo-boton").textContent,
  $codosCirculares90 = parseFloat(d.getElementById("codos-circulares-90-grados").value),
  $codosCirculares45 = parseFloat(d.getElementById("codos-circulares-45-grados").value),
  $reducciones = parseFloat(d.getElementById("reducciones").value),
  $derivaciones = parseFloat(d.getElementById("derivaciones").value),
  $relacionRadioDiametroCodosChapa90 = parseFloat(d.getElementById("relacion-radio-diametro-codos-chapa-90").value),
  $relacionRadioDiametroCodosChapa45 = parseFloat(d.getElementById("relacion-radio-diametro-codos-chapa-45").value);

  let coeficienteZ = 0,
      coeficienteCodosCirculares90,
      coeficienteCodosCirculares45,
      coeficienteReducciones,
      coeficienteDerivaciones;

  if($ultimoBoton === "conducto-rectangular-pvc"){//detecto tipo de conducto
    console.log("caida presion accesorios conducto rectangular pvc");
  };
      if($codosCirculares90){
        calculaCoeficienteZ90();
        if($ultimoBoton === "conducto-rectangular-galvanizado" || $ultimoBoton === "conducto-oval-galvanizado" || $ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus" || $ultimoBoton === "conducto-rectangular-climaver-neto"){
          coeficienteZ = 1.4;
          coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;
        };
      } else {
          coeficienteCodosCirculares90 = 0;
      };

      if($codosCirculares45){
        calculaCoeficienteZ45();

        if($ultimoBoton === "conducto-rectangular-galvanizado" || $ultimoBoton === "conducto-oval-galvanizado" || $ultimoBoton === "conducto-rectangular-inoxidable" || $ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus" || $ultimoBoton === "conducto-rectangular-climaver-neto"){
          coeficienteZ = 0.5;
          coeficienteCodosCirculares45 = coeficienteZ*$codosCirculares45/2;
        };

      } else {
          coeficienteCodosCirculares45 = 0;
      };
      
      if($reducciones){
         coeficienteZ = 0.2 
         coeficienteReducciones = coeficienteZ*$reducciones/2; 

         if($ultimoBoton === "conducto-rectangular-galvanizado" || $ultimoBoton === "conducto-rectangular-inoxidable" || $ultimoBoton === "conducto-oval-galvanizado" || $ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus"|| $ultimoBoton === "conducto-rectangular-climaver-neto"){
          coeficienteZ = 0.8;
          coeficienteReducciones = coeficienteZ*$reducciones/2;
        };

      } else {
          coeficienteReducciones = 0;
      };

      if($derivaciones){//las derivaciones, el coeficiente Z es el mismo
          coeficienteZ = 1.3 
          coeficienteDerivaciones = coeficienteZ*$derivaciones/2; 
      } else {
          coeficienteDerivaciones = 0;
      };

  let caidaAccesoriosChapa = ((coeficienteCodosCirculares90+coeficienteCodosCirculares45+coeficienteDerivaciones+coeficienteReducciones)*$densidadDelAire*$velocidad**2)/9.81;//paso los Pa mm.c.a
  console.log(`Coef codos 90: ${coeficienteCodosCirculares90} coef codos 45: ${coeficienteCodosCirculares45} coef reducciones: ${coeficienteDerivaciones} caida coef derivaciones: ${coeficienteReducciones}, densidad del aire ${$densidadDelAire}, velocidad: ${$velocidad}`)

    console.log(`Caida codos 90: ${coeficienteCodosCirculares90*$densidadDelAire*$velocidad**2/9.81} caida codos 45: ${coeficienteCodosCirculares45*$densidadDelAire*$velocidad**2/9.81} caida reducciones: ${coeficienteDerivaciones**$densidadDelAire*$velocidad**2/9.81} caida derivaciones: ${coeficienteReducciones**$densidadDelAire*$velocidad**2/9.81}`)

  d.getElementById("caida-de-presion-accesorios").value = caidaAccesoriosChapa;
  
  console.log(`densidad ${$densidadDelAire} velocidad^2 ${$velocidad*$velocidad}`)
  console.log(`caida ${caidaAccesoriosChapa}`)

   function calculaCoeficienteZ90 (){
    if($relacionRadioDiametroCodosChapa90 <= 0.5){
      coeficienteZ = 0.9
      coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;

    } else if ($relacionRadioDiametroCodosChapa90 > 0.5 && $relacionRadioDiametroCodosChapa90 <= 0.75 ){
      coeficienteZ = 0.45
      coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;

    } else if ($relacionRadioDiametroCodosChapa90 > 0.75 && $relacionRadioDiametroCodosChapa90 <= 1 ){
      coeficienteZ = 0.35
      coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;

    } else if ($relacionRadioDiametroCodosChapa90 > 1 && $relacionRadioDiametroCodosChapa90 <= 1.5 ){
      coeficienteZ = 0.25
      coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;

    } else {
      coeficienteZ = 0.2
      coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;
    };
   };

   function calculaCoeficienteZ45 (){
    if($relacionRadioDiametroCodosChapa45 <= 0.5){
      coeficienteZ = 0.9
      coeficienteCodosCirculares45 = (coeficienteZ*$codosCirculares45/2)*0.62;

    } else if ($relacionRadioDiametroCodosChapa45 > 0.5 && $relacionRadioDiametroCodosChapa45 <= 0.75 ){
      coeficienteZ = 0.45
      coeficienteCodosCirculares45 = (coeficienteZ*$codosCirculares45/2)*0.62;

    } else if ($relacionRadioDiametroCodosChapa45 > 0.75 && $relacionRadioDiametroCodosChapa45 <= 1 ){
      coeficienteZ = 0.35
      coeficienteCodosCirculares45 = (coeficienteZ*$codosCirculares90/2)*0.62;

    } else if ($relacionRadioDiametroCodosChapa45 > 1 && $relacionRadioDiametroCodosChapa45 <= 1.5 ){
      coeficienteZ = 0.25
      coeficienteCodosCirculares45 = (coeficienteZ*$codosCirculares45/2)*0.62;

    } else {
      coeficienteZ = 0.2;
      coeficienteCodosCirculares45 = (coeficienteZ*$codosCirculares45/2)*0.62;
    }
   };
};







