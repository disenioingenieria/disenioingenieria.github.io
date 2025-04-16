import conductoCalculaCircular from "./conducto_calcula_circular.js";
import conductoEntraDatos from "./conducto_entra_datos.js";
import conductoTabla from "./conducto_tabla.js";
import tipoConducto from "./conducto_tipo_conducto.js";
import conductoCircularDiametrosPvc from "./conducto_circular_diametros_pvc.js";
import conductoSumaCaidaPresion from "./conducto_suma_caida_presion.js";
import poneInputsACero from "./conducto_pone_inputs_a_cero.js";
import conductoCircularRecalculaDiametrosPvc from "./conducto_circular_recalcula_diametros_pvc.js";
import caidaDePresionAccesoriosPvc from "./conducto_caida_presion_accesorios_pvc.js";
import caidaDePresionLineal from "./conducto_caida_presion_lineal.js";
import calculaCoeficienteDeFriccion from "./conducto_calcula_coef_friccion.js";
import conductoCircularDiametrosChapa from "./conducto_circular_diametros_chapa.js";
import conductoCircularRecalculaDiametrosChapa from "./conducto_circular_recalcula_diametros_chapa.js";
import caidaDePresionAccesoriosChapa from "./conducto_caida_presion_accesorios_chapa.js";
import conductoCircularDiametrosInox from "./conducto_circular_diametros_inox.js";
import conductoCircularRecalculaDiametrosInox from "./conducto_circular_recalcula_diametros_inox.js"
import caidaDePresionAccesoriosInox from "./conducto_caida_presion_accesorios_inox.js";
import conductoCircularDiametrosFlexible from "./conducto_circular_diametros_flexible.js";
import conductoCircularRecalculaDiametrosFlexible from "./conducto_circular_recalcula_diametros_flexible.js";
import caidaDePresionAccesoriosFlexible from "./conducto_caida_presion_accesorios_flexible.js";
import conductoRectangularSeccionesPvc from "./conducto_rectangular_secciones_pvc.js";
import conductoCalculaRectangular from "./conducto_calcula_rectangular.js";
import conductoRectangularCaidaDePresionAccesoriosPvc from "./conducto_rectangular_caida_presion_accesorios_pvc.js";
import calculaSeccionesConductoRectangular from "./conducto_rectangular_calcula_secciones.js";
import conductoRectangularRecalculaSecciones from "./conducto_rectangular_recalcula_secciones.js";
import conductoRectangularCalculaLados from "./conducto_rectangular_calcula_lados.js";
import conductoImprimir from "./conducto_imprimir.js";

const d = document,
  w = window;
  d.addEventListener("DOMContentLoaded", (e) => {
  conductoEntraDatos(".tipo-conducto-circular", "#selecciona-tipo-conducto", ".tipo-conducto-rectangular", ".texto-conducto-rectangular-inoxidable", "#texto-tipo-conducto-circular", ".tipo-conducto-oval", "#texto-tipo-conducto-oval", ".form-conducto", ".texto-conducto-chapa",".texto-diametros-conducto-chapa", ".texto-conducto-pvc", ".texto-diametros-conducto-pvc", "#diametro-pvc", "#diametro-chapa", "#diametro-inox", ".texto-conducto-inox", ".texto-diametros-conducto-inox",  ".texto-conducto-flexible", ".texto-diametros-conducto-flexible", ".diametro-flexible", ".tipo-conducto-rectangular-pvc", "#seccion-conducto-pvc", ".texto-conducto-rectangular-pvc", ".texto-conducto-rectangular-galvanizado", "#lado-menor", "#lado-mayor", ".texto-conducto-oval", ".texto-conducto-rectangular-climaver", ".texto-conducto-rectangular-climaver-plus", ".texto-conducto-rectangular-climaver-neto")  ;//Inicialmente entramos los datos
  tipoConducto();//selecciona el tipo de conducto, último botón, circular/rectangular y el material de ese conducto
});
  
    conductoCircularRecalculaDiametrosPvc;//sin paréntesis para que no se inicialice a la lectura del fichero, recalculo los diámetros de PVC si no se entra diámetro en la entrada de datos
    poneInputsACero;
    caidaDePresionAccesoriosPvc;
    caidaDePresionLineal;
    calculaCoeficienteDeFriccion;
    conductoCircularRecalculaDiametrosChapa;
    conductoCircularRecalculaDiametrosInox;
    caidaDePresionAccesoriosChapa;
    caidaDePresionAccesoriosInox;
    conductoCircularRecalculaDiametrosFlexible;
    caidaDePresionAccesoriosFlexible;
    conductoRectangularCaidaDePresionAccesoriosPvc;
    calculaSeccionesConductoRectangular;
    conductoRectangularRecalculaSecciones;
    conductoRectangularCalculaLados;
  d.addEventListener("click", (e) => {
    if(e.target.matches("#reiniciar")){
      location.reload();//refresco la página
    };

    if(e.target.matches(".imprimir")){
      // calderinImprimir(".container-calcular-de-nuevo");
      conductoImprimir(".form-conducto", ".container-valida-datos-conducto", ".footer", ".menu", ".texto-suma-resta-caidas", ".nombre-de-la-obra", ".obra");
    }
  });

d.getElementById("seccion-conducto-pvc").addEventListener("input", function() {//validamos secciones de conducto pvc
  const valoresPermitidos = ["40x100", "55x110", "55x220", "60x200", "90x170", "90x180"],
    input = this.value,
    mensaje = d.getElementById("mensaje");

  if (valoresPermitidos.includes(input) && !valoresPermitidos.includes("")) {//Si incluye valorespermitidos y no incluye espacio en blanco, niego el array y actua como el contrario de includesw
      mensaje.textContent = ""; // Borra el mensaje de error si es válido
      this.style.borderColor = "green"; // Resalta en verde si es válido
  } else {
      mensaje.textContent = "Entrada no válida";
      this.style.borderColor = "red"; // Resalta en rojo si es inválido
  };

});

d.getElementById("temperatura-del-aire").addEventListener("input", function() {//validamos la temperatura 
  let input = this.value;
  let errorMsg = d.getElementById("errorMsg");

  // Permitir vacío o un número entero
  if (input === "" || (/^-?\d+$/.test(input))) {
      errorMsg.textContent = "✅ Válido";
      errorMsg.style.color = "green";
  } else {
      errorMsg.textContent = "❌ Ingresa un número entero o deja el campo vacío.";
      errorMsg.style.color = "red";
  };
});

d.getElementById("lado-menor").addEventListener("input", function() { 
  let input = this.value;
  let mensaje = d.getElementById("mensaje-menor");

  // Permitir vacío o un número entero
  if (input === "" || (/^(50|[1-9][0-9]0|[1-9][0-9]00)$/.test(input))) {
      mensaje.textContent = "✅ Válido";
      mensaje.style.color = "green";
  } else {
      mensaje.textContent = "❌ Ingresa un múltiplo de 50 o deja el campo vacío.";
      mensaje.style.color = "red";
  };
});

d.getElementById("lado-mayor").addEventListener("input", function() {//validamos la temperatura 
  let input = this.value;
  let mensaje = d.getElementById("mensaje-mayor");

  // Permitir vacío o un número entero
  if (input === "" || (/^(50|[1-9][0-9]0|[1-9][0-9]00)$/.test(input))) {
      mensaje.textContent = "✅ Válido";
      mensaje.style.color = "green";
  } else {
      mensaje.textContent = "❌ Ingresa un múltiplo de 50 o deja el campo vacío.";
      mensaje.style.color = "red";
  };
});

  d.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue
          const $ultimoBoton = d.getElementById("ultimo-boton"),//obtemenos el valor del último botón pulsado
            $nombreDeLaObra = d.querySelector(".nombre-de-la-obra");
            
            if($nombreDeLaObra.value !== ""){
              $nombreDeLaObra.classList.add("none");//si hay nombre de la obra quito el input
            };

    const form = e.target.closest(".valida-conducto"); // Busca el formulario más cercano con la clase del boton para que lo tenga en cuenta
    
    if (form) {//si existe entramos en el if
      console.log(`Este es el último boton: ${$ultimoBoton.textContent}`);

      if ($ultimoBoton.textContent === "conducto-circular-pvc"){//si es circular de pvc entramos
          conductoCircularDiametrosPvc("#diametro-pvc", "#diametro-nominal");//seleccionamos el diámetro interior real del conducto
          conductoCalculaCircular("#temperatura-del-aire", "#caudal", "#velocidad", "#diametro-pvc");//empezamos los cálculos 

      } else if ($ultimoBoton.textContent === "conducto-circular-chapa") {
          conductoCircularDiametrosChapa("#diametro-chapa", "#diametro-nominal");
          conductoCalculaCircular("#temperatura-del-aire", "#caudal", "#velocidad", "#diametro-chapa");//empezamos los cálculos 

      } else if ($ultimoBoton.textContent === "conducto-circular-inox") {
          conductoCircularDiametrosInox("#diametro-inox", "#diametro-nominal");
          conductoCalculaCircular("#temperatura-del-aire", "#caudal", "#velocidad", "#diametro-inox");//empezamos los cálculos 

      } else if ($ultimoBoton.textContent === "conducto-circular-flexible") {
          conductoCircularDiametrosFlexible("#diametro-flexible", "#diametro-nominal");
          conductoCalculaCircular("#temperatura-del-aire", "#caudal", "#velocidad", "#diametro-flexible");//empezamos los cálculos 

      } else if ($ultimoBoton.textContent === "conducto-rectangular-pvc"){  
        // console.log("toy tontico")
        conductoRectangularSeccionesPvc("#ultimo-boton", ".seccion-conducto-pvc", "#velocidad", "#caudal");
        conductoCalculaRectangular("#temperatura-del-aire", "#caudal", "#velocidad-calculada", "#ultimo-boton", ".seccion-conducto-pvc", "#superficie-calculada");

      } else if ($ultimoBoton.textContent === "conducto-rectangular-galvanizado" || $ultimoBoton.textContent === "conducto-rectangular-inoxidable" || $ultimoBoton.textContent === "conducto-rectangular-climaver" || $ultimoBoton.textContent === "conducto-rectangular-climaver-plus" || $ultimoBoton.textContent === "conducto-rectangular-climaver-neto" || $ultimoBoton.textContent === "conducto-oval-galvanizado" ){  
      // console.log("toy tontico")
      conductoCalculaRectangular("#temperatura-del-aire", "#caudal", "#velocidad-calculada", "#ultimo-boton", ".seccion-conducto-pvc", "#superficie-calculada");

      
      // } else if ($ultimoBoton.textContent === "conducto-oval-galvanizado"){  
      //   conductoCalculaRectangular("#temperatura-del-aire", "#caudal", "#velocidad-calculada", "#ultimo-boton", ".seccion-conducto-pvc", "#superficie-calculada");

      };
        conductoTabla(".tabla", ".nuevo-tramo-conducto", ".valida-datos-conducto", "#lado-menor", "#lado-mayor", ".texto-suma-resta-caidas", ".numero-de-tramo", "#velocidad-calculada", "#caudal", "#longitud", "#velocidad", "#diametro-interior");
        conductoSumaCaidaPresion("#total-caida-de-presion", ".tbody-resultados button", "#caida-de-presion", "#reducciones", "#derivaciones", ".tbody-resultados");
    };
  });
  