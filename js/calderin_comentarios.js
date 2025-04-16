export default function comentariosCalderin(caudalArranqueAPantalla, presionDiferencial){
    const d = document,
        $caudalArranqueAPantalla = parseFloat(d.querySelector(caudalArranqueAPantalla).value),
        $presionDiferencial = parseFloat(d.querySelector(presionDiferencial).value);
        console.log($caudalArranqueAPantalla);

    if($caudalArranqueAPantalla < 200){
        alert(`El caudal entrado ${$caudalArranqueAPantalla} lts./h es menor que 200 lts./h comprueba que es correcto`);
    }
};