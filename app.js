/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/
const correctAnswers = ['B','B', 'A','C','A']

const form = document.querySelector('form')
const result = document.querySelector('.result')
const span = document.querySelector('span')
const pScore = document.querySelector('#score')





form.addEventListener('submit', Event => {
    Event.preventDefault()
    //let score = 0
    let counter = 0
    const inputAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ]
    /*inputAnswers.forEach((inputAnswer, index) => {
        if(inputAnswer === correctAnswers[index]){
           return score+= 20
        }
        
    })*/

    const score = inputAnswers.reduce((acc, item, index) => {
        if(item === correctAnswers[index]){
            acc += 20
        }
        return acc
    },0)
    console.log(score)

    const timer = setInterval(() => {
        
        if(counter === score) {
            if(score>50) {
                console.log(span.textContent)
                pScore.setAttribute('class', 'text-aproved')
                span.setAttribute('class', 'text-aproved')
            }else{
                pScore.setAttribute('class', 'text-reproved')
                span.setAttribute('class', 'text-reproved')
            }
           clearInterval(timer) 
        }
        
        span.textContent = `${counter}%`
        counter++
    }, 10)
    
    result.style.display = 'block'
    result.addEventListener('click', ()=> {
        result.style.display = 'none'
    })
    
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    
})