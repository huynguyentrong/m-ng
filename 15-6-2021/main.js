var listNumber = [];
function getEle(id){
 return document.getElementById(id);
}
getEle('add').addEventListener("click",function(event){
    event.preventDefault();
    var number = getEle('Number').value;
    number = parseFloat(number);
    listNumber.push(number);
    console.log(listNumber);
    getEle("btnfooter").innerHTML = "Mảng :" + listNumber;
});
// bài 1
function tongsoduong(){
    if(listNumber.length === 0){
        alert("vui lòng nhập số");
        return;
    }
    var sum = 0;
    for(var i=0;i<listNumber.length;i++){
        if(listNumber[i] > 0){
            sum+=listNumber[i];
        }
    }
    getEle("btnfooter").innerHTML = sum;
}
getEle("demo").addEventListener("click",function(event){
    event.preventDefault();
    tongsoduong();
});
// bài 2
function demsoduong(){
    if(listNumber.length === 0){
        alert("vui lòng nhập số");
        return;
    }
    var count = 0;
    for(var i=0;i<listNumber.length;i++){
        if(listNumber[i] > 0){
            count++;
        }
}
getEle("btnfooter").innerHTML = "Có" + count + "soduong";
}
getEle("dem").addEventListener("click",function(event){
event.preventDefault();
    demsoduong();
});
//bài 3
function sonhonhattrongmang(){
    if(listNumber.length === 0){
        alert("vui lòng nhập số");
        return;
    }
    var min = listNumber[0];
    for(var i=0;i<listNumber.length;i++){
        if(listNumber[i]<min){
            min = listNumber[i];
        }
    }
    getEle("btnfooter").innerHTML = "số nhỏ nhất trong mảng là :" + min
}
getEle("min").addEventListener("click",function(event){
    event.preventDefault();
        sonhonhattrongmang();
 });
 // bài 4
function soduongnhonhat(){
    if(listNumber.length === 0){
        alert("vui lòng nhập số");
        return;
    }
    var soduongnhonhat = listNumber[0];
    for(var i=0;i<listNumber.length;i++){
        if(listNumber[i] < soduongnhonhat && listNumber[i] >= 0){
            soduongnhonhat = listNumber[i];
            break;
        }
    }   
    
    getEle("btnfooter").innerHTML = "số dương nhỏ nhất là :" + soduongnhonhat;
}
getEle("btnsoduong").addEventListener("click",function(event){
    event.preventDefault();
        soduongnhonhat();
});
// bài 5
function sochancuoicung(){
    var sochan = listNumber[0];
    if(listNumber[i] % 2 != 0){
        sochan = -1
    }
    for(var i = 0; i < listNumber.length;i++){
        if(listNumber[i] % 2 === 0){
            sochan = listNumber[i];
        }
    }
    getEle("btnfooter").innerHTML = "số chẵn cuối cùng là :" + sochan;
}
getEle("btntimsochan").addEventListener("click",function(event){
    event.preventDefault();
        sochancuoicung();
});
// bài 7
function sapxep(){
    for(var i = 0; i<listNumber.length-1;i++){
        for(var j = i+1;j<listNumber.length;j++){
            if(listNumber[i] > listNumber[j]){
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }
    getEle("btnfooter").innerHTML = "sắp xếp theo tăng dần là :" + listNumber;
}
getEle("btnsapxep").addEventListener("click",function(event){
    event.preventDefault();
        sapxep();
});
//bài 6
function doicho(){
    var vitri = [];
    var vitri_1 = getEle("txtvitri").value;
    var vitri_2 = getEle("btnvitri").value;
    for(var i = 0; i<listNumber.length-1;i++){
        for(var j = i+1;j<listNumber.length;j++){
            vitri = listNumber[vitri_1];
            listNumber[vitri_1] = listNumber[vitri_2];
            listNumber[vitri_2] = vitri;
        }
    }
    getEle("btnfooter").innerHTML = "hoán đổi :" + listNumber;
}
getEle("btndoicho").addEventListener("click",function(event){
    event.preventDefault();
        doicho();
});
