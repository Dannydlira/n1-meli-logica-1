/*1. Escreva um programa que solicita o nome e a altura de 5 atletas. 
Ao final da entrada de dados, informe A ALTURA do atleta mais alto.*/

let cont, nome, nome2, altura, altura2;
altura2 = 0;
nome = '';
cont = 0
media = 0

while (cont < 3){
    nome = prompt('Digite o nome do atleta: ')
    altura = parseFloat(prompt('Digite a altura do atleta'))
    
    if (altura > altura2){
        nome2 = nome;
        altura2 = altura;
    }
    
    media = media + altura
    
    cont++;
}
media = media/3;

document.write(`${nome2} é o atleta com maior altura com ${altura2} metros `)
document.write(`a média das alturas é: ${media}`) 
