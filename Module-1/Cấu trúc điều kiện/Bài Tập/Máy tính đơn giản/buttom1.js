let result = document.getElementById("result");

function click1(cal) {
    result.innerText = result.value + cal;
}

function getResult() {
    result.innerText = eval(result.value);

}
function c() {
    result.innerText="";

}
