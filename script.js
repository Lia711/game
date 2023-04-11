import { questionArray } from "./questions.js"

const contentContainer=document.querySelector(".content-container")
const contentContainer2=document.querySelector(".content-container-2")
const startButton=document.querySelector(".start")
const questionBox=document.querySelector(".question");
const answersBox=document.querySelectorAll(".answer");

//on load question box is hidden
contentContainer2.style.display="none";

//load questions; hide start page
const switchPage = () => {
    contentContainer.style.display="none";
    contentContainer2.style.display="block";
    renderQuestion();
    renderAnswers();
}

//if start button is displayed, look for click
if (startButton!==null) {
    startButton.addEventListener("click", switchPage)
}

const renderQuestion = () => {
        questionBox.innerHTML=questionArray[0].text
    
}
const renderAnswers = () => {
    answersBox[0].innerHTML=questionArray[0].answer1;
    answersBox[1].innerHTML=questionArray[0].answer2;
    answersBox[2].innerHTML=questionArray[0].answer3;
    answersBox[3].innerHTML=questionArray[0].answer4;
}

const handleAnswer = (event) => {
    const answer = event.target
    if (answer.innerHTML==questionArray[0].correct) {
        answer.style.backgroundColor="green";
    } else {
        answer.style.backgroundColor="red";
    }
}

answersBox.forEach((button)=> {
    button.addEventListener("click", handleAnswer);
})

