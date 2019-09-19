/*
3. Altere o exercício anterior de forma que ele informe também se os números são iguais.
*/

const numero1 = parseInt(prompt('Digite um número'))
 const numero2 = parseInt(prompt('Digite outro número'))

 if(numero1>numero2){
    alert(`${numero1} é maior que outro número`)
 }else if(numero2>numero1){
     alert(`${numero2} é maior que o outro número`)
 } else{
     alert("Os números são iguais")
     }
