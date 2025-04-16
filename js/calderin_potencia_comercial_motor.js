const d = document;

export default function seleccionaPotenciaComercialMotor(potenciaMotor, potenciaComercialMotor){
    console.log(`estoy en selecciona potencia comercial motor`);
    let $potenciaMotor = d.querySelector(potenciaMotor).value;
    console.log(`potencia motor ${$potenciaMotor}`);

    if($potenciaMotor <= 0.24){
        potenciaComercialMotor = 0.24;
    } else if ($potenciaMotor > 0.24 && $potenciaMotor <= 0.37){
        potenciaComercialMotor = 0.37;
    } else if ($potenciaMotor > 0.37 && $potenciaMotor <= 0.55){
        potenciaComercialMotor = 0.55;
    } else if ($potenciaMotor > 0.55 && $potenciaMotor <= 0.75){
        potenciaComercialMotor = 0.75;
        // P2Motor = 0.55
    } else if ($potenciaMotor > 0.75 && $potenciaMotor <= 1.1){
        potenciaComercialMotor = 1.1;
        // P2Motor = 0.9;
    } else if ($potenciaMotor > 1.1 && $potenciaMotor <= 1.5){
        potenciaComercialMotor = 1.5;
    } else if ($potenciaMotor > 1.5 && $potenciaMotor <= 2.2){
        potenciaComercialMotor = 2.2;
    } else if ($potenciaMotor > 2.2 && $potenciaMotor <= 3){
        potenciaComercialMotor = 3;
    } else if ($potenciaMotor > 3 && $potenciaMotor <= 4){
        potenciaComercialMotor = 4;
    } else if ($potenciaMotor > 4 && $potenciaMotor <= 5.5){
        potenciaComercialMotor = 5.5;
    } else if ($potenciaMotor > 5.5 && $potenciaMotor <= 7.5){
        potenciaComercialMotor = 7.5;
    } else if ($potenciaMotor > 7.5 && $potenciaMotor <= 11){
        potenciaComercialMotor = 11;
    } else if ($potenciaMotor > 11 && $potenciaMotor <= 15){
        potenciaComercialMotor = 15;
    } else if ($potenciaMotor > 15 && $potenciaMotor <= 18.5){
        potenciaComercialMotor = 18.5;
    } else if ($potenciaMotor > 18.5 && $potenciaMotor <= 22){
        potenciaComercialMotor = 22;
    } else if ($potenciaMotor > 22 && $potenciaMotor <= 30){
        potenciaComercialMotor = 30;
    } else if ($potenciaMotor > 30 && $potenciaMotor <= 37){
        potenciaComercialMotor = 37;
    } else if ($potenciaMotor > 37 && $potenciaMotor <= 45){
        potenciaComercialMotor = 45;
    } else if ($potenciaMotor > 45 && $potenciaMotor <= 55){
        potenciaComercialMotor = 55;
    } else if ($potenciaMotor > 55 && $potenciaMotor <= 75){
        potenciaComercialMotor = 75;
    } else if ($potenciaMotor > 75 && $potenciaMotor <= 90){
        potenciaComercialMotor = 90;
    } else {
        potenciaComercialMotor = 110;
    }

        d.querySelector("#potencia-motor").value = potenciaComercialMotor;
        console.log(`potencia comercial Motor ${potenciaComercialMotor} `);

};
