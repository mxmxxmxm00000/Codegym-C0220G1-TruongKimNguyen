function num1() {
    let a=prompt("Nhap so a","");
    let b=prompt("nhap so b","");
    if( a % b === 0 ) {
        alert(a + " chia het cho " + b);
    }
    else alert( a + " khong chia het cho b "+ b);
}
function num3() {
    let a = prompt("nhap so a") * 1;
    if (a > 0) {
        alert("gia tri "+ a + " lon hon 0");
    }else if (a === 0) {
        alert("gia tri " + a + " bang 0");
    }else alert("gia tri " + a + " nho hon 0");
}
function num4() {
    let a = prompt("nhap a", "") * 1;
    let b = prompt("nhap b", "") * 1;
    let c = prompt("nhap c", "") * 1;
    if (a > b) {
        if (a > c) {
            alert(a + "la so lon nhat");
        } else {
            alert(c + "la so lon nhat");
        }
    } else {
        if (b > c) {
            alert(b + "la so lon nhat");
        } else alert(c + " la so lon nhat");
    }
}
function num5() {
    let diemmieng=prompt("nhap diem kiem tra mieng")*1;
    let diem15phut=prompt("nhap diem kiem tra 15")*1;
    let diem1tiet=prompt("nhap diem kiem tra 1 tiet")*1;
    let diemhocki=prompt("nhap diem hoc ki")*1;
    let diemtbinh=0;
    diemtbinh= (diemmieng+diem15phut+diem1tiet*2+diemhocki*3)/7;
    if(diemtbinh>8) {
        alert("xep loai gioi");
    }else if (diemtbinh >6.5) {
        alert("xep loai kha");
    }else if (diemtbinh>4.5) {
        alert("xep loai trung binh");
    }else alert("xep loai yeu");
}
function num7() {
    let a = prompt("nhap so phut goi") * 1;
    let money = 25000;
    let cost = 0;
    if ( a < 50 ) {
        cost= cost + a*600 + money;
    } else if (a < 200) {
        cost = cost + a*600 +(a-50)*400 +money;
    } else cost= cost + a*600 + a*150 + (a-50)*200 + money;
    alert(cost);
}
function num2() {
    let age= prompt("nhap so tuoi");
    if (age*1 >= 16) {
        alert("Bạn đã đủ điều kiện");
    } else
        alert("Bạn không đủ điều kiện");
}
function num6() {
    let total= prompt("Tong Doanh So Ban Hang")*1;
    let rose= 0;
    if(total < 100000) {
        rose = rose+ total*0.02;
    } else if (total < 500000) {
        rose = rose + total*0.02 +(total-100000)*0.03;
    }else rose= rose + total*0.02 + total*0.03+ (total-500000)*0.05;
alert(rose);
}
