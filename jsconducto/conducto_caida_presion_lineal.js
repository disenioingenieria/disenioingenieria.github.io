import calculaCoeficienteDeFriccion from "./conducto_calcula_coef_friccion.js";

export default function caidaDePresionLineal(){

  const d = document,
    $densidad = parseFloat(d.getElementById("densidad-del-aire").value),
    $diametroInterior = parseFloat(d.getElementById("diametro-interior").value),
    $velocidad = parseFloat(d.getElementById("velocidad-calculada").value),
    $viscosidad = parseFloat(d.getElementById("viscosidad-del-aire").value),
    $ultimoBoton = d.getElementById("ultimo-boton").textContent,
    $diametroEquivalente = parseFloat(d.getElementById("diametro-equivalente").value);

    let reynolds = 0,
      rugosidadRelativa = 0;

      console.log(`densidad del aire: ${$densidad} velocidad: ${$velocidad} diametro equivalente: ${$diametroEquivalente} diametro interior: ${$diametroInterior} viscosidad: ${$viscosidad}`);

      if($ultimoBoton === "conducto-rectangular-pvc" || $ultimoBoton === "conducto-rectangular-galvanizado" || $ultimoBoton === "conducto-rectangular-inoxidable" || $ultimoBoton === "conducto-oval-galvanizado" || $ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus" || $ultimoBoton === "conducto-rectangular-climaver-neto"){// si es uno u otro diametroEquivalente
          reynolds = $densidad*$velocidad*($diametroEquivalente)/$viscosidad;//dejo el diámetro en mts. para calcular reynolds como viene del DOM.
          
          if($ultimoBoton === "conducto-rectangular-galvanizado" || $ultimoBoton === "conducto-oval-galvanizado"){//si es galva 0.09
            reynolds = $densidad*$velocidad*($diametroEquivalente)/$viscosidad;//dejo el diámetro en mts., como viene del DOM.
            rugosidadRelativa = 0.09/($diametroEquivalente*1000);//paso el diámetro equivalente a mm, lo cojo del DOM en mts.
            console.log(`rugosidad relativa conducto galvanizado: ${rugosidadRelativa} diametro equivalente ${$diametroEquivalente}`);
          } else if($ultimoBoton === "conducto-rectangular-climaver"){
            rugosidadRelativa = 0.2/($diametroEquivalente*1000);//paso el diámetro equivalente a mm, lo cojo del DOM en mts.
            console.log(`rugosidad relativa conducto climaver: ${rugosidadRelativa} diametro equivalente ${$diametroEquivalente}`);
          } else if ($ultimoBoton === "conducto-rectangular-climaver-plus"){
            rugosidadRelativa = 0.09/($diametroEquivalente*1000);//paso el diámetro equivalente a mm, lo cojo del DOM en mts.
            console.log(`rugosidad relativa conducto climaver: ${rugosidadRelativa} diametro equivalente ${$diametroEquivalente}`);
          } else if ($ultimoBoton === "conducto-rectangular-climaver-neto"){
            rugosidadRelativa = 0.0845/($diametroEquivalente*1000);//paso el diámetro equivalente a mm, lo cojo del DOM en mts.
            console.log(`rugosidad relativa conducto climaver: ${rugosidadRelativa} diametro equivalente ${$diametroEquivalente}`);
          } else if($ultimoBoton === "conducto-rectangular-inoxidable"){
            rugosidadRelativa = 0.05/($diametroEquivalente*1000);//paso el diámetro equivalente a mm, lo cojo del DOM en mts.
          } else {
            rugosidadRelativa = 0.0015/($diametroEquivalente*1000); //rugosidadRelativa: rugosidadAbsoluta del elemento/diámetro interior en mm, lo cojo del DOM en mts.
            console.log(`rugosidad relativa conducto rectangular pvc: ${rugosidadRelativa} diametro equivalente ${$diametroEquivalente}`)
          };
          d.getElementById("rugosidad-relativa").value = rugosidadRelativa;

        } else {
          reynolds = $densidad*$velocidad*($diametroInterior/1000)/$viscosidad;//paso el diámetro a mts. en el conducto circular ya que lo puse en mm en el DOM
      };



      console.log(`reynolds: ${reynolds}`);
      
      d.getElementById("reynolds").value = reynolds;//pongo el número de reynolds en el DOM

      if ($ultimoBoton === "conducto-circular-pvc"){
        rugosidadRelativa = 0.0015/$diametroInterior; //rugosidadRelativa: rugosidadAbsoluta del elemento/diámetro interior en mm.
        // d.getElementById("rugosidad-relativa").value = rugosidadRelativa;
        
      } else if ($ultimoBoton === "conducto-circular-chapa"){
        rugosidadRelativa = 0.09/($diametroInterior); //rugosidadRelativa: rugosidadAbsoluta del elemento/diámetro interior en mm.
        // d.getElementById("rugosidad-relativa").value = rugosidadRelativa;
        console.log(`rugosidad relativa conducto circular de chapa ${rugosidadRelativa} diametro equivalente: ${$diametroInterior}`);

      } else if ($ultimoBoton === "conducto-circular-inox"){
        rugosidadRelativa = 0.05/$diametroInterior; //rugosidadRelativa: rugosidadAbsoluta del elemento/diámetro interior en mm.
        // d.getElementById("rugosidad-relativa").value = rugosidadRelativa;

      } else if ($ultimoBoton === "conducto-circular-flexible") {
        rugosidadRelativa = 0.3/$diametroInterior;
        // d.getElementById("rugosidad-relativa").value = rugosidadRelativa;
      };

      d.getElementById("rugosidad-relativa").value = rugosidadRelativa

        calculaCoeficienteDeFriccion();

        const $coeficienteDeFriccion = parseFloat(d.getElementById("coeficiente-de-friccion").value);
        console.log(`coeficiente de friccion: ${$coeficienteDeFriccion}`);

        let $longitud = parseFloat(d.getElementById("longitud").value),
         caidaDePresionLinealTotal = (($coeficienteDeFriccion*($densidad/($diametroInterior/1000))*(($velocidad**2)/2))*$longitud)/9.81;//paso los Pa a mm.c.a y el diámetro a mm.

      if ($ultimoBoton === "conducto-rectangular-pvc" || $ultimoBoton === "conducto-rectangular-galvanizado"  || $ultimoBoton === "conducto-rectangular-inoxidable" || $ultimoBoton === "conducto-oval-galvanizado" || $ultimoBoton === "conducto-rectangular-climaver" || $ultimoBoton === "conducto-rectangular-climaver-plus" || $ultimoBoton === "conducto-rectangular-climaver-neto"){
        caidaDePresionLinealTotal = (($coeficienteDeFriccion*($densidad/$diametroEquivalente)*(($velocidad**2)/
        2))*$longitud)/9.81;//paso los Pa a mm.c.a y el diámetro a mm.

        console.log(`caida de presion lineal total${caidaDePresionLinealTotal}, coeficiente de friccion ${$coeficienteDeFriccion}, densidad del aire${$densidad}, diametro equivalente ${$diametroEquivalente}, velocidad ${$velocidad}, longitud ${$longitud}`)
      };

        d.getElementById("caida-de-presion-lineal").value = caidaDePresionLinealTotal;
        console.log(`caida de presión lineal: ${caidaDePresionLinealTotal}`);
};