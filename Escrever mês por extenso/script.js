function getMes() {
    var m = document.getElementById('mês').value;
 
    switch (new Date(m).getMonth()) {
        case 0:
            month = 'Janeiro';
            break;
        case 1:
            month = 'Fevereiro';
            break;
        case 2:
            month = 'Março';
            break;
        case 3:
             month = 'Abril';
             break;
        case 4:
            month = 'Maio';
            break;
        case 5:
            month = 'Junho';
            break;
        case 6:
            month = 'Julho';
            break;
        case 7:
             month = 'Agosto';
             break; 
        case 8:
            month = 'Setembro';
            break;
        case 9:
            month = 'Outubro';
            break;
        case 10:
            month = 'Novembro';
            break;
        case 11:
             month = 'Dezembro';
             break;   
    
        default:
            break;
    
        alert ('corresponde ao mês' + moth)
    
    }

    document.getElementById('valor').innerHTML = 'O mês selecionado é ' + month;

}
