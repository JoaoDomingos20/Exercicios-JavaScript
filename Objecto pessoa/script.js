function getFormData() {
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault()  
})

var name = document.getElementById("Nome").value; 
var age = document.getElementById("Idade").value;
var birthday = document.getElementById("Birthdate").value;

var pessoa = {nome: name, idade: age, Birthdate: birthday};

console.log(pessoa)

} 