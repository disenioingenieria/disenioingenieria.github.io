import conductoRectangularRecalculaSecciones from "./conducto_rectangular_recalcula_secciones.js";

export default function calculaSeccionesConductoRectangular(){

    const d = document,
    $caudal = parseFloat(d.getElementById("caudal").value),
    $velocidad = parseFloat(d.getElementById("velocidad").value),
    $superficieCalculada = parseFloat(d.getElementById("superficie-calculada").value)*1000000,
    $ultimoBoton = d.getElementById("ultimo-boton").textContent;//paso m2 a mm2

    console.log(`ultimo boton: ${$ultimoBoton}`);
       
    let ladoMenor = 50,//pasamos los mm  mts para poder comparar con la $superficieCalculada
     ladoMayor = 50,
     superficie = 0,
     relacionDeLados = ladoMayor/ladoMenor,
     $diametroEquivalente = 0,
     $velocidadCalculada = 0;

    console.log($superficieCalculada);//Superficie en mm2 que viene de conducto calcula rectangular

    superficie = ladoMenor*ladoMayor;
    $velocidadCalculada = ($caudal/3600)/(superficie/1000000); //paso a m3/sg y a mts.
    console.log(`velocidad calculada: ${$velocidadCalculada} con los lados 50 x 50`);

    if($velocidad <= $velocidadCalculada && relacionDeLados <=4){
        console.log (`velocidad: ${$velocidad} es < que velocidad calculada ${$velocidadCalculada}`)
    
        while ($velocidad <= $velocidadCalculada){
            if(relacionDeLados >= 4){//Si la relación de lados es mayor que 4, aumentamos el lado menor y empezamos a recalcular el lado mayor
                ladoMenor +=50;
                ladoMayor = 50;
                superficie = 0;
            };
        ladoMayor += 50;
        relacionDeLados = ladoMayor/ladoMenor;
        superficie = ladoMenor*ladoMayor;
        $velocidadCalculada = ($caudal/3600)/(superficie/1000000);
        };
    };

    console.log(`velocidad calculada: ${$velocidadCalculada} con los lados seleccionados en el while lado mayor: ${ladoMayor} lado menor. ${ladoMenor}`);

    if($velocidad > $velocidadCalculada && ladoMayor > 50){//si el while se pasa una vez y hace que la superficie sea mayor que la calculada quitamos un paso al lado mayor
        ladoMayor = ladoMayor - 50;
        superficie = ladoMenor * ladoMayor;
        $velocidadCalculada = ($caudal/3600)/(superficie/1000000);
        console.log(`velocidad calculada: ${$velocidadCalculada} restanto 50 al lado mayor: ${ladoMayor} lado menor. ${ladoMenor}`);
    };

    if(ladoMayor > 2000 && ladoMenor > 2000){
        alert(`La velocidad introducida: ${$velocidad} m/sg. o el caudal introducido: ${$caudal} m3/h. determinan conductos mayores que 2.000 mm. tanto para el lado mayor como para el lado menor, serán de fabricación especial, cambia la velocidad para obtener un resultado económicamente más razonable`);
    };

    d.getElementById("lado-menor").textContent = ladoMenor; //valores de los lados al DOM, en textContent para que no aparezcan en el input pero aparecen en pantalla
    d.getElementById("lado-mayor").textContent = ladoMayor;

    d.getElementById("lado-mayor-interior").classList.add("none");//los hago desaparecer de la pantalla
    d.getElementById("lado-menor-interior").classList.add("none");

    if($ultimoBoton !== "conducto-rectangular-climaver" || $ultimoBoton !== "conducto-rectangular-climaver-plus" || $ultimoBoton !== "conducto-rectangular-climaver-neto"){//Si es climaver no recalcula las secciones
        conductoRectangularRecalculaSecciones();//Quito los espesores de los conductos a los lados
        console.log("NO ES CLIMAVER");
    };

        let ladoMenorInterior = parseFloat(d.getElementById("lado-menor-interior").textContent),//recupero los lados interiores para calcular
            ladoMayorInterior = parseFloat(d.getElementById("lado-mayor-interior").textContent);

        console.log (`superficie ${superficie} es < que superficie calculada ${$superficieCalculada}, lado mayor = ${ladoMayor}, lado menor ${ladoMenor} relacion de lados: ${relacionDeLados}`)
        // superficie = ladoMenor*ladoMayor;

    if($ultimoBoton === "conducto-oval-galvanizado"){
        console.log(`conducto oval`);
        //b es el lado mayor, a = lado menor
        $diametroEquivalente = 1.5503*((((Math.PI*((ladoMenorInterior**2)/4))+(ladoMenorInterior*(ladoMayorInterior-ladoMenorInterior)))**0.6255)/(((Math.PI*ladoMenorInterior)+(2*(ladoMayorInterior-ladoMenorInterior)))**0.251))     
        console.log(`diámetro equivalente oval: ${$diametroEquivalente}`);

    } else if ($ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus" || $ultimoBoton === "conducto-rectangular-climaver-neto") {
        $diametroEquivalente = 1.3*(((ladoMayor*ladoMenor)**0.625)/((ladoMayor+ladoMenor)**0.250));
    } else {
        $diametroEquivalente = 1.3*(((ladoMayorInterior*ladoMenorInterior)**0.625)/((ladoMayorInterior+ladoMenorInterior)**0.250));
    };
        superficie = Math.PI*($diametroEquivalente**2)/4;//superficie conforme al diámetro equivalente
        $velocidadCalculada = ($caudal/3600)/(superficie/1000000);//paso la superfice de mm2 a m2
        d.getElementById("velocidad-calculada").value = $velocidadCalculada;//pongo la velocidad calculada en el DOM
        d.getElementById("lado-menor").textContent = ladoMenor;
        d.getElementById("lado-mayor").textContent = ladoMayor;
        d.getElementById("diametro-equivalente").value = $diametroEquivalente/1000;//paso el diametroequivalente a mts.

        console.log(`diametro Equivalente: ${$diametroEquivalente} velocidad calculada: ${$velocidadCalculada}, velocidad ${$velocidad}, lado mayor interior ${ladoMayorInterior} lado menor interior ${ladoMenorInterior} superficie calculada: ${superficie}`);
};