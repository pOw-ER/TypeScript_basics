// function getAverage (a:number,b:number,c?:number):string {// burda ? o secenegi optional yapar yani 3. veri girilmese hata vermez. string ise sonucu string olarak almamizi saglar
//   let total = a+b;
//   let count = 2;
//   if (typeof c !== 'undefined'){
//     total+=c;
//     count++;
//   }
//   const result = total/count;
//   return 'result : '+ result;
// }
// getAverage(10,20);// c ye ? koydugumuz icin hata vermedi 2 deger ile islem yapmamiza
// getAverage(10,20,30);
var getAverage = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    //  geriye deger döndürmeyeceksek string yerine void yazariz
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) { // degere bagimliligimiz kalmadi for döngüsüyle girilen her deger burda toplanip hesaplanir ve her seferinde count bir artar
        total += a[i];
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
};
getAverage(10, 20, 30, 40, 50, 60, 70); // istedigimiz kadar deger girebiliriz
var getSquare = function () {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
    var square = 0;
    for (var i = 0; i < b.length; i++) {
        square *= b[i];
    }
    return square;
};
console.log(getSquare(1, 2, 3, 4, 5, 6));
