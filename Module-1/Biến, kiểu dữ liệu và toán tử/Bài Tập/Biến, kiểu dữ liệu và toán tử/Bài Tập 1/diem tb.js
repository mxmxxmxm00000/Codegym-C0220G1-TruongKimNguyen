function conver() {
    let result = document.getElementById("result");
    let diemToan = document.getElementById("dt");
    let diemHoa  = document.getElementById("dh");
    let diemLi = document.getElementById("dl");
    result.value = (diemToan.value*1+diemHoa.value*1+diemLi.value*1)/3;
    result.value= Math.round( result.value * 100 + Number.EPSILON ) / 100


}