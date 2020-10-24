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

const getAverage = (...a:number[]):string => {//burda a number array i ile fonksiyona istedigimiz kadar deger girebilir yaptik. ve arrow function a cevirdik.
  //  geriye deger döndürmeyeceksek string yerine void yazariz
  let total = 0;
  let count = 0;

  for (let i = 0; i < a.length;i++){ // degere bagimliligimiz kalmadi for döngüsüyle girilen her deger burda toplanip hesaplanir ve her seferinde count bir artar
    total += a[i];
    count ++;
  }

  const result = total/count;

  return 'result : '+ result;
}
getAverage(10,20,30,40,50,60,70);// istedigimiz kadar deger girebiliriz

const getSquare = (...b:number[]):number => {
  let square = 0;
  for (let i = 0; i < b.length; i++){
    square = b[i]*b[i]
  }

  return square;
}
getSquare(1,2,3,4);
