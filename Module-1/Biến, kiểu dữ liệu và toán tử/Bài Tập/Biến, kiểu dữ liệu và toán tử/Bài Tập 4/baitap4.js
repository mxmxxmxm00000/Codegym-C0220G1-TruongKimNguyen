function Convert() {
    let d= document.getElementById("d");
    let P= document.getElementById("P");
    P.value= d.value*Math.PI;
    P.value= Math.round( P.value * 100 + Number.EPSILON ) / 100;

}