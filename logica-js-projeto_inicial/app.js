alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
//O comando Math.random () dá números aleatórios entra 0 e 1, mas como queremos números com duas casas decimais, multiplicamos por 10, dessa forma ele dará números de 0 a 9,mas ele ainda dará números decimais. Para que ele me dê números inteiros coloco na frente desse comando parseInt, o coloqco todo meu comando dentro de parenteses. O "+1" é para que ele dê de 0 a 10. Se queiser número com 3 casas decimais, multiplico por 100, e assim em diante.
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


//"Enquanto" (while) o chute "não for igual ao" (!=) número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um númeto entre 1 e ${numeroMaximo}`);
//Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    
//Depois do 'se' tem o 'então'
    } else { //Dentro do 'então' tem outra condição
//Se o número secreto for maior que o chute
        if (numeroSecreto > chute ) {
    alert (`Você errou! O número secreto é maior que ${chute}`);
//'Se' não é maior 'então' é menor
        } else {
    alert (`Você errou! O número secreto é menor que ${chute}`)
        }
        //tentativas = tentativas + 1;
        tentativas++
        
    }
};
