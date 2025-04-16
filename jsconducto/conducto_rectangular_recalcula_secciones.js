export default function conductoRectangularRecalculaSecciones(){

    const d = document;

        let $ladoMayor = d.getElementById("lado-mayor").textContent,
            $ladoMenor = d.getElementById("lado-menor").textContent;

            console.log(`lado mayor ${$ladoMayor} lado menor ${$ladoMenor}`)

        if ($ladoMayor <= 500){
            $ladoMayor = $ladoMayor - (2*0.6);
            $ladoMenor = $ladoMenor - (2*0.6);
        } else if ($ladoMayor > 500 && $ladoMayor <= 1000){ 
            $ladoMayor = $ladoMayor - (2*1);
            $ladoMenor = $ladoMenor - (2*1);

        } else {
            $ladoMayor = $ladoMayor - (2*1.2);
            $ladoMenor = $ladoMenor - (2*1.2);

        } ;
        
        d.querySelector("#lado-mayor-interior").textContent = $ladoMayor;//coloco los lados interiores en el DOM
        d.querySelector("#lado-menor-interior").textContent = $ladoMenor;
        console.log(`${$ladoMayor}x${$ladoMenor}`);
    };


