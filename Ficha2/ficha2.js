
// Ex.1
function imc(peso, altura) {
    var imc = peso / Math.pow(altura, 2);
    if (imc < 18.5) {
        return Math.round(imc) + ": Abaixo do Peso";
    } else if (imc >= 18.6 && imc <= 24.9) {
        return ("Peso Normal");
    } else if (imc >= 25 && imc <= 29.9) {
        return ("Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        return ("Obseidade");
    } else if (imc >= 35 && imc <= 39.9) {
        return ("Obesidade Moderada");
    } else if (imc >= 40 && imc <= 49.9) {
        return ("Obesidade Severa")
    } else {
        return ("Obsesidade Morbida")
    }
}
console.log(imc(50, 1.75));

//Ex.2
function inversa(a2) {
    var array = a2.split(" ");
    var res2 = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = array[i].length - 1; j >= 0; j--) {
            res2 += array[i][j];
        }
        res2 += " ";
    }
    return a2 + ": " + res2;
}
console.log(inversa("Hoje é Domingo"));

//Ex.3
function vogais(str) {
    str = str.toLowerCase();
    var contador = 0;
    var vogais = ['a', 'e', 'o', 'i', 'é'];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vogais.length; j++) {
            if (str[i] == vogais[j]) {
                contador++;
            }
        }
    }
    return contador;
}
console.log(vogais("Hoje é Domingo"));
 
//Ex.4
function letras(str,a) {
    str = str.toLowerCase();
    var contador = 0;
    for (var i = 0; i < str.length; i++) { 
        if (str[i] == a) { 
            contador++;
        }
    }
    return contador;
}
console.log(letras("Hoje é Domingo",'o'));

//Ex.5
function horario(entrada, saida) {
    var ehora = entrada[0] + entrada[1];
    var emin = entrada[3] + entrada[4];
    var esegundo = entrada[6] + entrada[7];
    var shora = saida[0] + saida[1];
    var smin = saida[3] + saida[4];
    var ssegundo = saida[6] + saida[7];
    rhora=0;
    rmin=0;
    rsegundo=0;
    rhora=shora-ehora;
    if ((smin-emin)<0) {
        nmin = smin - emin
        rmin=60+nmin
        rhora-=1
    }else{
        rmin=smin-emin
    }
    if ((ssegundo-esegundo)<0){
        nsegundo=ssegundo-esegundo
        rsegundo=60+nsegundo
    }else{
        rsegundo=ssegundo-esegundo
    }
    return "Trabalhou "+rhora+" horas, "+rmin+" minutos e "+rsegundo+" segundos." 
}
console.log(horario(08, 18))

//Ex.6
function quadrado(largura, altura) {
    
}