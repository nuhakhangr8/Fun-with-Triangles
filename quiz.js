var quizForm=document.querySelector("#quiz-form");
var submitButton=document.querySelector("#submit-button");
var outputEl=document.querySelector("#output");

const correctAnswers=["90°","right angles"];

function calculateScore(){
    //score--keeps track of users score
    let score=0;
    //index--to access correctAnswers array
    let index=0;
    const quizData=new FormData(quizForm);
    for(let value of quizData){
        console.log(value)
    }

};

submitButton.addEventListener("click",calculateScore)



//console.log(quizForm,submitButton,outputEl)
//for(let entry of data)--- the entry here gives key:value pair
//unable to print just value,key value bott are printing
