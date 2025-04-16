export default function conductoSumaCaidaPresion(totalCaidaDePresion, botonesSumarRestar){

  const d = document,
    $botonesSumarRestar = d.querySelectorAll(botonesSumarRestar),
    $tbodyResultados = d.querySelector(".tbody-resultados"),
    // $caidaDePresion = d.querySelector(caidaDePresion),
    $totalCaidaDePresion = d.querySelector(totalCaidaDePresion);
    
    let caidaPresion = 0,//creo estas dos variables para sumar la caida a cada golpe de clicK y asignarla a totalCaida
      totalCaidaPresion = 0,
      fila = [];//creo array fila para almacenar su caida
      $totalCaidaDePresion.innerHTML = `Total caida de presion de los tramos seleccionados: ${caidaPresion} mm.c.a`;//Pongo a cero el totalCaidaDePresion del DOM al pasar por aquí por primera vez Esto es igual que el d.querySelector, cebollón

  for(let i=0; i<$botonesSumarRestar.length; i++){
    $botonesSumarRestar[i].addEventListener("click", (e) => {

      if(e.target.matches(".btn-sumar")){

        d.getElementById("nuevo-tramo").disabled = true;

      let posicionFila = (e.target.parentNode.parentNode.rowIndex)-2,//identifica la fila
        caidaPresion = parseFloat(e.target.parentNode.parentNode.children[9].textContent),//identifica la celda caida de presión y la pasa a número
        botonSumar = e.target.parentNode.parentNode.children[10],//identifica el botón sumar
        botonRestar = e.target.parentNode.parentNode.children[11];//identifica el botón sumar

        botonSumar.classList.add("none");//lo saca de la pantalla
        botonRestar.classList.remove("none");

        // console.log(`posicion fila ${posicionFila}`)
        fila.splice(posicionFila,1,caidaPresion);//insertamos la caida de presión en el índice posición fila cada vez que pulsamos sumar

        for (let i = 0; i < fila.length; i++){
          console.log(`indice ${i}, valor ${fila[i]}`);
        };

          totalCaidaPresion += caidaPresion;//Va sumando y almacenando las caidas seleccionadas en totalCaidaPresion
        
        d.querySelector("#total-caida-de-presion").textContent = `Total caida de presion de los tramos seleccionados: ${totalCaidaPresion.toFixed(3)} mm.c.a.`;//coloca en el DOM el valor de la suma de caidas

      };
          if(e.target.matches(".btn-restar")){
            let posicionFila = (e.target.parentNode.parentNode.rowIndex)-2,//identifica la fila
              
            caidaPresion = parseFloat(e.target.parentNode.parentNode.children[9].textContent),//identifica la celda caida de presión y la pasa a número
            
              botonSumar = e.target.parentNode.parentNode.children[10],//identifica el botón sumar
              botonRestar = e.target.parentNode.parentNode.children[11];//identifica el botón sumar
              
              botonRestar.classList.add("none");//lo saca de la pantalla
              botonSumar.classList.remove("none");

              if(totalCaidaPresion <= 0 ){//si el total es cero o menosno se ha pulsado sumar por lo tanto igualamos totalCaida a cero
                  alert("No puedes anular la pérdida de carga de un tramo si antes no la has seleccionado");
                  botonRestar.classList.remove("none");
                  totalCaidaPresion = 0;
              } else {
                  // console.log(`posicionFila ${posicionFila}`)
                  fila.splice(posicionFila,1,"e");//colocamos "e" en cada posición de posición Fila sustituyendo a la caida de presion
                  totalCaidaPresion -= caidaPresion;//restamos la caida de presión del total
              };

              for (let i = 0; i < fila.length; i++){
                console.log(`indice ${i}, valor ${fila[i]}`);
              };

                d.querySelector("#total-caida-de-presion").textContent = `Total caida de presion de los tramos seleccionados: ${totalCaidaPresion.toFixed(3)} mm.c.a.`;//coloca en el DOM el valor de la suma de caidas
          };

          if(e.target.matches(".btn-eliminar")){
              let posicionFila = (e.target.parentNode.parentNode.rowIndex)-3,//identifica la fila
                caidaPresion = parseFloat(e.target.parentNode.parentNode.children[9].textContent);//identifica la celda caida de presión y la pasa a número
              // posicionFila.classList.add("none");
                // console.log(`Elemento de la posición a eliminar ${fila[posicionFila]}, ${caida[posicionFila]}`);

                console.log(`posicionFila: ${posicionFila}`);
                console.log(`posicion array ${posicionFila} valor: ${fila[posicionFila]}`)
                if(!fila.length){//si no he pulsado sumar, esta vacio, quito la fila sin más
                  // console.log(fila.length);
                  // console.log($tbodyResultados.getElementsByTagName("tr")[posicionFila]);
                  $tbodyResultados.getElementsByTagName("tr")[posicionFila].remove();
                };

                if(fila.length && fila[posicionFila+1] === "e"){//si hemos pulsado sumar y despues restar
                    $tbodyResultados.getElementsByTagName("tr")[posicionFila].remove();
                };
                if(fila.length && fila[posicionFila+1] !== "e"){//si hemos pulsado sumar y despues restar
                  $tbodyResultados.getElementsByTagName("tr")[posicionFila].remove();
                  totalCaidaPresion -= caidaPresion;
                };

                for (let i = 0; i < fila.length; i++){
                  console.log(`indice ${i}, valor ${fila[i]}`);
                };

              d.querySelector("#total-caida-de-presion").textContent = `Total caida de presion de los tramos seleccionados: ${totalCaidaPresion.toFixed(3)} mm.c.a.`;//coloca en el DOM el valor de la suma de caidas
          };
    });
  };
};

