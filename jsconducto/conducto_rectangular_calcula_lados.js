import conductoRectangularRecalculaSecciones from "./conducto_rectangular_recalcula_secciones.js";

export default function conductoRectangularCalculaLados(){

    const d = document,
        $caudal = parseFloat(d.getElementById("caudal").value)/3600,//paso los m3/h a m3/sg
        $velocidad = parseFloat(d.getElementById("velocidad").value),
        $ladoMayor = parseFloat(d.getElementById("lado-mayor").value),
        $ladoMenor = parseFloat(d.getElementById("lado-menor").value);

       
    let ladoMenor = 50,//pasamos los mm a mts para poder comparar con la $superficieCalculada
     ladoMayor = 50,
     superficie = 0,
     relacionDeLados = ladoMayor/ladoMenor,
     $diametroEquivalente = 0,
     $velocidadCalculada = 0,
     $superficieCalculada = d.getElementById("superficie-calculada");

    // console.log($superficieCalculada);//Superficie en mm2 que viene de conducto calcula rectangular

    if($ladoMenor && !$ladoMayor){
        ladoMenor = $ladoMenor;
        ladoMayor = 50;
        seccionConLadoMenorOMayor();
    } else if($ladoMayor && !$ladoMenor){
        ladoMenor = $ladoMayor;
        ladoMayor = 50;
        seccionConLadoMenorOMayor();
    } else if ($ladoMayor && $ladoMenor){
        ladoMenor = $ladoMenor;
        ladoMayor = $ladoMayor;
        seccionConLadoMayorYMenor();
    };

    console.log(`lado mayor: ${ladoMayor}, lado menor: ${ladoMenor}, superficie calculada: ${$superficieCalculada}. velocidad calculada ${$velocidadCalculada} velocidad ${$velocidad} relacion de lados ${relacionDeLados}`);

    d.getElementById("lado-menor").textContent = ladoMenor; //valores de los lados al DOM, en textContent para que no aparezcan en el input pero aparecen en pantalla
    d.getElementById("lado-mayor").textContent = ladoMayor;

    d.getElementById("lado-mayor-interior").classList.add("none");//los hago desaparecer de la pantalla
    d.getElementById("lado-menor-interior").classList.add("none");

        conductoRectangularRecalculaSecciones();//Quito los espesores de los conductos a los lados

        let ladoMenorInterior = parseFloat(d.getElementById("lado-menor-interior").textContent),//recupero los lados interiores para calcular
            ladoMayorInterior = parseFloat(d.getElementById("lado-mayor-interior").textContent);

            $superficieCalculada = ladoMenorInterior*ladoMayorInterior

        console.log (`superficie ${superficie} es < que superficie calculada ${$superficieCalculada}, lado mayor = ${ladoMayorInterior}, lado menor ${ladoMenorInterior} relacion de lados: ${relacionDeLados}`)

        $diametroEquivalente = 1.3*(((ladoMayorInterior*ladoMenorInterior)**0.625)/((ladoMayorInterior+ladoMenorInterior)**0.250));
        // $superficie = ladoMayorInterior*ladoMenorInterior;
        $velocidadCalculada = ($caudal)/($superficieCalculada/1000000);//paso la superfice de mm2 a m2
        d.getElementById("velocidad-calculada").value = $velocidadCalculada;//pongo la velocidad calculada en el DOM
        d.getElementById("lado-menor").textContent = ladoMenor;
        d.getElementById("lado-mayor").textContent = ladoMayor;
        d.getElementById("diametro-equivalente").value = $diametroEquivalente/1000;//paso el diametro equivalente a mts.

        console.log(`diametro Equivalente: ${$diametroEquivalente} velocidad calculada: ${$velocidadCalculada}, velocidad ${$velocidad}`);

        function seccionConLadoMenorOMayor(){
            $superficieCalculada = ladoMayor*ladoMenor;
            $velocidadCalculada = $caudal/($superficieCalculada/1000000);//paso los mm2 a m2 obtengo m/sg ya que la velocidad está en m3/sg
            console.log(`lado mayor: ${ladoMayor}, lado menor: ${ladoMenor}, superficie calculada: ${$superficieCalculada}. velocidad calculada ${$velocidadCalculada} velocidad ${$velocidad}`)
    
            while ($velocidad <= $velocidadCalculada && relacionDeLados <= 7){
                ladoMayor += 50;
                relacionDeLados = ladoMayor/ladoMenor;
                $superficieCalculada = ladoMenor*ladoMayor;
                $velocidadCalculada = $caudal/($superficieCalculada/1000000);
    
                console.log(`lado mayor: ${ladoMayor}, lado menor: ${ladoMenor}, superficie calculada: ${$superficieCalculada}. velocidad calculada ${$velocidadCalculada} velocidad ${$velocidad} relacion de lados ${relacionDeLados}`)
            };
    
            if(relacionDeLados > 7){
                ladoMayor = ladoMayor - 50;
            };  
            
                $superficieCalculada = ladoMenor*ladoMayor;//vuelvo a calcular superficie y velocidad por si la relación de lados es mayor que 7
                $velocidadCalculada = $caudal/($superficieCalculada/1000000);
    
                console.log(`lado mayor: ${ladoMayor}, lado menor: ${ladoMenor}, caudal: ${$caudal} superficie calculada: ${$superficieCalculada}. velocidad calculada ${$velocidadCalculada} velocidad ${$velocidad} relacion de lados ${relacionDeLados}`)
        };
    
        function seccionConLadoMayorYMenor(){
            $superficieCalculada = ladoMenor*ladoMayor;
            $velocidadCalculada = $caudal/($superficieCalculada/1000000);
        };
};