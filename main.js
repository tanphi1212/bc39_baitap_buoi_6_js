//bài 1

function soNguyenDuongNhoNhat() {
    var tong = 0;
    var soNguyen = 1
    while (tong <= 10000) {
        tong += ++soNguyen;
    }
    document.getElementById('infoNguyenDuong').innerHTML  = "Số nguyên dương nhỏ nhất là: "   + soNguyen;
}

// bài 2

function  tinhTongXvaN(){
    var soN = document.getElementById('soN').value*1;
    var soX = document.getElementById('soX').value*1;

    var tong = 0;

    for(var i=1;i  <= soN; i++){
        tong += Math.pow(soX,i)
    }

    document.getElementById('infoTongXvaN').innerHTML = "Tổng: " + tong;
} 

// bài 3

function tinhGiaiThua(){
    var soGiaiThua = document.getElementById('soGiaiThua').value*1;

    var giaiThua = 1;
    for(var i = 1; i <= soGiaiThua; i++){
        giaiThua = giaiThua*i
    }

    document.getElementById('infoGiaiThua').innerHTML = "Giai thừa của " + soGiaiThua  + " là: " + giaiThua;
}

// bài 4

function  taoDiv(){
    var content = "";
    for(var i = 1; i <=10; i++){
        if(i%2 == 0){
            content += '<div class="bg-info p-2 text-white">Div chẵn</div>'
        }else{
            content += '<div class="bg-warning p-2 text-white">Div lẻ</div>'
        }   
    }
    document.getElementById('infoTaoDiv').innerHTML = content;
}

//  bài 5

function timNguyenTo(){
    var soNguyenTo = document.getElementById('soNguyenTo').value*1;
    var content = '';
    var sqrt ;
    var count ;
    for(var i=2; i <= soNguyenTo; i++){
        count = 0;
        sqrt = Math.sqrt(i)
        for(var j = 2; j <= sqrt; j ++){
            if(i%j  == 0){
                count += 1;
            }
        }
        if(count == 0){
            content += i + "  ";
        }
    }

    document.getElementById('infoNguyenTo').innerHTML = content;
}