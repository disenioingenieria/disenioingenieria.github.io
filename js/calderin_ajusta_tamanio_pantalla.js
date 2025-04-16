export default function calderinAjustaTamanioPantalla (aPantalla, cabeceraUnoFontaneria, cabeceraDosFontaneria){
    const d = document,
        w = window,
        $aPantalla = d.querySelector(aPantalla),
        $anchoCabeceraUno = d.querySelector(cabeceraUnoFontaneria),
        $anchoCabeceraDos = d.querySelector(cabeceraDosFontaneria);


      w.onresize = resize;
        console.log(aPantalla.offsetHeight);
        console.log($anchoCabeceraUno.offsetHeight + $anchoCabeceraDos.offsetHeight);
        // console.log(cabeceraDosFontaneria.offsetHeight);

            function resize(){
                // console.log(d.querySelector(".cabecera-uno-fontaneria").offsetHeight);
                // console.log(d.querySelector(".cabecera-dos-fontaneria").offsetHeight);
                console.log(aPantalla.offsetHeight);
                console.log($anchoCabeceraUno.offsetHeight + $anchoCabeceraDos.offsetHeight);
            };
};
  