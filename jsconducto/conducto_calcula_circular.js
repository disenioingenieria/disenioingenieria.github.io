import caidaDePresionAccesoriosChapa from "./conducto_caida_presion_accesorios_chapa.js";
import caidaDePresionAccesoriosPvc from "./conducto_caida_presion_accesorios_pvc.js";
import caidaDePresionAccesoriosInox from "./conducto_caida_presion_accesorios_inox.js";
import caidaDePresionLineal from "./conducto_caida_presion_lineal.js";
import conductoCircularRecalculaDiametrosChapa from "./conducto_circular_recalcula_diametros_chapa.js";
import conductoCircularRecalculaDiametrosInox from "./conducto_circular_recalcula_diametros_inox.js";
import conductoCircularRecalculaDiametrosPvc from "./conducto_circular_recalcula_diametros_pvc.js";
import conductoCircularRecalculaDiametrosFlexible from "./conducto_circular_recalcula_diametros_flexible.js";
import caidaDePresionAccesoriosFlexible from "./conducto_caida_presion_accesorios_flexible.js";

export default function conductoCalculaCircular(temperaturaDelAire, caudal, velocidad, diametro){
    
    const d = document;
    let $temperaturaDelAire = parseFloat(d.querySelector(temperaturaDelAire).value),
        $caudal = parseFloat(d.querySelector(caudal).value),
        $velocidad = parseFloat(d.querySelector(velocidad).value),
        $diametro = parseFloat(d.querySelector(diametro).value),
        $diametroInterior = parseFloat(d.querySelector("#diametro-interior").value),
        $ultimoBoton = d.getElementById("ultimo-boton");//detecto tipo de conducto        

        d.querySelector("#velocidad-calculada").value = 0;//pongo a cero la velocidad calculada para que no hay problemas en la tabla.        
        // console.log(`Diámetro en calcula_circular ${$diametro}, ${$diametroInterior}`);

    if(!$temperaturaDelAire){
        $temperaturaDelAire = 21;
        // console.log(`temperatura del aire ${$temperaturaDelAire}`);
    };
    
    let densidadDelAire = 101300/(287 * (273.2 + $temperaturaDelAire)),
        viscosidad = 1.724 * Math.pow(10,(-5)) * Math.pow(((273.2 + $temperaturaDelAire)/273.2),0.76),//
        superficie = Math.PI * Math.pow(($diametroInterior/1000), 2) / 4;//pasamos el diámetro a mm.

        d.querySelector("#densidad-del-aire").value = densidadDelAire;//pongo a densidad del aire en el DOM
        d.getElementById("viscosidad-del-aire").value = viscosidad;
        // console.log(`Superficie: ${superficie}`);
        // console.log(`Temperatura ${$temperaturaDelAire} densidad ${densidadDelAire} viscosidad ${viscosidad}` );

    //Compruebo que hay diámetro
        if ($diametro){
        // console.log("hay diámetro")
        alert(`Has introducido un diámetro de ${$diametro} mm. , calcularemos la caida de presión y la velocidad en ese tramo para el caudal introducido de ${$caudal} m3/h.`)

        $velocidad = ($caudal/3600) / superficie //m3/h a m/sg
        // console.log(`Velocidad ${$velocidad}`)
        d.querySelector("#velocidad-calculada").value = $velocidad;//asignamos velocidad a velocidad calculada
    };

    if(!$diametro){
        // console.log("No hay diámetro")
        // console.log(`diametro ${$diametro} caudal ${$caudal} velocidad ${$velocidad}`);//No es diámetro es NaN
        superficie = ($caudal/3600)/$velocidad;//pasamos los m3/h a m3/sg//Calculamos la superficie en función del caudal y la velocidad dada
        // console.log(`superficie ${superficie} diametro ${$diametro} caudal ${$caudal} velocidad${$velocidad}`);//No es diámetro es NaN
        $diametro = ((Math.pow((4 * (superficie) / Math.PI), (1/2))))*1000;//pasamos los mts. a mm//calculamos el diámetro interior teórico
        // console.log(`Diámetro ${$diametro}`);
        d.querySelector("#diametro-calculado").value = $diametro;//colocamos ese diámetro interior teórico en diámetro calculado
        // console.log(d.querySelector("#diametro-calculado").value);

        if($ultimoBoton.textContent === "conducto-circular-pvc"){//detecto tipo de conducto
            conductoCircularRecalculaDiametrosPvc();//llamamos a recalcular para saber realmente el diámetro comercial interior, desde esa función colocamos el diámetro nominal y el interior en el dom
        } else if($ultimoBoton.textContent === "conducto-circular-chapa"){
            conductoCircularRecalculaDiametrosChapa();

        } else if($ultimoBoton.textContent === "conducto-circular-inox"){
            conductoCircularRecalculaDiametrosInox();
        } else if($ultimoBoton.textContent === "conducto-circular-flexible"){
            conductoCircularRecalculaDiametrosFlexible();
        };

        $diametro = d.querySelector("#diametro-interior").value;//recuperamos el diámetro interior del DOM
        // console.log($diametro);
        // console.log ($velocidad);
        superficie = (Math.PI * Math.pow(($diametro/1000), 2))/4//pasamos los mm. a mts.//con ese diámetro interior recalculamos la superficie
        $velocidad = ($caudal/3600)/superficie;// pasamos los m3/h a m3/sg.//recalculamos la velocidad
        // console.log($velocidad);
        d.querySelector("#velocidad-calculada").value = $velocidad.toFixed(1);//ponemos el el DOM la velocidad calculada
    };
    
    if($ultimoBoton.textContent === "conducto-circular-pvc"){//detecto tipo de conducto
        caidaDePresionAccesoriosPvc(); 
        const $caidaDePresionAccesoriosPvc = d.getElementById("caida-de-presion-accesorios").value;
        // console.log($caidaDePresionAccesoriosPvc);

        caidaDePresionLineal();

        // console.log(`caida de presion lineal: ${d.getElementById("caida-de-presion-lineal").value}`);

    } else if($ultimoBoton.textContent === "conducto-circular-chapa"){
        caidaDePresionAccesoriosChapa();
        const $caidaDePresionAccesoriosChapa = d.getElementById("caida-de-presion-accesorios").value;
        // console.log($caidaDePresionAccesoriosChapa)

        caidaDePresionLineal();

        // console.log(`caida de presion lineal: ${d.getElementById("caida-de-presion-lineal").value}`);

    } else if($ultimoBoton.textContent === "conducto-circular-inox"){
        caidaDePresionAccesoriosInox();
        const $caidaDePresionAccesoriosChapa = d.getElementById("caida-de-presion-accesorios").value;
        // console.log($caidaDePresionAccesoriosChapa)

        caidaDePresionLineal();

        // console.log(`caida de presion lineal: ${d.getElementById("caida-de-presion-lineal").value}`);

    } else if($ultimoBoton.textContent === "conducto-circular-flexible"){
        // caidaDePresionAccesoriosInox();
        caidaDePresionAccesoriosFlexible();
        const $caidaDePresionAccesoriosChapa = d.getElementById("caida-de-presion-accesorios").value;
        // console.log($caidaDePresionAccesoriosChapa)

        caidaDePresionLineal();

        // console.log(`caida de presion lineal: ${d.getElementById("caida-de-presion-lineal").value}`);

    };
};