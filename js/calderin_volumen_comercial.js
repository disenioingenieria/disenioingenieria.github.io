const d = document;

  export default function seleccionavolumenComercialCalderinCalderin(volumenCalderin, volumenComercialCalderin){
    console.log(`estoy en selecciona volumen comercial calderín`);
    let $volumenCalderin = d.querySelector(volumenCalderin).value;
    console.log(`volumen Calderín ${$volumenCalderin}`);

    if ($volumenCalderin < 5){
      volumenComercialCalderin = 5;
    } else if ($volumenCalderin > 5 && $volumenCalderin <= 8){
      volumenComercialCalderin = 8;
    } else if ($volumenCalderin > 8 && $volumenCalderin <= 12){
      volumenComercialCalderin = 12;
    } else if ($volumenCalderin > 12 && $volumenCalderin <= 20){
      volumenComercialCalderin = 20;
    } else if ($volumenCalderin > 20 && $volumenCalderin <= 24){
      volumenComercialCalderin = 24;
    } else if ($volumenCalderin > 24 && $volumenCalderin <= 25){
      volumenComercialCalderin = 25;
    } else if ($volumenCalderin > 25 && $volumenCalderin <= 35){
      volumenComercialCalderin = 35;
    } else if ($volumenCalderin > 35 && $volumenCalderin <= 50){
      volumenComercialCalderin = 50;
    } else if ($volumenCalderin > 50 && $volumenCalderin <= 80){
      volumenComercialCalderin = 80;
    } else if ($volumenCalderin > 80 && $volumenCalderin <= 100){
      volumenComercialCalderin = 100;
    } else if ($volumenCalderin > 100 && $volumenCalderin <= 150){
      volumenComercialCalderin = 150;
    } else if ($volumenCalderin > 150 && $volumenCalderin <= 200){
      volumenComercialCalderin = 200;
    } else if ($volumenCalderin > 200 && $volumenCalderin <= 300){
      volumenComercialCalderin = 300;
    } else if ($volumenCalderin > 300 && $volumenCalderin <= 500){
      volumenComercialCalderin = 500;
    } else if ($volumenCalderin > 500 && $volumenCalderin <= 700){
      volumenComercialCalderin = 700;
    } else if ($volumenCalderin > 700 && $volumenCalderin <= 900){
      volumenComercialCalderin = 900;
    } else if ($volumenCalderin > 900 && $volumenCalderin <= 1000){
      volumenComercialCalderin = 1000;
    } else if ($volumenCalderin > 1000 && $volumenCalderin <= 1400){
      volumenComercialCalderin = 1400;
    } else if ($volumenCalderin > 1400 && $volumenCalderin <= 2000){
      volumenComercialCalderin = 2000;
    } else if ($volumenCalderin > 2000 && $volumenCalderin <= 3000){
      volumenComercialCalderin = 3000;
    } else if ($volumenCalderin > 3000 && $volumenCalderin <= 4000){
      volumenComercialCalderin = 4000;
    } else if ($volumenCalderin > 4000 && $volumenCalderin <= 5000){
      volumenComercialCalderin = 5000;
    } else if ($volumenCalderin > 5000 && $volumenCalderin <= 6000){
      volumenComercialCalderin = 6000;
    } else {
      volumenComercialCalderin = 8000;
    }
      d.querySelector("#volumen-comercial-calderin").value = volumenComercialCalderin;
      console.log(`volumenComercialCalderin = ${volumenComercialCalderin}`);
  };
