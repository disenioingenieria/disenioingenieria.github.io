import caidaDePresionAccesoriosChapa from "./conducto_caida_presion_accesorios_chapa.js";
import caidaDePresionLineal from "./conducto_caida_presion_lineal.js";
import conductoRectangularCaidaDePresionAccesoriosPvc from "./conducto_rectangular_caida_presion_accesorios_pvc.js";
import calculaSeccionesConductoRectangular from "./conducto_rectangular_calcula_secciones.js";
import conductoRectangularCalculaLados from "./conducto_rectangular_calcula_lados.js";

export default function conductoCalculaRectangular(temperaturaDelAire, caudal, velocidadCalculada, ultimoBoton, seccionConductoPvc, superficieCalculada){
    
    const d = document,
        $ultimoBoton = d.querySelector(ultimoBoton).textContent,
        $seccionConductoPvc = d.querySelector(seccionConductoPvc);//detecto tipo de conducto        

    let $temperaturaDelAire = parseFloat(d.querySelector(temperaturaDelAire).value),
        $caudal = parseFloat(d.querySelector(caudal).value)/3600,
        $velocidadCalculada = parseFloat(d.querySelector(velocidadCalculada).value),
        $superficieCalculada = parseFloat(d.querySelector(superficieCalculada).value),
        $velocidad = parseFloat(d.getElementById("velocidad").value),
        $ladoMenor = parseFloat(d.getElementById("lado-menor").value),
        $ladoMayor = parseFloat(d.getElementById("lado-mayor").value),
        superficie = 0;

        if(!$temperaturaDelAire){
            $temperaturaDelAire = 21;
            // console.log(`temperatura del aire ${$temperaturaDelAire}`);
        };
        
        let densidadDelAire = 101300/(287 * (273.2 + $temperaturaDelAire)),
            viscosidad = 1.724 * Math.pow(10,(-5)) * Math.pow(((273.2 + $temperaturaDelAire)/273.2),0.76);//
            // superficie = Math.PI * Math.pow(($diametroInterior/1000), 2) / 4;//pasamos el diámetro a mm.
    
            d.querySelector("#densidad-del-aire").value = densidadDelAire;//pongo a densidad del aire en el DOM
            d.getElementById("viscosidad-del-aire").value = viscosidad;
    
            console.log(`viscosidad del aire: ${viscosidad}`);

        if((!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-galvanizado") 
            || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-inoxidable") 
            || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-oval-galvanizado") 
            || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-climaver" ) 
            || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-climaver-plus" ) 
            || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-climaver-neto")){
            console.log("no hay ni lado menor ni lado mayor");
            superficie = $caudal/$velocidad;//calculamos la superficie en función del caudal y la velocidad dada
            d.getElementById("superficie-calculada").value = superficie;
            calculaSeccionesConductoRectangular();
            caidaDePresionAccesoriosChapa();
            caidaDePresionLineal();
          } else if(($ladoMenor || $ladoMayor && $ultimoBoton.textContent === "conducto-rectangular-galvanizado") 
          || ($ladoMenor || $ladoMayor && $ultimoBoton.textContent === "conducto-rectangular-inoxidable") 
          || ($ladoMenor || $ladoMayor && $ultimoBoton === "conducto-oval-galvanizado") 
          || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-climaver") 
          || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-climaver-plus")
          || (!$ladoMenor && !$ladoMayor && $ultimoBoton === "conducto-rectangular-climaver-neto")){
            conductoRectangularCalculaLados();
            caidaDePresionAccesoriosChapa();
            caidaDePresionLineal();
          };

        console.log(`temperatura del aire ${temperaturaDelAire}, Caudal: ${$caudal}, Velocidad calculada ${$velocidadCalculada},  Velocidad ${$velocidad}, ultimo boton ${$ultimoBoton}, Seccion Conducto Pvc ${$seccionConductoPvc.value}, superficie calculada: ${$superficieCalculada}`);

        if($ultimoBoton === "conducto-rectangular-pvc"){
            conductoRectangularCaidaDePresionAccesoriosPvc(); 
            caidaDePresionLineal();       
        };
};