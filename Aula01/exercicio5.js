/*Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.*/

/*INICIO
    num = numero_recebido_do_usuario
    sorte = numero_randomico

    se num = sorte
        retorna Parabéns, você acertou!

    senão
        num2 = numero_recebido_do-usuario
        se num2 == sorte
            retorna Parabéns, você acertou!
        senão 
            retorna não foi dessa vez\1
FIM*/

const num = parseInt(prompt(`Digite um número de 1 a 10`));

const sorte = Math.floor(Math.random()*10+1);
console.log(`sorte fora do if e else: `, sorte)

if(num == sorte){
    const num2 = parseInt(prompt(`Digite um número de 1 a 10`));
    console.log(`sorte dentro do else: `, sorte)
}else{
    const num2 = parseInt(prompt(`Digite um número de 1 a 10`));

    if()
}

