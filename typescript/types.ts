let number = 5;

// number = 'a'; // burda let number diyip 5 dersek number tipini sayi olarak belirler ve string girersek problem olur

let b; // burda  let ten sonra deger girmedigimiz icin type any olarak gözükür ve asagidaki gibi farkli degerler icin hata almayiz

b = 5;
b = 't';
b = true;

let c : number; // dersek te type c nin type i number olur

let d : number = 5;
let e : boolean = true;
let f : string = 'de';
let g : any ;
let h : number [] = [1,2,3]; // number türünde array
let i : Array<number> = [1,2,3,] // üstteki aynisi farkli yapilisi
let j : any [] = [1,2,'a',true]; // any tipinde array her deger girilebilir array icine
let k : [string,number,boolean] = ['a',10,true]; //adi tuple. sirasiyla array tip ayarlamasi ve ona göre veri girilmesi. ilk string sonraki number en son boolean

enum Payment {kredi = 0, havale = 1, kapidaodeme = 2, eft = 3}; // enum js te bir fonkisyona karsilik gelir

let kredi = Payment.kredi; // 0
let havale = Payment.havale; // 1
let kapidaodeme = Payment.kapidaodeme; // 2
let eft = Payment.eft; // 3
