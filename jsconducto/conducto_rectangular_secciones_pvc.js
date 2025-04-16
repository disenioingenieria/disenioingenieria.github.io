export default function conductoRectangularSeccionesPvc(ultimoBoton, seccionConductoPvc, velocidad, caudal){
    console.log("conducto rectangular pvc");
    const d = document,
        $ultimoBoton = d.querySelector(ultimoBoton).textContent,
        $seccionConductoPvc = d.querySelector(seccionConductoPvc);
        // console.log($seccionConductoPvc.textContent);
        // console.log($seccionConductoPvc.value);// los inputs tiene value, no textContent

        if(!$seccionConductoPvc.value){
            alert("introduce una sección normalizada para obtener un resultado correo, borra la linea si es necesario");
          };

        let $velocidad = parseFloat(d.querySelector(velocidad).value),
            $caudal = parseFloat((d.querySelector(caudal).value)/3600),
            $diametroEquivalente = d.getElementById("diametro-equivalente"),
        // console.log($seccionConductoPvc.value);
            diametroEquivalente40100 = (1.3 * ((40*100)**0.625)/((40+100)**0.250))/1000,
            superficie40100 = (3.1416*(diametroEquivalente40100**2))/4,
            diametroEquivalente55110 = (1.3 * ((55*110)**0.625)/((55+110)**0.250))/1000,
            superficie55110 = (3.1416*(diametroEquivalente55110**2))/4,
            diametroEquivalente55220 = (1.3 * ((55*220)**0.625)/((55+220)**0.250))/1000,
            superficie55220 = (3.1416*(diametroEquivalente55220**2))/4,
            diametroEquivalente60200 = (1.3 * ((60*200)**0.625)/((60+200)**0.250))/1000,
            superficie60200 = (3.1416*(diametroEquivalente60200**2))/4,
            diametroEquivalente90170 = (1.3 * ((90*170)**0.625)/((90+170)**0.250))/1000,
            superficie90170 = (3.1416*(diametroEquivalente90170**2))/4,
            diametroEquivalente90180 = (1.3 * ((90*180)**0.625)/((900+180)**0.250))/1000,
            superficie90180 = (3.1416*(diametroEquivalente90180**2))/4,
            superficie = 0;

            console.log($ultimoBoton);
            console.log(diametroEquivalente40100, diametroEquivalente55110,diametroEquivalente55220,diametroEquivalente60200,diametroEquivalente90170,diametroEquivalente90180)

if(!$seccionConductoPvc){
    console.log("no hay superficie");
    superficie = ($caudal)/$velocidad;
    console.log(`superficie: ${superficie}`)
} else {

    switch ($seccionConductoPvc.value) {
      case "40x100":
        $velocidad = ($caudal)/superficie40100;
        superficie = superficie40100;
        $diametroEquivalente = diametroEquivalente40100;
        console.log(`seccion conducto: ${superficie40100} m2, velocidad: ${$velocidad} m/sg diametro equivalente: ${$diametroEquivalente}`);
    break;
      case "55x110":
        $velocidad = ($caudal)/superficie55110;
        superficie = superficie55110;
        $diametroEquivalente = diametroEquivalente55110;
        console.log(`seccion conducto: ${superficie55110} m2, velocidad: ${$velocidad} m/sg diametro equivalente: ${$diametroEquivalente}`);
    break; 
    case "55x220":
        $velocidad = ($caudal)/superficie55220;
        superficie = superficie55220;
        $diametroEquivalente = diametroEquivalente55220;
        console.log(`seccion conducto: ${superficie55220} m2, velocidad: ${$velocidad} m/sg diametro equivalente: ${$diametroEquivalente}`);
    break; 
    case "60x200":
        $velocidad = ($caudal)/superficie60200;
        superficie = superficie60200;
        $diametroEquivalente = diametroEquivalente60200;
        console.log(`seccion conducto: ${superficie60200} m2, velocidad: ${$velocidad} m/sg diametro equivalente: ${$diametroEquivalente}`);
    break; 
    case "90x170":
        $velocidad = ($caudal)/superficie90170;
        superficie = superficie90170;
        $diametroEquivalente = diametroEquivalente90170;
        console.log(`seccion conducto: ${superficie90170} m2, velocidad: ${$velocidad} m/sg diametro equivalente: ${$diametroEquivalente}`);
    break; 
    case "90x180":
        $velocidad = ($caudal)/superficie90180;
        superficie = superficie90180;
        $diametroEquivalente = diametroEquivalente90180;
        console.log(`seccion conducto: ${superficie90180} m2, velocidad: ${$velocidad} m/sg diametro equivalente: ${$diametroEquivalente}`);
    break; 
    };        
          
    d.getElementById("velocidad-calculada").value = $velocidad;
    d.getElementById("superficie-calculada").value = superficie;
    d.getElementById("diametro-equivalente").value = $diametroEquivalente; 

    };
};

