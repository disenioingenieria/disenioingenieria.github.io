
export default function entradaDatosCalderin(opciones, containerEntraUnDato, containerValidaDatos, presionDiferencialAPantalla, presionDiferencial, presionDiferencialOpacity){
  const d = document,
    $select = d.querySelector(opciones),
    $containerEntraUnDato = d.querySelector(containerEntraUnDato),
    $containerValidaDatos = d.querySelector(containerValidaDatos),
    $presionDiferencialAPantalla = d.querySelector(presionDiferencialAPantalla),
    $presionDiferencial = d.querySelector(presionDiferencial),
    $presionDiferencialOpacity = d.querySelector(presionDiferencialOpacity);
    // $confirmaDatosCalderin = d.querySelector(confirmaDatosCalderin);

  d.addEventListener("change", (e) => {
    // console.log("ha cambiado", e);
    if($select.value === "2"){
        $containerValidaDatos.classList.add("opacity-uno");//pongo el button opacidad en uno con transición
        $containerEntraUnDato.classList.add("opacity-uno");//pongo todos los datos en opacidad uno con transición
        $presionDiferencialAPantalla.classList.remove("none");
        $select.disabled = true; 
        // d.querySelectorAll(".presion-diferencial").forEach((el) => {//quito todos los none de los inputs y labels presion diferencial
        //   el.classList.remove("none");
        // });

    } else if($select.value === "0" || $select.value === "1"){
        $containerEntraUnDato.classList.add("opacity-uno");
        $containerValidaDatos.classList.add("opacity-uno") ;
        $presionDiferencial.disabled = true;//desabilitando el input parece que evitamos el problema del non focusable con el required
        $presionDiferencialOpacity.style.opacity = "0.2";
        $select.disabled = true; 
        // d.querySelectorAll(".presion-diferencial").forEach((el) => {//quito todos los none de los inputs y labels presion diferencial
        //   el.classList.add("none");
        // });
    };
  });
};

