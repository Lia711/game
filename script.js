//import questionArray from "./questions.js"
//const questionContainer=document.querySelector(".question-container")

const startButton=document.querySelector(".start")

const switchPage = () => {
    window.location.href="./index2.html"
}

startButton.addEventListener("click", switchPage)

/*
const renderQuestion = (questionObject) => {
    const {text, answer1, answer2, answer3, answer4} = questionObject
    return `<div class="question-container">
    <h1 class="question">${text}</h1>
    <div class="answer-buttons">
        <button class="answer">${answer1}</button>
        <button class="answer">${answer2}</button>
        <button class="answer">${answer3}</button>
        <button class="answer">${answer4}</button>
    </div>  
</div>`
}

questionArray.forEach((question)=> {
    questionContainer.innerHTML=renderQuestion(question)
})
*/