// const listaDeNumeros = [1, 2, 3, 4, 5];
// let soma = 0;

// // Imprime número de elementos
// console.log(listaDeNumeros.length);

// for (let i = 0; i < listaDeNumeros.length; i++) {
//   soma += listaDeNumeros[i];
// }

// console.log("A soma dos números é:", soma);

// function calculaOrcamento2(){

//     // var gastos = [1800, 950, 620, 38];
//     var gastos = [3600, 950, 620, 38];
//     var totalGastos = gastos[0];
//     var salario = 3500;
//     var statusSaldo =  'positivo';
//     var saldo = 0;
//     var i = 1;

//     while(salario >= totalGastos && i<gastos.length){
//         totalGastos += gastos[i];
//         i++;
//     }

//     saldo = salario - totalGastos;
//     if (saldo < 0 ){
//         statusSaldo = 'negativo';
//     } 
//     console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
// }

// calculaOrcamento2()

matrizA = [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 10]]

linhasA = matrizA.length
colunasA = matrizA[0].length

console.log("linhasA: ",linhasA)
console.log("colunasA: ",colunasA)