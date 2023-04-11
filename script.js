import { questionArray } from "./questions.js"
const contentContainer=document.querySelector(".content-container")
const contentContainer2=document.querySelector(".content-container-2")
let questionBox;
let answersBox;
contentContainer2.style.display="none";
const startButton=document.querySelector(".start")

const switchPage = () => {
    contentContainer.style.display="none";
    contentContainer2.style.display="block";
    questionBox=document.querySelector(".question");
    answersBox=document.querySelectorAll(".answer");
    renderQuestion();
    renderAnswers();
}

if (startButton!==null) {
    startButton.addEventListener("click", switchPage)
}

const renderQuestion = () => {
    questionBox.innerHTML=questionArray[0].text
}


const renderAnswers = () => {
    answersBox[0].innerHTML=questionArray.answer1;
    answersBox[1].innerHTML=questionArray.answer2;
    answersBox[2].innerHTML=questionArray.answer3;
    answersBox[3].innerHTML=questionArray.answer4;
}

