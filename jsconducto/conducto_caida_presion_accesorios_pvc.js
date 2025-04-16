export default function caidaDePresionAccesoriosPvc(){

        const d = document,
        $densidadDelAire = parseFloat(d.querySelector("#densidad-del-aire").value),
        $velocidad = parseFloat(d.querySelector("#velocidad-calculada").value),
        // $coeficienteZ = parseFloat(d.getElementById("coeficiente-z").value),
        $ultimoBoton = d.getElementById("ultimo-boton"),
        $codosCirculares90 = parseFloat(d.getElementById("codos-circulares-90-grados").value),
        $codosCirculares45 = parseFloat(d.getElementById("codos-circulares-45-grados").value),
        $reducciones = parseFloat(d.getElementById("reducciones").value),
        $derivaciones = parseFloat(d.getElementById("derivaciones").value);
        // $diametroNominal = parseFloat(d.querySelector("#diametro-nominal").value);

        let coeficienteZ = 0,
            coeficienteCodosCirculares90,
            coeficienteCodosCirculares45,
            coeficienteReducciones,
            coeficienteDerivaciones;
    
        // if($ultimoBoton.textContent === "conducto-circular-pvc"){//detecto tipo de conducto
      
            if($codosCirculares90){
              coeficienteZ = 1.3; 
              coeficienteCodosCirculares90 = coeficienteZ*$codosCirculares90/2;
            } else {
                coeficienteCodosCirculares90 = 0;
            };

            if($codosCirculares45){
                coeficienteZ = 0.5
                coeficienteCodosCirculares45 = coeficienteZ*$codosCirculares45/2; 
            } else {
                coeficienteCodosCirculares45 = 0;
            };
            
            if($reducciones){
               coeficienteZ = 0.2 
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

            console.log(`Coeficiente codos90: ${coeficienteCodosCirculares90} codos45 ${coeficienteCodosCirculares45} reducciones ${coeficienteReducciones} derivaciones ${coeficienteDerivaciones}`)
   
        let caidaAccesoriosPvc = ((coeficienteCodosCirculares90+coeficienteCodosCirculares45+coeficienteDerivaciones+coeficienteReducciones)*$densidadDelAire*$velocidad**2)/9.81;//paso los Pa mm.c.a

        d.getElementById("caida-de-presion-accesorios").value = caidaAccesoriosPvc;
        
        console.log(`densidad ${$densidadDelAire} velocidad^2 ${$velocidad*$velocidad}`)
        console.log(`Caida en Codos 90: ${(coeficienteCodosCirculares90*$densidadDelAire*$velocidad**2)/9.81} Caida en Codos 90: ${(coeficienteCodosCirculares45*$densidadDelAire*$velocidad**2)/9.81} Caida en Codos 90: ${(coeficienteReducciones*$densidadDelAire*$velocidad**2)/9.81} Caida en Codos 90: ${(coeficienteDerivaciones*$densidadDelAire*$velocidad**2)/9.81}`)
        console.log(`caida ${caidaAccesoriosPvc}`)
        //  };
};
	

    
