import { questionArray } from "./questions.js"

const contentContainer=document.querySelector(".content-container")
const contentContainer2=document.querySelector(".content-container-2")
const startButton=document.querySelector(".start")
const questionBox=document.querySelector(".question");
const answersBox=document.querySelectorAll(".answer");
const lifelineButton=document.querySelectorAll(".lifeline-button");
const nextButton=document.querySelector(".next")
const moneyDisplay=document.querySelector(".money")

let questionCount = 0

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
        questionBox.innerHTML=questionArray[questionCount].text
    
}
const renderAnswers = () => {
    answersBox[0].innerHTML=questionArray[questionCount].answer1;
    answersBox[1].innerHTML=questionArray[questionCount].answer2;
    answersBox[2].innerHTML=questionArray[questionCount].answer3;
    answersBox[3].innerHTML=questionArray[questionCount].answer4;
}

const handleAnswer = (event) => {
    const answer = event.target
    if (answer.innerHTML==questionArray[questionCount].correct) {
        answer.style.backgroundColor="green";
        countMoney();
    } else {
        answer.style.backgroundColor="red";
    }
}

answersBox.forEach((button)=> {
    button.addEventListener("click", handleAnswer);
})

const handleSkip = () => {
    questionCount++;
    lifelineButton[2].style.backgroundColor="gray";
    renderQuestion();
    renderAnswers();
}

lifelineButton[2].addEventListener("click", handleSkip)

const handleNext = () => {
    questionCount++;
    renderQuestion();
    renderAnswers();
}

nextButton.addEventListener("click", handleNext)

const countMoney = () => {
    let moneyAdded=0
    switch(questionCount) {
        case 0:
            moneyAdded+=100;
            break;
        case 1:
            moneyAdded+=200;
            break;
        case 2:
            moneyAdded+=300;
            break;
        case 3:
            moneyAdded+=500;
            break;
        case 4:
            moneyAdded+=1000;
        case 5:
            moneyAdded+=2000;
            break;
        case 6:
            moneyAdded+=4000;
            break;
        case 7:
            moneyAdded+=8000;
            break;
        case 8:
            moneyAdded+=16000;
            break;
        case 9:
            moneyAdded+=32000;
            break;
        case 10:
            moneyAdded+=64000;
            break;
        case 11:
            moneyAdded+=125000;
            break;
        case 12:
            moneyAdded+=250000;
            break;
        case 13: 
            moneyAdded+=500000;
            break;
        case 14:
            moneyAdded+=1000000;
            break;
    }
    moneyDisplay.innerText=`Money Acquired: £${moneyAdded}`
}

//fix styling
//fix answer colors
//make endgame
//implement other lifelines


