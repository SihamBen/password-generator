let password,numbers,upper,lower,symbols,generateButton;
passwordOut=document.getElementById("password");
numbers=document.getElementById("numbers");
upper=document.getElementById("uppercase");
lower=document.getElementById("lowercase");
symbols=document.getElementById("symbols");
let pwLength=document.getElementById("pwLength");
generateButton=document.getElementById("generateButton");
generateButton.addEventListener('click',()=>{
    const hasUpper=upper.checked;
    const hasLower=lower.checked;
    const haSymbol=symbols.checked;
    const hasNumber=numbers.checked;
    passwordOut.innerText=generatePassword(hasUpper,hasLower,haSymbol,hasNumber);

})
//generate password
function generatePassword(hasUpper,hasLower,haSymbol,hasNumber)
{
let password="";

let arr=[{hasUpper},{hasLower},{haSymbol},{hasNumber}].filter(item=>Object.values(item)[0]);
console.log(arr);
const typeCount=arr.length;
 if(typeCount==0)
{return password;}
length=parseInt(pwLength.value);
console.log(length);
 for(let i=0;i<length;i+=typeCount)
{
arr.forEach((type)=>{
const funcName=Object.keys(type)[0];
password+=ranFunc[funcName]();
})
}
return password.slice(0,length);
}

//random functions object
let ranFunc= {
    hasUpper:getRandomUpper,
 hasLower:getRandomLower,
haSymbol:getRandomSymbols,
hasNumber:getRandomNumber
}
//random functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return Math.floor(Math.random() * 10) ;
}
function getRandomSymbols() {
    let sym="@^=<>'[]()|-_*$&#"
    return sym[Math.floor(Math.random() * sym.length) ]
}
