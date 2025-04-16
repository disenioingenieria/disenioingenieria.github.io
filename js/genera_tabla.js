  
  const d = document,
    $btnagregar = d.querySelector("#agregar"),
    $bodyProductos = d.querySelector(".tbody-productos");//capturamos todo la tabla de salida para presentar los resultados

    let $nombre = d.querySelector("#nombre"),
      $precio = d.querySelector("#precio"),
      $cantidad = d.querySelector("#cantidad"),
      $sumaTotal = d.getElementById("suma-total"),
      contenidoTabla = "",//vaciamos el contenido de la tabla
      $sumar = d.querySelector(".btn-sumar"),
      // totalUd = (precio * cantidad).toFixed(2),
      total = 0;//inicializamos la variable total

$btnagregar.addEventListener("click", (e) => {

  let nombre = $nombre.value,//el alcance de estas variables es el de la función click (let)
    precio = $precio.value,
    cantidad = $cantidad.value,
    totalUd = (precio * cantidad);
    total += totalUd,//vamos sumando el total a cada subtotal a golpe de click
    $sumaTotal.innerHTML = `Total: ${total}`;//sacamos el total a pantalla

    let fila = "<tr><td>"+ nombre + //varible para ir creando dinámicamente la salida a pantalla
               "</td><td>"+ precio + 
               "</td><td>"+ cantidad + 
               "</td><td>"+ totalUd + 
              //  "</td><td><button class='btn-sumar'>✔️Sumar​</button></td><td><button class='btn-eliminar'>🗑️​Eliminar</button></td></tr>";
              "</td><td></td><td><button class='btn-eliminar'>🗑️</button></td></tr>";//creamos un boton eliminar con la etiqueta button y su clase y añadimos un emoji (tengo que probrar un svg)

    contenidoTabla += fila;//agregamos a contenidoTabla tolo lo que hay en fila a cada golpe de click
    // total += totalUd;
    // console.log(contenidoTabla);
    $bodyProductos.innerHTML = contenidoTabla;//sacamos a la tabla cada fila que hay en contenido tabla a golpe de click
    // $total.innerText = total;
    // console.log($nombre, $precio, $cantidad)
    let $eliminar = d.querySelectorAll(".tbody-productos .btn-eliminar");//seleccionamos todos los botones que estén dentro de tbody-productos y que tengan la clase btn-eliminar
    // console.log($eliminar);


   for(let i=0; i < $eliminar.length; i++) {//leemos todos los botones del querySelectorAll, habrá uno en cada fila
    $eliminar[i].addEventListener("click", (e) => {//creamos una función para cada uno de los botones y poder localizarla
      let posicionFila = (e.target.parentNode.parentNode.rowIndex);//identificamos y almacenamos en una variablela posición de cada fila que es la posición de cada arreglo del querySelectorAll con el elemento que ha originado el evento(ver que es parentNode y porque dos veces)
      let subtotalQuitar = $bodyProductos.getElementsByTagName("tr")[posicionFila-1].getElementsByTagName("td")[3].innerText;//capturamos el subtotal de la fila que estamos eliminando, que está en la celda 3, empezando en cero, ponemos inerText que nos da el valor del td correspondiente
      console.log(subtotalQuitar);
      total -= subtotalQuitar; 
      console.log(total);
      $sumaTotal.innerText = "Total: " + total;
      $bodyProductos.getElementsByTagName("tr")[posicionFila-1].remove();//identificamos el tr y cuadramos los elemento con las filas que empiezan en 0, por eso le quitamos 1, si anulamos esta línea dejamos la fila en pantalla pero anulamos su cantidad.
      contenidoTabla = $bodyProductos.innerHTML;//almacenamos los datos de contenido tabla, justo después de eliminar la fila
      

    });
  };
 
});

// https://www.youtube.com/watch?v=OLFWcG4Xn0w