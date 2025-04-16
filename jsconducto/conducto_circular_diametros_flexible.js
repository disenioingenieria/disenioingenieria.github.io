export default function conductoCircularDiametrosFlexible(diametro, diametroNominal){

    const d = document;
    let $diametro = parseFloat(d.querySelector(diametro).value),
      $diametroNominal = $diametro,
      relacionRadioDiametroCodo90 = 0,
      relacionRadioDiametroCodo45 = 0;//creamos la variable diámetro nominal y la igualamos a la seleccionada en el input
      d.querySelector("#diametro-nominal").value = $diametroNominal;//colocamos el valor en el span diametro nominal
      console.log(`$diametroNominal ${$diametroNominal} diametro ${$diametro}`);
  
    switch ($diametro) {
      case 82:
        $diametro = 82 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;//el numero 90 en este caso es el radio de la ficha técnica de airtub, en este caso es inventado
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;//codos 45º 38% menos pérdida de carga
        break;
      case 102:
        $diametro = 102 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 127:
        $diametro = 127 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 152:
        $diametro = 152 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 160:
        $diametro = 160 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 180:
        $diametro = 180 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 203:
        $diametro = 203 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 229:
        $diametro = 229 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
        case 254:
        $diametro = 254 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 305:
        $diametro = 305 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 315:
        $diametro = 315 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 356:
        $diametro = 356 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 406:
        $diametro = 406 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 457:
        $diametro = 457 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
        case 508:
        $diametro = 508 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 557:
        $diametro = 557 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      case 630:
        $diametro = 630 -(2*0.5);
        relacionRadioDiametroCodo90 = (0.7*diametroNominal)/$diametroNominal;
        relacionRadioDiametroCodo45 = ((0.7*diametroNominal)/$diametroNominal)*0.62;
        break;
      };

      d.querySelector("#diametro-interior").value = $diametro;
      console.log($diametro);
      d.getElementById("relacion-radio-diametro-codos-chapa-90").value = relacionRadioDiametroCodo90;//valen para inox también
      d.getElementById("relacion-radio-diametro-codos-chapa-45").value = relacionRadioDiametroCodo45;
  
    };