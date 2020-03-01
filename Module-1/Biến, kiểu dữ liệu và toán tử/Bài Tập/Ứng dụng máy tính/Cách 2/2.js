var num1= document.getElementById("num1");
var num2= document.getElementById("num2");
var result= document.getElementById("result");
//function Curalate(e) {
   //if (e === "+") result.innerText= num1.value*1 + num2.value*1
   //else if (e === "-") result.innerText= num1.value - num2.value
    //else if (e === "*") result.innerText= num1.value * num2.value
    // else if (e === "*") result.innerText= num1.value / num2.value }

function Curalate(e) {
    result.innerText = eval(num1.value+ e + num2.value);


}

