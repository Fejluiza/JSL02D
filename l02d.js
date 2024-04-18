/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da 
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. 
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi 
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta 
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. */

let nota1
let nota2
let nota3
let nota4

let media
let exame

nota1 = parseFloat(prompt("Digitea 1° Nota: "))
nota2 = parseFloat(prompt("Digitea 2° Nota: "))
nota3 = parseFloat(prompt("Digitea 3° Nota: "))
nota4 = parseFloat(prompt("Digitea 4° Nota: "))

media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    alert("Aluno aprovado com media final de: "+media)
} else if (media <7){
    exame = parseFloat(prompt("Digite a nota do exame: "))
    media = (media + exame) / 2
    if(exame >= 5){
        alert ("Aprovado pela nota do exame: "+ exame)
    }
    else {
        alert("Aluno reprovado!")
    }
}
 