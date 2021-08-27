var quizForm=document.querySelector("#quiz-form");
var submitButton=document.querySelector("#submit-button");
var outputEl=document.querySelector("#output");

const correctAnswers=["90°","right angled"];

function calculateScore(){
    //score--keeps track of users score
    let score=0;
    //index--to access correctAnswers array
    index=0;
    const quizData=new FormData(quizForm);
    //looping the value through quizData.values()
    for(let value of quizData.values()){
        //quizData.values is wrong---it is simply value
        if(value===correctAnswers[index]){
        score=score+1;
        }
        index=index+1;
    }
    outputEl.innerText="your score is: "+score;
};

submitButton.addEventListener("click",calculateScore)



//console.log(quizForm,submitButton,outputEl)
//for(let entry of data)--- the entry here gives key:value pair
//unable to print just value,key value bott are printing
