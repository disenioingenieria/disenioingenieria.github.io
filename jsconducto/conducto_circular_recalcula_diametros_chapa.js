import poneInputsACero from "./conducto_pone_inputs_a_cero.js";

export default function conductoCircularRecalculaDiametrosChapa(){

    const d = document,
    $diametroCalculado = d.querySelector("#diametro-calculado").value;
    console.log("recalcula", $diametroCalculado);
    let diametroNominal = 0,
        diametroInterior = 0,
        relacionRadioDiametroCodo90 = 0,
        relacionRadioDiametroCodo45 = 0;
  
    
    if ($diametroCalculado <= 80){
        diametroNominal = 80;
        diametroInterior = 80 -(2*0.5);;// 16 < diametro <= 20
        relacionRadioDiametroCodo90 = (90+diametroNominal/2)/diametroNominal;//el numero 90 en este caso es el radio de la ficha técnica de airtub, en este caso es inventado
        relacionRadioDiametroCodo45 = ((90+diametroNominal/2)/diametroNominal)*0.62;//codos 45º 38% menos pérdida de carga
    } else if ($diametroCalculado > 80 && $diametroCalculado  <= 100){ // (90+40)/80
        diametroNominal = 100;
        diametroInterior = 100 -(2*0.5);
        relacionRadioDiametroCodo90 = (100+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 100 && $diametroCalculado  <= 125){
        diametroNominal = 125;
        diametroInterior = 125 -(2*0.5);
        relacionRadioDiametroCodo90 = (100+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 125 && $diametroCalculado  <= 135){
        diametroNominal = 135;
        diametroInterior = 135 -(2*0.5);
        relacionRadioDiametroCodo90 = (100+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 135 && $diametroCalculado  <= 150){
        diametroNominal = 150;
        diametroInterior = 150 -(2*0.5);
        relacionRadioDiametroCodo90 = (100+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 150 && $diametroCalculado  <= 160){
        diametroNominal = 160;
        diametroInterior = 160 -(2*0.5);
        relacionRadioDiametroCodo90 = (100+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 160 && $diametroCalculado  <= 175){
        diametroNominal = 175;
        diametroInterior = 175 -(2*0.5);
        relacionRadioDiametroCodo90 = (100+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 175 && $diametroCalculado  <= 200){
        diametroNominal = 200;
        diametroInterior = 200 -(2*0.5);
        relacionRadioDiametroCodo90 = (112.5+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((112.5+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 200 && $diametroCalculado  <= 225){
        diametroNominal = 225;
        diametroInterior = 225 -(2*0.5);
        relacionRadioDiametroCodo90 = (112.5+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((112.5+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 225 && $diametroCalculado  <= 250){
        diametroNominal = 250;
        diametroInterior = 250 -(2*0.6);
        relacionRadioDiametroCodo90 = (125+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((125+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 250 && $diametroCalculado  <= 275){
        diametroNominal = 275;
        diametroInterior = 275 -(2*0.6);
        relacionRadioDiametroCodo90 = (137.5+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((137.5+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 275 && $diametroCalculado  <= 300){
        diametroNominal = 300;
        diametroInterior = 300 -(2*0.6);
        relacionRadioDiametroCodo90 = (150+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((150+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 300 && $diametroCalculado  <= 315){
        diametroNominal = 315;
        diametroInterior = 315 -(2*0.6);
        relacionRadioDiametroCodo90 = (157.5+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((157.5+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 315 && $diametroCalculado  <= 350){
        diametroNominal = 350;
        diametroInterior = 350 -(2*0.6);
        relacionRadioDiametroCodo90 = (175+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((175+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 350 && $diametroCalculado  <= 355){
        diametroNominal = 355;
        diametroInterior = 355 -(2*0.6);
        relacionRadioDiametroCodo90 = (175+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((175+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 355 && $diametroCalculado  <= 400){
        diametroNominal = 400;
        diametroInterior = 400 -(2*0.6);
        relacionRadioDiametroCodo90 = (200+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((200+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 400 && $diametroCalculado  <= 450){
        diametroNominal = 450;
        diametroInterior = 450 -(2*0.6);
        relacionRadioDiametroCodo90 = (225+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((225+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 450 && $diametroCalculado  <= 500){
        diametroNominal = 500;
        diametroInterior = 500 -(2*0.6);
        relacionRadioDiametroCodo90 = (250+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((250+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 500 && $diametroCalculado  <= 550){
        diametroNominal = 550;
        diametroInterior = 550 -(2*0.7);
        relacionRadioDiametroCodo90 = (275+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((275+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 550 && $diametroCalculado  <= 600){
        diametroNominal = 600;
        diametroInterior = 600 -(2*0.7);
        relacionRadioDiametroCodo90 = (300+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((300+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 600 && $diametroCalculado  <= 630){
        diametroNominal = 630;
        diametroInterior = 630 -(2*0.7);
        relacionRadioDiametroCodo90 = (315+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((315+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 630 && $diametroCalculado  <= 650){
        diametroNominal = 650;
        diametroInterior = 650 -(2*0.7);
        relacionRadioDiametroCodo90 = (325+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((325+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 650 && $diametroCalculado  <= 700){
        diametroNominal = 700;
        diametroInterior = 700 -(2*0.7);
        relacionRadioDiametroCodo90 = (350+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((350+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 700 && $diametroCalculado  <= 710){
        diametroNominal = 710;
        diametroInterior = 710 -(2*0.7);
        relacionRadioDiametroCodo90 = (350+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((350+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 710 && $diametroCalculado  <= 750){
        diametroNominal = 750;
        diametroInterior = 750 -(2*0.7);
        relacionRadioDiametroCodo90 = (375+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((375+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 750 && $diametroCalculado  <= 800){
        diametroNominal = 800;
        diametroInterior =  800 -(2*0.7);
        relacionRadioDiametroCodo90 = (400+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((400+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 800 && $diametroCalculado  <= 850){
        diametroNominal = 850;
        diametroInterior = 850 -(2*0.8);
        relacionRadioDiametroCodo90 = (425+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((425+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 850 && $diametroCalculado  <= 900){
        diametroNominal = 900;
        diametroInterior = 900 -(2*0.8);
        relacionRadioDiametroCodo90 = (450+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((450+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 900 && $diametroCalculado  <= 950){
        diametroNominal = 950;
        diametroInterior = 950 -(2*0.8);
        relacionRadioDiametroCodo90 = (475+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((475+diametroNominal/2)/diametroNominal)*0.62;

    }  else if ($diametroCalculado > 950 && $diametroCalculado  <= 1000){
        diametroNominal = 1000;
        diametroInterior = 1000 -(2*0.8);
        relacionRadioDiametroCodo90 = (500+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((500+diametroNominal/2)/diametroNominal)*0.62;

    }  else if ($diametroCalculado > 1000 && $diametroCalculado  <= 1050){
        diametroNominal = 1050;
        diametroInterior = 1050 -(2*1);
        relacionRadioDiametroCodo90 = (525+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((525+diametroNominal/2)/diametroNominal)*0.62;

    }  else if ($diametroCalculado > 1050 && $diametroCalculado  <= 1100){
        diametroNominal = 1100;
        diametroInterior = 1100 -(2*1);
        relacionRadioDiametroCodo90 = (550+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((550+diametroNominal/2)/diametroNominal)*0.62;

    }  else if ($diametroCalculado > 1100 && $diametroCalculado  <= 1120){
        diametroNominal = 1120;
        diametroInterior = 1120 -(2*1);
        relacionRadioDiametroCodo90 = (550+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((550+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1120 && $diametroCalculado  <= 1150){
        diametroNominal = 1150;
        diametroInterior = 1150 -(2*1.2);
        relacionRadioDiametroCodo90 = (575+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((575+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1150 && $diametroCalculado  <= 1200){
        diametroNominal = 1200;
        diametroInterior =  1200 -(2*1.2);
        relacionRadioDiametroCodo90 = (600+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((600+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1200 && $diametroCalculado  <= 1250){
        diametroNominal = 1250;
        diametroInterior = 1250 -(2*1.2);
        relacionRadioDiametroCodo90 = (625+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((625+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1250 && $diametroCalculado  <= 1300){
        diametroNominal = 1300;
        diametroInterior = 1300 -(2*1.2);
        relacionRadioDiametroCodo90 = (650+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((650+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1300 && $diametroCalculado  <= 1400){
        diametroNominal = 1400;
        diametroInterior = 1400 -(2*1.2);
        relacionRadioDiametroCodo90 = (700+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((700+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1400 && $diametroCalculado  <= 1500){
        diametroNominal = 1500;
        diametroInterior = 1500 -(2*1.2);
        relacionRadioDiametroCodo90 = (750+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((750+diametroNominal/2)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 1500 && $diametroCalculado <= 1600) {
        diametroNominal = 1600;
        diametroInterior = 1600 -(2*1.2);
        relacionRadioDiametroCodo90 = (800+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((800+diametroNominal/2)/diametroNominal)*0.62;
    } else if ($diametroCalculado > 1600 && $diametroCalculado <= 1800 ){
        diametroNominal = 1800;
        diametroInterior = 1800 -(2*1.2);
        relacionRadioDiametroCodo90 = (900+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((900+diametroNominal/2)/diametroNominal)*0.62;

    } else { $diametroCalculado > 1800 
        diametroNominal = 2000;
        diametroInterior = 2000 -(2*1.2);
        relacionRadioDiametroCodo90 = (1000+diametroNominal/2)/diametroNominal;
        relacionRadioDiametroCodo45 = ((1000+diametroNominal/2)/diametroNominal)*0.62;

        const $velocidad = d.querySelector("#velocidad").value,
            $caudal = d.querySelector("#caudal").value;

        alert(`Diámetro ${$diametroCalculado.toFixed(1)} mm. demasiado alto o ${$velocidad} m/sg demasiado baja para el el caudal ${$caudal} m3/h seleccionado, el diámetro máximo para este tipo de conducto es de 1.200 mm.`)
        poneInputsACero();
    };


    d.querySelector("#diametro-nominal").value = diametroNominal;
    d.querySelector("#diametro-interior").value = diametroInterior;
    d.getElementById("relacion-radio-diametro-codos-chapa-90").value = relacionRadioDiametroCodo90;
    d.getElementById("relacion-radio-diametro-codos-chapa-45").value = relacionRadioDiametroCodo45;

    console.log(`${diametroNominal}X${diametroInterior}`);
    console.log(`Relacionradiodiametrocodo90: ${relacionRadioDiametroCodo90} relacioncodo45: ${relacionRadioDiametroCodo45}`)
};
    

