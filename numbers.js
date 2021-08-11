function numberGenerator(){
let lottoArray = [];
while(lottoArray.length < 5){
    let newNumber = Math.floor(Math.random() * 69 + 1);
    if(lottoArray.indexOf(newNumber) === -1) lottoArray.push(newNumber);
}
document.getElementById("number1").innerHTML = lottoArray[0];
document.getElementById("number2").innerHTML = lottoArray[1];
document.getElementById("number3").innerHTML = lottoArray[2];
document.getElementById("number4").innerHTML = lottoArray[3];
document.getElementById("number5").innerHTML = lottoArray[4];
}