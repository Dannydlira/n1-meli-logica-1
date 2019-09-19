/*
2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
*/
/**
 * INICIO
 *  receber um número 
 *  receber outro número
 *  se numero > 10  
 *      "Numero é maior que outronumero!"
 *  se não
 *      "Número não é maior que outronumero"
 * FIM 
 */

 const numero1 = parseInt(prompt('Digite um número'))
 const numero2 = parseInt(prompt('Digite outro número'))

 if(numero1>numero2){
    alert(`${numero1} é maior que outro número`)
 }else{
     if(numero2>numero1){
        alert(`${numero2} é maior que o outro número`)

    }
 }

    



