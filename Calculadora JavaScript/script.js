
function soma(params) {
    var PNumber = parseInt(document.getElementById("PNumber").value);
    var SNumber = parseInt(document.getElementById("SNumber").value);
    var result = PNumber + SNumber;

    alert ("O resultado da adição é " + result);
}

function sub(params) {
    var PNumber = parseInt(document.getElementById("PNumber").value);
    var SNumber = parseInt(document.getElementById("SNumber").value);
    var result = PNumber - SNumber;

    alert ("O resultado da subtração é " + result);
}

function div(params) {
    var PNumber = parseInt(document.getElementById("PNumber").value);
    var SNumber = parseInt(document.getElementById("SNumber").value);
    var result = PNumber / SNumber;

    alert ("O resultado da divisão é " + result);
}

function mult(params) {
    var PNumber = parseInt(document.getElementById("PNumber").value);
    var SNumber = parseInt(document.getElementById("SNumber").value);
    var result = PNumber * SNumber;

    alert ("O resultado da multiplicação é " + result);
}