import poneInputsACero from "./conducto_pone_inputs_a_cero.js";

export default function conductoCircularRecalculaDiametrosFlexible(){

    const d = document,
    $diametroCalculado = d.querySelector("#diametro-calculado").value;
    console.log("recalcula", $diametroCalculado);
    let diametroNominal = 0,
        diametroInterior = 0,
        relacionRadioDiametroCodo90 = 0,
        relacionRadioDiametroCodo45 = 0;
    
    if ($diametroCalculado <= 82){
        diametroNominal = 82;
        diametroInterior = 82 -(2*0.5);;// 16 < diametro <= 20
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;//el numero 90 en este caso es el radio de la ficha técnica de airtub, en este caso es inventado
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;//codos 45º 38% menos pérdida de carga
    } else if ($diametroCalculado > 82 && $diametroCalculado  <= 102){ // (90+40)/80
        diametroNominal = 102;
        diametroInterior = 102 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 102 && $diametroCalculado  <= 127){
        diametroNominal = 127;
        diametroInterior = 127 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 127 && $diametroCalculado  <= 152){
        diametroNominal = 152;
        diametroInterior = 152 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 152 && $diametroCalculado  <= 160){
        diametroNominal = 160;
        diametroInterior = 160 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 160 && $diametroCalculado  <= 203){
        diametroNominal = 203;
        diametroInterior = 203 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 203 && $diametroCalculado  <= 254){
        diametroNominal = 254;
        diametroInterior = 254 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 254 && $diametroCalculado  <= 305){
        diametroNominal = 305;
        diametroInterior = 305 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 305 && $diametroCalculado  <= 315){
        diametroNominal = 315;
        diametroInterior = 315 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 315 && $diametroCalculado  <= 356){
        diametroNominal = 356;
        diametroInterior = 356 -(2*0.6);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 356 && $diametroCalculado  <= 406){
        diametroNominal = 406;
        diametroInterior = 406 -(2*0.6);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;

    } else if ($diametroCalculado > 406 ){ 
        diametroNominal = 508;
        diametroInterior = 508 -(2*1.2);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/diametroNominal)*0.62;
    } else {

        const $velocidad = d.querySelector("#velocidad").value,
            $caudal = d.querySelector("#caudal").value;

        alert(`Diámetro ${$diametroCalculado.toFixed(1)} mm. demasiado alto o ${$velocidad} m/sg demasiado baja para el caudal ${$caudal} m3/h seleccionado, el diámetro máximo para este tipo de conducto es de 508 mm.`)
        poneInputsACero();
    };

    d.querySelector("#diametro-nominal").value = diametroNominal;
    d.querySelector("#diametro-interior").value = diametroInterior;
    d.getElementById("relacion-radio-diametro-codos-chapa-90").value = relacionRadioDiametroCodo90;
    d.getElementById("relacion-radio-diametro-codos-chapa-45").value = relacionRadioDiametroCodo45;

    console.log(`${diametroNominal}X${diametroInterior}`);
    console.log(`Relacionradiodiametrocodo90: ${relacionRadioDiametroCodo90} relacioncodo45: ${relacionRadioDiametroCodo45}`)
};
    

