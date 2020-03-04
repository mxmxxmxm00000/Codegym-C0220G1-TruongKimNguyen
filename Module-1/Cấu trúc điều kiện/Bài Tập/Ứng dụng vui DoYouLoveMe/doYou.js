let buttonN= document.getElementById("buttonN");
function clickYes() {
    alert("all");
}
function  clickNo() {
    let x =window.innerWidth * Math.random();
    let y= window.innerHeight* Math.random();
    buttonN.style.left= x + "px";
    buttonN.style.top= y + "px";


}