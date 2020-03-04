function num1() {
    let a = prompt("nhap du lieu a", "") * 1;
    let b = prompt("nhap du lieu b", "") * 1;
    if (a + b < 4) {
        alert("Below");
    } else alert("Over");
}

function num2() {
    let login =prompt("Nhap Vao",'');
    let message;
    if (login == "Employee") {
        message = "Hello";
    } else if (login == Director) {
        message = "Greetings";
    }else if (login == "") {
        message= "No login";
    } else message = '';
    alert(message);
}

