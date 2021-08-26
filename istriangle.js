const angleInput=document.querySelectorAll(".angle-input")
const triangleButton=document.querySelector("#triangle-button")
const outputEl=document.querySelector("#output")


function calculateSumOfAngles(){
    var sumOfAngles=(Number(angleInput[0].value)+Number(angleInput[1].value)+Number(angleInput[2].value));
    return sumOfAngles
}

function isTriangle(){
    sumOfAngles= calculateSumOfAngles(Number(angleInput[0].value)+Number(angleInput[1].value)+Number(angleInput[2].value));
    if(sumOfAngles===180){
        outputEl.innerText="YAayyy!!!! It is a Triangle";
    } else{
       outputEl.innerText="oh oh !! it is not a triangle";
    }
}

triangleButton.addEventListener("click",isTriangle)





// console.log(angleInput[0])
// console.log(angleInput[2]) 


