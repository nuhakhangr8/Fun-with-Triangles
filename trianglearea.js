const areaInput=document.querySelectorAll(".area-input");
const areaButton=document.querySelector("#area-button");
const outputEl=document.querySelector("#output");

function calculateArea(){
    var productTriangle=Number(areaInput[0].value)*Number(areaInput[1].value);
    var areaOfTriangle=productTriangle/2;
    outputEl.innerText="The Area of triangle is : "+areaOfTriangle;
}

areaButton.addEventListener("click",calculateArea);