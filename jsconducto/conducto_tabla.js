import poneInputsACero from "./conducto_pone_inputs_a_cero.js";

export default function conductoTabla (tabla, nuevoTramoConducto, validaDatosConducto, ladoMenor, ladoMayor, sumaRestaCaidas, numeroDeTramo, velocidadCalculada, caudal, longitud, velocidad, diametroInterior){
// console.log("estoy en conducto tabla");
const d = document,
    $tabla = d.querySelector(tabla),
    $nuevoTramoConducto = d.querySelector(nuevoTramoConducto),
    $validaDatosConducto = d.querySelector(validaDatosConducto),
    $velocidadCalculada = parseFloat(d.querySelector(velocidadCalculada).value),
    $ladoMenor = d.querySelector(ladoMenor).textContent,
    $ladoMayor = d.querySelector(ladoMayor).textContent,
    $sumaRestaCaidas = d.querySelector(sumaRestaCaidas);
    // console.log(`Velocidad calculada ${$velocidadCalculada}`);

    // d.querySelector(".texto-suma-resta-caidas").classList.remove("none");//texto sumar, restar o eliminar en el DOM
    $sumaRestaCaidas.classList.remove("none");
    $tabla.classList.remove("none");
    // $table.classList.add("opacity-uno");
    $nuevoTramoConducto.disabled = false;
    $validaDatosConducto.disabled = true;
    
    let $numeroDeTramo = d.querySelector(numeroDeTramo),
        $caudal = d.querySelector(caudal),
        $longitud = d.querySelector(longitud),
        $velocidad = d.querySelector(velocidad),
        $diametroPvc = d.querySelector(diametroInterior),
        $codosCirculares90 = d.querySelector("#codos-circulares-90-grados"),
        $codosCirculares45 = d.querySelector("#codos-circulares-45-grados"),
        $reducciones = d.querySelector("#reducciones"),
        $derivaciones = d.querySelector("#derivaciones"),
        $tbodyResultados = d.querySelector(".tbody-resultados"),
        contenidoTabla = $tbodyResultados.innerHTML,
        $diametroNominal = d.querySelector("#diametro-nominal"),//recuperamos el diámetro nominal de un span
        $caidaDePresionAccesorios = d.getElementById("caida-de-presion-accesorios"),//tanto innerText como textContent nos da un string con el valor del contenido del elemento HTML
        $caidaDePresionLineal = d.getElementById("caida-de-presion-lineal");

             numeroDeTramo = $numeroDeTramo.value;
             caudal = $caudal.value;
             longitud = $longitud.value;
             velocidad = 0;

            let diametroPvc = $diametroPvc.value,
                codosCirculares90 = $codosCirculares90.value,
                codosCirculares45 = $codosCirculares45.value,
                reducciones = $reducciones.value,
                derivaciones = $derivaciones.value,
                diametroNominal = $diametroNominal.value,
                caidaDePresionAccesorios = $caidaDePresionAccesorios.value,
                caidaDePresionLineal = $caidaDePresionLineal.value,
                caidaDePresionTotal = caidaDePresionAccesorios + caidaDePresionLineal,
                fila = 0;

                if($velocidadCalculada){//cambio la asignación a velocidad cuando hay y cuando no hay diámetro.
                    // console.log(`hay velocidad calculada ${$velocidadCalculada.toFixed(2)}`);
                    velocidad = $velocidadCalculada.toFixed(2);
                } else{
                    velocidad = $velocidad.value;
                };

                if(!codosCirculares90){
                    codosCirculares90 = "&nbsp;" + "&nbsp;" + "&nbsp;" + "-";//coloco los guiones con espacios para que queden mejor en la tabla
                };

                if(!codosCirculares45){
                    codosCirculares45 = "&nbsp;" + "&nbsp;" + "&nbsp;" + "-";
                };

                if(!reducciones){
                    reducciones = "&nbsp;" + "&nbsp;" + "&nbsp;" + "-";
                };

                if(!derivaciones){
                    derivaciones = "&nbsp;" + "&nbsp;" + "&nbsp;" + "-";
                };

                console.log(d.getElementById("ultimo-boton").textContent);
                console.log(d.getElementById("diametro-a-rectangular").textContent);

                const $ultimoBoton = d.getElementById("ultimo-boton").textContent,
                    $quitarMilimetros = d.getElementById("quitar-milimetros"),
                    $seccionConductoPvc = d.querySelector(".seccion-conducto-pvc").value;
                    console.log($seccionConductoPvc);
                // d.getElementById("diametro-a-rectangular").textContent = "Ladoxlado";
                if($ultimoBoton === "conducto-rectangular-pvc"){
                    d.getElementById("diametro-a-rectangular").textContent = "ladoxlado";//cambio leyenda de la tabla
                    $quitarMilimetros.textContent = "";//cambio leyenda de la tabla por ""
                    
                    fila = "<tr><td>" + numeroDeTramo + 
                    "</td><td>" + caudal + 
                    "</td><td>" + longitud + 
                    "</td><td>" + velocidad + 
                    "</td><td>" + $seccionConductoPvc +//sacamos a pantalla diámetro nominal y diámetro interior
                    "</td><td>" + codosCirculares90 + 
                    "</td><td>" + codosCirculares45 + 
                    "</td><td>" + reducciones + 
                    "</td><td>" + derivaciones + 
                    // "</td><td>" + caidaDePresionAccesorios.toFixed(5) + 
                    // "</td><td>" + caidaDePresionLineal.toFixed(5) + 

                    "</td><td>" + caidaDePresionTotal.toFixed(5) + 
                    "</td><td><button class='btn-sumar'>✔️Sumar​</button></td><td><button class='btn-restar'>❌Restar</button></td><td><button class='btn-eliminar'>🗑️​</button>"
                    "</td></tr>";

                } else if ($ultimoBoton === "conducto-rectangular-galvanizado" || $ultimoBoton === "conducto-rectangular-inoxidable" || $ultimoBoton === "conducto-oval-galvanizado" || $ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus" || $ultimoBoton === "conducto-rectangular-climaver-neto"){
                    d.getElementById("diametro-a-rectangular").textContent = "ladoxlado";//cambio leyenda de la tabla
                    $quitarMilimetros.textContent = "";//cambio leyenda de la tabla por ""

                    fila = "<tr><td>" + numeroDeTramo + 
                    "</td><td>" + caudal + 
                    "</td><td>" + longitud + 
                    "</td><td>" + velocidad + 
                    "</td><td>" + $ladoMayor + "x" + $ladoMenor +//sacamos a pantalla diámetro nominal y diámetro interior
                    "</td><td>" + codosCirculares90 + 
                    "</td><td>" + codosCirculares45 + 
                    "</td><td>" + reducciones + 
                    "</td><td>" + derivaciones + 
                    // "</td><td>" + caidaDePresionAccesorios.toFixed(5) + 
                    // "</td><td>" + caidaDePresionLineal.toFixed(5) + 

                    "</td><td>" + caidaDePresionTotal.toFixed(5) + 
                    "</td><td><button class='btn-sumar'>✔️Sumar​</button></td><td><button class='btn-restar'>❌Restar</button></td><td><button class='btn-eliminar'>🗑️​</button>"
                    "</td></tr>";
   
                } else {
                    
                    fila = "<tr><td>" + numeroDeTramo + 
                    "</td><td>" + caudal + 
                    "</td><td>" + longitud + 
                    "</td><td>" + velocidad + 
                    "</td><td>" +"Ø"+ diametroNominal + "/" + diametroPvc +//sacamos a pantalla diámetro nominal y diámetro interior
                    "</td><td>" + codosCirculares90 + 
                    "</td><td>" + codosCirculares45 + 
                    "</td><td>" + reducciones + 
                    "</td><td>" + derivaciones + 
                    // "</td><td>" + caidaDePresionAccesorios.toFixed(5) + 
                    // "</td><td>" + caidaDePresionLineal.toFixed(5) + 

                    "</td><td>" + caidaDePresionTotal.toFixed(5) + 
                    "</td><td><button class='btn-sumar'>✔️Sumar​</button></td><td><button class='btn-restar'>❌Restar</button></td><td><button class='btn-eliminar'>🗑️​</button>"
                    "</td></tr>";
   
                };

// <button class='btn-eliminar'>🗑️</button>

                contenidoTabla += fila;
                $tbodyResultados.innerHTML = contenidoTabla;
                poneInputsACero();
};

// https://www.youtube.com/watch?v=OLFWcG4Xn0w