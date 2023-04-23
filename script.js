//your code here
let element=document.getElementById("evaluatedText");
let output=document.getElementById("letterCount")

element.addEventListener("input",fun)

function fun()
{
let len=element.value.length;
output.innerText=len;
}