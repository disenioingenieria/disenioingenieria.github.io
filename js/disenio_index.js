import entradaDatosCalderin from "./calderin_entrada_datos.js";
import calderinCalcula from "./calderin_calcula.js";
import seleccionaPotenciaComercialMotor from "./calderin_potencia_comercial_motor.js";
import seleccionaVolumenComercialCalderin from "./calderin_volumen_comercial.js";
import calderinDatosAPantalla from "./calderin_datos_a_pantalla.js";
import validaDatosCalderin from "./calderin_valida_datos.js";
import calderinPresionTrabajo from "./calderin_presion_trabajo.js";
import comentariosCalderin from "./calderin_comentarios.js";
import calderinImprimir from "./calderin_imprimir.js";
import conductoEntraDatos from "./conducto_entra_datos.js";
// import generaTabla from "./genera_tabla.js";

const d = document,
  w = window;

  d.addEventListener("DOMContentLoaded", (e) => {
  entradaDatosCalderin("#opciones", ".container-entra-un-dato", ".container-valida-datos", "#presion-diferencial-a-pantalla", "#presion-diferencial", ".presion-diferencial");
  conductoEntraDatos(".tipo-conducto-circular", "#selecciona-tipo-conducto", ".tipo-conducto-rectangular", "#texto-tipo-conducto-rectangular", "#texto-tipo-conducto-circular", ".tipo-conducto-oval", "#texto-tipo-conducto-oval", ".form-conducto");
});
  
  d.addEventListener("click", (e) => {
    if(e.target.matches("#calcular-de-nuevo")){
      location.reload();//refresco la página
    };

    if(e.target.matches("#volver-a-fontaneria")){
      w.open("fontaneria.html","_self");//se abre fontaneria en la misma pestaña
    };

    if(e.target.matches(".imprimir")){
      calderinImprimir(".container-calcular-de-nuevo");
    }

    // if(e.target.matches("#agregar"))
    //   generaTabla("#nombre", "#precio", "#cantidad", "#genera-tabla", ".tbody-productos");

    if(e.target.matches("#reset")){
      location.reload();
    }

  });

  d.addEventListener("submit", (e) => {//el submit es importante para las validaciones si no, problemas...
    // validaDatosCalderin("#opciones", "#presion-diferencial", ".form-calderin");
    calderinPresionTrabajo("#presion-arranque", "#presion-diferencial");
    calderinCalcula("#caudal", "#presion-arranque", "#presion-diferencial", "#opciones", "#potencia-motor", "#volumen-calderin", "#numero-bombas", ".form-calderin");
    seleccionaPotenciaComercialMotor("#potencia-motor", "potencia-comercial-motor");
    seleccionaVolumenComercialCalderin("#volumen-calderin", "#volumen-comercial-calderin");
    calderinDatosAPantalla(".a-pantalla","#caudal", "#caudal-arranque-a-pantalla", "#presion-arranque", "#presion-arranque-a-pantalla", "#caudal-paro-a-pantalla", "#presion-diferencial", "#presion-diferencial-a-pantalla", "#volumen-calderin", "#volumen-calderin-a-pantalla", "#volumen-comercial-calderin", "#volumen-comercial-calderin-a-pantalla","#presion-trabajo-calderin","#presion-trabajo-calderin-a-pantalla","#potencia-motor","#potencia-comercial-motor-a-pantalla","#numero-bombas", "#numero-bombas-a-pantalla","#numero-arranques", "#numero-arranques-a-pantalla", "#opciones", ".descripcion-seleccion",".nombre-de-la-obra", ".nombre-de-la-obra-a-pantalla", ".footer");
    // comentariosCalderin("#caudal-arranque-a-pantalla", "#presion-diferencial");
    e.preventDefault();

  });

