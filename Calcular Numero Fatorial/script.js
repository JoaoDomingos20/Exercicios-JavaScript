function calculate() {

    var fatorialNumber = document.getElementById('numero').value;
    var result = document.getElementById('result');

    return result.innerHTML = "o resultado é: " + fatorial(fatorialNumber);
    
}

function fatorial(number) {

    if (number <= 1 ) {
        return 1;
    } else {
        return number * fatorial(number-1);
    }
    
}