import { questionArray } from "./questions.js"
let questionBox;
let answersBox;

const startButton=document.querySelector(".start")

const switchPage = () => {
    window.location.href="./index2.html"
    
    questionBox=document.querySelector(".question");
    answersBox=document.querySelectorAll(".answer");
    console.log(questionBox)
    renderQuestion();
    renderAnswers();
}

if (startButton!==null) {
    startButton.addEventListener("click", switchPage)
}


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
    questionBox.innerHTML=renderQuestion(question)
})
*/

const renderQuestion = () => {
    questionBox.innerHTML=questionArray[0].text
}


const renderAnswers = () => {
    answersBox[0].innerHTML=questionArray.answer1;
    answersBox[1].innerHTML=questionArray.answer2;
    answersBox[2].innerHTML=questionArray.answer3;
    answersBox[3].innerHTML=questionArray.answer4;
}

