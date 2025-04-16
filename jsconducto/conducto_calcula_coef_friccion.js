export default function calculaCoeficienteDeFriccion(){

const d = document,
  $reynolds = parseFloat(d.getElementById("reynolds").value),
  $rugosidadRelativa = parseFloat(d.getElementById("rugosidad-relativa").value);

if ($reynolds == 0){
  $reynolds = 100000;
}

let a = 0.0,
  b = 10,
  f = 1,
  c = 0;

while (Math.abs(f) > 0.0001) {
  c = (a + b)/2;
  let fa = 1/(c**.5);

let fb = (-2*Math.log10(($rugosidadRelativa/3.7)+(2.51/($reynolds*(c**.5)))));//*0.434294481903252;

f = fb - fa;

if (f > 0){
  b = c;
} else {
  a = c;
}//cierra while

}
//  console.log(`coeficiente de fricción: ${c}`);

 d.getElementById("coeficiente-de-friccion").value = c;

};
