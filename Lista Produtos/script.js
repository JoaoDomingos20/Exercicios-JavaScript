const products = [
    {nome: 'Headphone', categoria: 'eletrónico', preço: 60},
    {nome: 'Teclado', categoria: 'eletrónico', preço: 120},
    {nome: 'Rato', categoria: 'eletrónico', preço: 80},
    {nome: 'Tapete Rato', categoria: 'eletrónico', preço: 30},
    {nome: 'Webcam', categoria: 'eletrónico', preço: 50},
];

const myList = document.getElementById('products');

for (let index = 0; index < products.length; index++) {
    
    let product = products[index];

    let itemList = document.createElement('li');

    itemList.textContent = product.nome + '(' + product.categoria + '):' + product.preço + '€';

    myList.appendChild(itemList);
    
}

//Tentativa, atraves do forEach
products.forEach(product => { 
    const itemList = document.createElement('li');
    itemList.innerHTML = `${product.nome} - ${product.categoria} - €$ ${product.preco.toFixed(2)}`;
    productList.appendChild (itemList);
});