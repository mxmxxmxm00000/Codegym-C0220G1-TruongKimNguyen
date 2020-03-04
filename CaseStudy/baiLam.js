let name = prompt("Nhap ten cua ban :", '');
let cmnd = prompt("Nhap so cmnd cua ban: ", '');
let dateOfBird = prompt("Nhap ngay thang nam sinh: ", '');
let email = prompt("Nhap email cua ban: ", '');
let address = prompt("Nhap dia chi cua ban: ", '');
let customer = prompt("Nhap loai Customer (Diamond, Platinum, Gold, Silver, Member): ", '');
let discount = prompt("Nhap ma giam gia cua ban: ", '');
let number = prompt("Nhap so luong di kem: ", '');
let numberOfDay = prompt("Nhap so ngay thue cua ban: ", '');
let typeOf = prompt("Nhap loai dich vu cua ban (Villa, House, Room): ", '');
let room = prompt("Nhap loai phong cua ban (Vip, Business,  Normal): ", '');
let total;

switch (typeOf) {
    case "Villa" :
        typeOf = 500;
        break;
    case "House" :
        typeOf = 300;
        break;
    case "Room" :
        typeOf = 100;
        break;
}
total = typeOf * 1 * numberOfDay * 1 * (1 - (discount * 1 / 100));

alert('Ten : ' + name +
    '\ncmnd: ' + cmnd +
    '\nNgay Sinh: ' + dateOfBird +
    '\nemail: ' + email +
    '\nDia Chi: ' + address +
    '\nCustomer: ' + customer +
    '\nMa Giam Gia: ' + discount +
    '\nSo Luong Di Kem: ' + number +
    '\nSo Ngay Thue: ' + numberOfDay +
    '\nLoai Dich Vu: ' + typeOf +
    '\nLoai Phong: ' + room +
    '\nChi Phi: ' + total + "USD");
