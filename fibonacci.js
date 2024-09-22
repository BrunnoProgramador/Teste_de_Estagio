const readline = require('readline-sync');  // Importa o readline-sync

let fibonacci = 1;
let fibonaccianterior = 0;
let number = parseInt(readline.question('Digite um número: '), 10);  // Solicita o número e converte para inteiro

while (fibonacci < number) {
    let temp = fibonacci;
    fibonacci = fibonacci + fibonaccianterior;
    fibonaccianterior = temp;

    console.log(fibonacci);  // Mostra os números da sequência conforme são gerados
}

if (number === fibonacci) {
    console.log("Esse número pertence à sequência Fibonacci!");
} else {
    console.log("Esse número não pertence à sequência Fibonacci!");
}
