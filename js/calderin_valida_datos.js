export default function validaDatosCalderin(opciones, presionDiferencial, formCalderin){
  // console.log("estoy en valida datos");
  const d = document,
    w = window,
    $select = d.querySelector(opciones),
    // $formCalderin = d.querySelector(formCalderin),
    $presionDiferencial = parseFloat(d.querySelector(presionDiferencial).value);

//https://www.youtube.com/watch?v=fs7ZsQkf1uo
    //Asigno nombres de las claves
    // w.localStorage.setItem("opciones", 5);
    
    if($select.value === "2" && isNaN($presionDiferencial)){
      console.log("estoy en valida")
        alert("Estas calculando un grupo convencional y no has introducido la presión diferencial, introduce de nuevo los datos con la presión diferencial adecuada para obtener unos datos razonables");
        location.reload();
        console.log("sigo en valida")
    }; 
};

