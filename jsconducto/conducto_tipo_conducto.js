export default function tipoConducto(){

    const d = document,
        buttonsCircular = d.querySelectorAll('.tipo-conducto-circular button'),//seleccionamos todos los botones
        $ultimoBotonCircular = d.getElementById("ultimo-boton"),//llamamos al span ultimo-boton para colocar el tipo de conducto seleccionado.
        buttonsRectangular = d.querySelectorAll(".tipo-conducto-rectangular button"),//seleccionamos todos los botones
        $ultimoBotonRectangular = d.getElementById("ultimo-boton"),//llamamos al span ultimo-boton para colocar el tipo de conducto seleccionado.
        buttonsRectangularTipo = d.querySelectorAll(".tipo-conducto-rectangular-pvc button"),  
        $ultimoBotonTipoRectangular = d.getElementById("boton-rectangular"),
        buttonsOval = d.querySelectorAll(".tipo-conducto-oval button"),
        $ultimoBotonOval = d.getElementById("ultimo-boton");

        
    // Recorre cada botón y agrega un evento 'click' para ver que tipo de conducto ha sido seleccionado.
    buttonsCircular.forEach(button => {
        button.addEventListener('click', () => {//con el evento click vamos leyendo todos y cada uno de los botones seleccionados.
            console.log(`Botón activado: ${button.textContent}, ${button.id}`);
            $ultimoBotonCircular.textContent = button.id;//colocamos en ultimo-boton el valor del id del último boton pulsado
            console.log($ultimoBotonCircular.textContent);
        });
    });

    buttonsRectangular.forEach(button => {
        button.addEventListener('click', () => {//con el evento click vamos leyendo todos y cada uno de los botones seleccionados.
            console.log(`Botón activado: ${button.textContent}, ${button.id}`);
            $ultimoBotonRectangular.textContent = button.id;//colocamos en ultimo-boton el valor del id del último boton pulsado
            console.log($ultimoBotonRectangular.textContent);
        });
    });

    buttonsRectangularTipo.forEach(button => {
        button.addEventListener('click', () => {//con el evento click vamos leyendo todos y cada uno de los botones seleccionados.
            console.log(`Botón activado: ${button.textContent}, ${button.id}`);
            $ultimoBotonTipoRectangular.textContent = button.id;//colocamos en ultimo-boton el valor del id del último boton pulsado
            // console.log($ultimoBotonTipoRectangular.textContent);
        });
    });

    buttonsOval.forEach(button =>{
        button.addEventListener("click", () => {
            console.log(`Botón activado: ${button.textContent}, ${button.id})`);
            $ultimoBotonOval.textContent = button.id;
            console.log($ultimoBotonOval.textContent)
        });
    });
};