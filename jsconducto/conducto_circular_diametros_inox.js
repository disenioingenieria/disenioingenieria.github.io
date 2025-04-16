export default function conductoCircularDiametrosInox(diametro, diametroNominal){

  const d = document;
  let $diametro = parseFloat(d.querySelector(diametro).value),
    $diametroNominal = $diametro,
    relacionRadioDiametroCodo90 = 0,
    relacionRadioDiametroCodo45 = 0;//creamos la variable diámetro nominal y la igualamos a la seleccionada en el input
    d.querySelector("#diametro-nominal").value = $diametroNominal;//colocamos el valor en el span diametro nominal
    console.log(`$diametroNominal ${$diametroNominal} diametro ${$diametro}`);

  switch ($diametro) {
    case 80:
      $diametro = 80 -(2*0.5);
      relacionRadioDiametroCodo90 = (90+diametroNominal/2)/$diametroNominal;//el numero 90 en este caso es el radio de la ficha técnica de airtub, en este caso es inventado
      relacionRadioDiametroCodo45 = ((90+diametroNominal/2)/$diametroNominal)*0.62;//codos 45º 38% menos pérdida de carga
      break;
    case 100:
      $diametro = 100 -(2*0.5);
      relacionRadioDiametroCodo90 = (100+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/$diametroNominal)*0.62;

      break;
    case 125:
      $diametro = 125 -(2*0.5);
      relacionRadioDiametroCodo90 = (100+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 135:
      $diametro = 135 -(2*0.5);
      relacionRadioDiametroCodo90 = (100+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 150:
      $diametro = 150 -(2*0.5);
      relacionRadioDiametroCodo90 = (100+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 160:
      $diametro = 160 -(2*0.5);
      relacionRadioDiametroCodo90 = (100+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 175:
      $diametro = 175 -(2*0.5);
      relacionRadioDiametroCodo90 = (100+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((100+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 200:
      $diametro = 200 -(2*0.5);
      relacionRadioDiametroCodo90 = (112.5+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((112.5+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 225:
      $diametro = 225 -(2*0.5);
      relacionRadioDiametroCodo90 = (112.5+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((112.5+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 250:
      $diametro = 250 -(2*0.5);
      relacionRadioDiametroCodo90 = (125+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((125+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 275:
      $diametro = 275 -(2*0.5);
      relacionRadioDiametroCodo90 = (137.5+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((137.5+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 300:
      $diametro = 300 -(2*0.5);
      relacionRadioDiametroCodo90 = (150+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((150+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 315:
      $diametro = 315 -(2*0.5);
      relacionRadioDiametroCodo90 = (157.5+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((157.5+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 350:
      $diametro = 350 -(2*0.5);
      relacionRadioDiametroCodo90 = (175+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((175+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 355:
      $diametro = 355 -(2*0.5);
      relacionRadioDiametroCodo90 = (175+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((175+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 400:
      $diametro = 400 -(2*0.5);
      relacionRadioDiametroCodo90 = (200+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((200+diametroNominal/2)/$diametroNominal)*0.62;
    case 450:
      $diametro = 450 -(2*0.5);
      relacionRadioDiametroCodo90 = (225+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((225+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 500:
      $diametro = 500 -(2*0.5);
      relacionRadioDiametroCodo90 = (250+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((250+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 550:
      $diametro = 550 -(2*0.5);
      relacionRadioDiametroCodo90 = (275+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((275+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 600:
      $diametro = 600 -(2*0.5);
      relacionRadioDiametroCodo90 = (300+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((300+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 630:
      $diametro = 630 -(2*0.5);
      relacionRadioDiametroCodo90 = (315+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((315+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 650:
      $diametro = 650 -(2*0.5);
      relacionRadioDiametroCodo90 = (325+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((325+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 700:
      $diametro = 700 -(2*0.6);
      relacionRadioDiametroCodo90 = (350+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((350+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 710:
      $diametro = 710 -(2*0.6);
      relacionRadioDiametroCodo90 = (350+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((350+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 750:
      $diametro = 750 -(2*0.6);
      relacionRadioDiametroCodo90 = (375+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((375+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 800:
      $diametro = 800 -(2*0.6);
      relacionRadioDiametroCodo90 = (400+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((400+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 850:
      $diametro = 850 -(2*0.6);
      relacionRadioDiametroCodo90 = (425+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((425+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 900:
      $diametro = 900 -(2*0.6);
      relacionRadioDiametroCodo90 = (450+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((450+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 950:
      $diametro = 950 -(2*0.6);
      relacionRadioDiametroCodo90 = (475+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((475+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1000:
      $diametro = 1000 -(2*0.6);
      relacionRadioDiametroCodo90 = (500+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((500+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1050:
      $diametro = 1050 -(2*.6);
      relacionRadioDiametroCodo90 = (525+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((525+diametroNominal/2)/$diametroNominal)*0.62;
      break;
      case 1100:
      $diametro = 1100 -(2*.6);
      relacionRadioDiametroCodo90 = (550+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((550+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1120:
      $diametro = 1120 -(2*.6);
      relacionRadioDiametroCodo90 = (550+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((550+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1150:
      $diametro = 1150 -(2*0.6);
      relacionRadioDiametroCodo90 = (575+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((550+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1200:
      $diametro = 1200 -(2*0.6);
      relacionRadioDiametroCodo90 = (600+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((600+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1250:
      $diametro = 1250 -(2*0.6);
      relacionRadioDiametroCodo90 = (625+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((625+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1300:
      $diametro = 1300 -(2*0.6);
      relacionRadioDiametroCodo90 = (650+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((625+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1400:
      $diametro = 1400 -(2*.6);
      relacionRadioDiametroCodo90 = (700+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((700+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1500:
      $diametro = 1500 -(2*.6);
      relacionRadioDiametroCodo90 = (750+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((750+diametroNominal/2)/$diametroNominal)*0.62;
      break;
    case 1600:
      $diametro = 1600 -(2*.6);
      relacionRadioDiametroCodo90 = (800+diametroNominal/2)/$diametroNominal;
      relacionRadioDiametroCodo45 = ((800+diametroNominal/2)/$diametroNominal)*0.62;
    //   break;
    // case 1800:
    //   $diametro = 1800 -(2*1.2);
    //   relacionRadioDiametroCodo90 = (900+diametroNominal/2)/$diametroNominal;
    //   relacionRadioDiametroCodo45 = ((900+diametroNominal/2)/$diametroNominal)*0.62;
    //   break;
    // case 2000:
    //   $diametro = 2000 -(2*1.2);
    //   relacionRadioDiametroCodo90 = (1000+diametroNominal/2)/$diametroNominal;
    //   relacionRadioDiametroCodo45 = ((1000+diametroNominal/2)/$diametroNominal)*0.62;
    //   break;
    };




    d.querySelector("#diametro-interior").value = $diametro;
    console.log($diametro);
    d.getElementById("relacion-radio-diametro-codos-chapa-90").value = relacionRadioDiametroCodo90;//valen para inox también
    d.getElementById("relacion-radio-diametro-codos-chapa-45").value = relacionRadioDiametroCodo45;

  };