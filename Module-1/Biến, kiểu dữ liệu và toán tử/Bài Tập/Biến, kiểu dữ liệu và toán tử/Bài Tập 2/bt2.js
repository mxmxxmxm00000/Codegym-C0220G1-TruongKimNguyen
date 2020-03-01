function convert() {
    let num= document.getElementById("num");
    let from= document.getElementById("from").value;
    let to= document.getElementById("to").value;
    let result=document.getElementById("result");
    if(from==="C" && to==="F") {
        result.value= [160+(9*num.value)]/5;
    }
    else if(from==="F" && to==="C") {
        result.value=[(5*num.value)-160]/9;
    }
    else if(from==="F" && to==="F") {
        alert("Enter the degree number again");
    }
    else if(from==="C" && to==="C") {
        alert("Enter the degree number again");
    }
}