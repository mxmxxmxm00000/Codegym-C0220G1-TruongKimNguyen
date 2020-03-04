function num1() {
    let browser = prompt("please type your: ", '');
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }
}

function num2() {
    let a = prompt("nhap a: ", '') * 1;
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1)
            break;
        case 2:
        case 3:
            alert(2, 3);
            break;
    }
}

function num3() {
    let a = prompt("nhap so a: ", '') * 1;
    if (a > 0) {
        alert("1");
    } else if (a < 0) {
        alert("-1");
    } else alert("0");

}