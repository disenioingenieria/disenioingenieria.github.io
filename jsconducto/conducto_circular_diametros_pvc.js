export default function conductoCircularDiametrosPvc(diametro, diametroNominal){

  const d = document;
  let $diametro = parseFloat(d.querySelector(diametro).value),
    $diametroNominal = $diametro;//creamos la variable diámetro nominal y la igualamos a la seleccionada en el input
    d.querySelector("#diametro-nominal").value = $diametroNominal;//colocamos el valor en el span diametro nominal
    // console.log($diametroNominal);
  switch ($diametro) {
    case 16:
      $diametro = 16 -(2*1.5);
      break;
    case 20:
      $diametro = 20 -(2*1.9);
      break;
    case 25:
      $diametro = 25 -(2*2.3);
      break;
    case 32:
      $diametro = 32 -(2*2.4);
      break;
    case 40:
      $diametro = 40 -(2*1.5);
      break;
    case 50:
      $diametro = 50 -(2*1.6);
      break;
    case 63:
      $diametro = 63 -(2*2);
      break;
    case 75:
      $diametro = 75 -(2*2.3);
      break;
    case 90:
      $diametro = 90 -(2*2.8);
      break;
    case 100:
      $diametro = 100 -(2*2.3);
      break;
    case 110:
      $diametro = 110 -(2*2.7);
      break;
    case 120:
      $diametro = 120 -(2*2.7);
      break;
    case 125:
      $diametro = 125 -(2*3.1);
      break;
    case 140:
      $diametro = 140 -(2*3.5);
      break;
    case 160:
      $diametro = 160 -(2*4);
      break;
    case 180:
      $diametro = 180 -(2*4.4);
      break;
    case 200:
      $diametro = 200 -(2*4.9);
      break;
    case 250:
      $diametro = 250 -(2*6.2);
      break;
    case 315:
      $diametro = 315 -(2*7.7);
      break;
    case 400:
      $diametro = 400 -(2*7);
      break;
    case 450:
      $diametro = 450 -(2*7.9);
      break;
    case 500:
      $diametro = 500 -(2*8.8);
      break;
    case 630:
      $diametro = 630 -(2*11);
      break;
    case 710:
      $diametro = 710 -(2*12.4);
      break;
    case 800:
      $diametro = 800 -(2*14);
      break;
    case 900:
      $diametro = 900 -(2*15.7);
      break;
    case 1000:
      $diametro = 1000 -(2*17.5);
      break;
    case 1100:
      $diametro = 1100 -(2*21);
      break;
    case 1200:
      $diametro = 1200 -(2*21.1);
      break;
    }
    d.querySelector("#diametro-interior").value = $diametro;
    // console.log($diametro);
  };