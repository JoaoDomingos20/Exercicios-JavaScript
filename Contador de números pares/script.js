function gerarPar() {

    var numero = 0
    for (var i = 0; i < 100; i++) {
        numero = Math.floor(Math.random()*51)*2;

        if (numero >= 0 && numero <= 100){
            break;
        }
        
    }
    document.getElementById('numeroPar').innerHTML = 'o próximo número par é... ' + numero; 
}