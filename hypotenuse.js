const sideInput=document.querySelectorAll(".side-input");
const hypotenuseButton=document.querySelector("#hypotenuse-button");
const outputEl=document.querySelector("#output")

function calculateSum(c,s){
   let a= Number(sideInput[0].value)
    let b= Number(sideInput[1].value)
    sum=a*a+b*b;
    return sum
}

function calculateHypotenuse (){
    var sum=calculateSum( Number(sideInput[0].value), Number(sideInput[1].value));
    var lengthofHypotenuse = Math.sqrt(sum)
    outputEl.innerText="The length of Hypotenuse is "+lengthofHypotenuse;
};


// Length of the hypotenuse c = sqrt ( a² + b² )
hypotenuseButton.addEventListener("click",calculateHypotenuse)
