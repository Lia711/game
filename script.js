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
let moneyAdded=0

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

//render questions and answers
const renderQuestion = () => {
        questionBox.innerHTML=questionArray[questionCount].text   
}
const renderAnswers = () => {
    answersBox[0].innerHTML=questionArray[questionCount].answer1;
    answersBox[1].innerHTML=questionArray[questionCount].answer2;
    answersBox[2].innerHTML=questionArray[questionCount].answer3;
    answersBox[3].innerHTML=questionArray[questionCount].answer4;
    answersBox.forEach((button)=> {
        button.addEventListener("click", handleAnswer);
    })
}

//when answer is clicked
const handleAnswer = (event) => {
    const answer = event.target
    if (answer.innerHTML==questionArray[questionCount].correct) {
        answer.style.backgroundColor="green";
        countMoney();
    } else {
        answer.style.backgroundColor="red";
    }
    answersBox.forEach((answer)=> {
        answer.removeEventListener("click", handleAnswer)
    })
    nextButton.addEventListener("click", handleNext)
}

//lifeline: skip question
const handleSkip = (event) => {
    questionCount++;
    event.target.style.backgroundColor="gray";
    event.target.removeEventListener("click", handleSkip)
    renderQuestion();
    renderAnswers();
}
lifelineButton[0].addEventListener("click", handleSkip)
lifelineButton[1].addEventListener("click", handleSkip)
lifelineButton[2].addEventListener("click", handleSkip)


//next question
const handleNext = () => {
    questionCount++;
    renderQuestion();
    renderAnswers();
    answersBox.forEach((answer)=> {
        answer.style.backgroundColor="#6158ac";
    })
    nextButton.removeEventListener("click", handleNext);
}
nextButton.addEventListener("click", handleNext)

//money calculation
const countMoney = () => {
    switch(questionCount) {
        case 0:
            moneyAdded+=100;
            break;
        case 1:
            moneyAdded+=100;
            break;
        case 2:
            moneyAdded+=100;
            break;
        case 3:
            moneyAdded+=200;
            break;
        case 4:
            moneyAdded+=500;
        case 5:
            moneyAdded+=1000;
            break;
        case 6:
            moneyAdded+=2000;
            break;
        case 7:
            moneyAdded+=4000;
            break;
        case 8:
            moneyAdded+=8000;
            break;
        case 9:
            moneyAdded+=16000;
            break;
        case 10:
            moneyAdded+=32000;
            break;
        case 11:
            moneyAdded+=61000;
            break;
        case 12:
            moneyAdded+=125000;
            break;
        case 13: 
            moneyAdded+=250000;
            break;
        case 14:
            moneyAdded+=500000;
            break;
    }
    moneyDisplay.innerText=`Money Acquired: £${moneyAdded}`
}

//fix styling for small screen width
//make endgame

