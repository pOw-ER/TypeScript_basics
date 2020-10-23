var number = 5;
// number = 'a'; // burda let number diyip 5 dersek number tipini sayi olarak belirler ve string girersek problem olur
var b; // burda  let ten sonra deger girmedigimiz icin type any olarak gözükür ve asagidaki gibi farkli degerler icin hata almayiz
b = 5;
b = 't';
b = true;
var c; // dersek te type c nin type i number olur
var d = 5;
var e = true;
var f = 'de';
var g;
var h = [1, 2, 3]; // number türünde array
var i = [1, 2, 3,]; // üstteki aynisi farkli yapilisi
var j = [1, 2, 'a', true]; // any tipinde array her deger girilebilir array icine
var k = ['a', 10, true]; //adi tuple. sirasiyla array tip ayarlamasi ve ona göre veri girilmesi. ilk string sonraki number en son boolean
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; // 0
var havale = Payment.havale; // 1
var kapidaodeme = Payment.kapidaodeme; // 2
var eft = Payment.eft; // 3
