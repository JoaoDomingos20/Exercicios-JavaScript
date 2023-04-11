function Interruptor() {

    var Lampada = document.getElementById("lampada")

    if (Lampada.src.match("OFFLampada")) {

        Lampada.src = "img/ONLampada.jpg";
        
    } else {

        Lampada.src = "img/OFFLampada.jpg";
    }
    
}