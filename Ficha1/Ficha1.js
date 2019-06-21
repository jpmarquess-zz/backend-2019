
// Exercício 5 
function media(a, b) {   
    var result = (a + b)/2;

    console.log(result);
    if (result > 9) {
        console.log('aluno aprovado');
    } else {
        console.log('aluno reprovado');
    }
}
media(10,12);

// Exercício 6
function mes(m) {
    
    //var meses = ['Janeiro', 'Fevereiro'];

    //return meses[m -1];

    switch (m) {
        case 1:
            console.log('Janeiro')
            break;
        case 2:
            console.log('Fevereiro')
            break;
        case 3:
            console.log('Março')
            break;
        case 4:
            console.log('Abril')
            break;
        case 5:
            console.log('Maio')
            break;
        case 6:
            console.log('Junho')
            break;
        case 7:
            console.log('Julho')
            break;
        case 8:
            console.log('Agosto')
            break;
        case 9:
            console.log('Setembro')
            break;
        case 10:
            console.log('Outubro')
            break;
        case 11:
            console.log('Novembro')
            break;
        case 12:
            console.log('Dezembro')
            break;
        default:
            console.log('Mês Inválido!!! ( ͡° ͜ʖ ͡°)')
    }
}
mes(13);

// Exercício 7
function numeros (a, b, operador) {
    if(operador == '+'){
        return a + b;
    } else if(operador == '-'){
        return a - b;
    } else if(operador == 'x'){
        return a * b;
    } else if(operador == '/'){
        return a / b;
    }
}
console.log(numeros(14, 2, '-'));

// Exercício 8
function multiplos(n) {
    var mult = [];
    for(i = 1; i<n; i++) {
        if (i % 5 == 0) {
           mult.push(i);
        }
    }
    return mult;
}
console.log(multiplos(25));

// Exercício 9

function soma_num(num){
    var t = 0;
    for (i = 0; i <= num; i++) {
        t = t + 1;
    }
    return t;
}
console.log(soma_num(100));

// Exercício 10
function factorial(x) {
    for (let i = x - 1; i >= 1; i--) {
      x= x * i; 
    }
  
    return x;
}
console.log(factorial(5));

//Exercício 11 Máximo
function max() {
    var m = array[0];

    for (i = 1; i < array.length; i++) {
        if (array[i] > m) {
            m = array[i];
        }
    }
}
