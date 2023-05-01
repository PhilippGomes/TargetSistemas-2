//Usuario colocando o numero   
const num = parseInt(prompt("Digite um número: "));

//Primeiros valores da sequência
let fib1 = 0;
let fib2 = 1;

//Loop para calcular os próximos valores da sequência até encontrar um valor maior ou igual ao número informado
while (fib2 < num) {
    //Calcula o próximo valor da sequência
    const fib3 = fib1 + fib2;
    //Atualiza os valores para a próxima iteração
    fib1 = fib2;
    fib2 = fib3;
}

//Verifica se o número informado pertence à sequência
if (fib2 === num) {
    console.log(num + " pertence à sequência de Fibonacci.");
} else {
    console.log(num + " não pertence à sequência de Fibonacci.");
}
