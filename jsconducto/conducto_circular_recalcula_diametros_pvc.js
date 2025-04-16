import poneInputsACero from "./conducto_pone_inputs_a_cero.js";

export default function conductoCircularRecalculaDiametrosPvc(){

    const d = document,
    $diametroCalculado = d.querySelector("#diametro-calculado").value;
    console.log("recalcula", $diametroCalculado);
    let diametroNominal = 0,
        diametroInterior = 0;
    
    if ($diametroCalculado <= 16){
        diametroNominal = 16;
        diametroInterior = 16 -(2*1.5);// 16 < diametro <= 20
    } else if ($diametroCalculado > 16 && $diametroCalculado  <= 20){
        diametroNominal = 20;
        diametroInterior = 20 -(2*1.9);

    } else if ($diametroCalculado > 20 && $diametroCalculado  <= 25){
        diametroNominal = 25;
        diametroInterior = 25 -(2*2.3);

    } else if ($diametroCalculado > 25 && $diametroCalculado  <= 32){
        diametroNominal = 32;
        diametroInterior = 32 -(2*2.4);

    } else if ($diametroCalculado > 32 && $diametroCalculado  <= 40){
        diametroNominal = 40;
        diametroInterior = 40 -(2*1.5);

    } else if ($diametroCalculado > 40 && $diametroCalculado  <= 50){
        diametroNominal = 50;
        diametroInterior = 50 -(2*1.6);

    } else if ($diametroCalculado > 50 && $diametroCalculado  <= 63){
        diametroNominal = 63;
        diametroInterior = 63 -(2*2);

    } else if ($diametroCalculado > 63 && $diametroCalculado  <= 75){
        diametroNominal = 75;
        diametroInterior = 75 -(2*2.3);

    } else if ($diametroCalculado > 75 && $diametroCalculado  <= 90){
        diametroNominal = 90;
        diametroInterior = 90 -(2*2.8);

    } else if ($diametroCalculado > 90 && $diametroCalculado  <= 100){
        diametroNominal = 100;
        diametroInterior = 100 -(2*2.3);

    } else if ($diametroCalculado > 100 && $diametroCalculado  <= 110){
        diametroNominal = 110;
        diametroInterior = 110 -(2*2.7);

    } else if ($diametroCalculado > 110 && $diametroCalculado  <= 120){
        diametroNominal = 120;
        diametroInterior = 120 -(2*2.7);

    } else if ($diametroCalculado > 120 && $diametroCalculado  <= 125){
        diametroNominal = 125;
        diametroInterior = 125 -(2*3.1);

    } else if ($diametroCalculado > 125 && $diametroCalculado  <= 140){
        diametroNominal = 140;
        diametroInterior = 140 -(2*3.5);

    } else if ($diametroCalculado > 140 && $diametroCalculado  <= 160){
        diametroNominal = 160;
        diametroInterior = 160 -(2*4);

    } else if ($diametroCalculado > 160 && $diametroCalculado  <= 180){
        diametroNominal = 180;
        diametroInterior = 180 -(2*4.4);

    } else if ($diametroCalculado > 180 && $diametroCalculado  <= 200){
        diametroNominal = 200;
        diametroInterior = 200 -(2*4.9);

    } else if ($diametroCalculado > 200 && $diametroCalculado  <= 250){
        diametroNominal = 250;
        diametroInterior = 250 -(2*6.2);

    } else if ($diametroCalculado > 250 && $diametroCalculado  <= 315){
        diametroNominal = 315;
        diametroInterior = 315 -(2*7.7);

    } else if ($diametroCalculado > 315 && $diametroCalculado  <= 400){
        diametroNominal = 400;
        diametroInterior = 400 -(2*7);

    } else if ($diametroCalculado > 400 && $diametroCalculado  <= 450){
        diametroNominal = 450;
        diametroInterior = 450 -(2*7.9);

    } else if ($diametroCalculado > 450 && $diametroCalculado  <= 500){
        diametroNominal = 500;
        diametroInterior = 500 -(2*8.8);

    } else if ($diametroCalculado > 500 && $diametroCalculado  <= 630){
        diametroNominal = 630;
        diametroInterior = 630 -(2*11);

    } else if ($diametroCalculado > 630 && $diametroCalculado  <= 710){
        diametroNominal = 710;
        diametroInterior = 710 -(2*12.4);

    } else if ($diametroCalculado > 710 && $diametroCalculado  <= 800){
        diametroNominal = 800;
        diametroInterior = 800 -(2*14);

    } else if ($diametroCalculado > 800 && $diametroCalculado  <= 900){
        diametroNominal = 900;
        diametroInterior = 900 -(2*15.7);

    } else if ($diametroCalculado > 900 && $diametroCalculado  <= 1000){
        diametroNominal = 1000;
        diametroInterior = 1000 -(2*17.5);

    } else if ($diametroCalculado > 1000 && $diametroCalculado  <= 1100){
        diametroNominal = 1100;
        diametroInterior = 1100 -(2*21);

    } else if ($diametroCalculado > 1100 && $diametroCalculado  <= 1200){
        diametroNominal = 1200;
        diametroInterior = 1200 -(2*21.1);
    } else {
        const $velocidad = d.querySelector("#velocidad").value,
            $caudal = d.querySelector("#caudal").value;
        alert(`Diámetro ${$diametroCalculado.toFixed(1)} mm. demasiado alto o ${$velocidad} m/sg demasiado baja para el el caudal ${$caudal} m3/h seleccionado, el diámetro máximo para este tipo de conducto es de 1.200 mm.`)
        poneInputsACero();
    };


    // if(diametroInterior > 1200 -(2*21.1)){
    //   }
  
    d.querySelector("#diametro-nominal").value = diametroNominal;
    d.querySelector("#diametro-interior").value = diametroInterior;
    console.log(`${diametroNominal}X${diametroInterior}`);
};
    


