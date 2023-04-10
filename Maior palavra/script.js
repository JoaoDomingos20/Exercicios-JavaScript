function bigWord() {

    const frase = document.getElementById('frase').value;
    const words = frase.split(' ');

    var longWord = words [0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longWord.length) {

            longWord = words[i];
            
        }
        
    }
    document.getElementById('maior').innerHTML = "A maior palvavra é: " + longWord;
}