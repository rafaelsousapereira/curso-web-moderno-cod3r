/* 
01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function calculos(x, y) {
    console.log(`soma: ${x + y}`);
    console.log(`subtracao: ${x - y}`);
    console.log(`multiplicacao: ${x * y}`);
    console.log(`divisao: ${x / y}`);
}

calculos(3, 4);

/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
