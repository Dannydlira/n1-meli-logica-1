/* 
1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.
*/

/**
 * INICIO
 *  receber um número
 *  se numero > 10  
 *      "Numero não é maior que 10!"
 *  se não
 *      "Número não é maior que 10"
 * FIM 
 */

 const numero = prompt('Digite um número')

 if(numero>10){
    alert(`${numero} é maior que 10`)
 }else{
     if(numero === 10){
        alert(`${numero} é igual a 10`)

    }else{
        alert(`${numero} não é maior que 10 e nem igual a 10`)
    }
 }
