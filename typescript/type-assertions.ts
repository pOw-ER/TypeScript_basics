let message ; // type any oldugu icin string metoflari gözükmez. bunu assertion ile cözüyoruz.

message = 'Hello World';

let count = (<string>message).length; // burada string oldugunu belirtip length metodunu cagirabildik. (<type>variable) burada dikkat
//edileek husus variable in gercekten string veya boolean neye cevireceksek ona cevirilip cevirilemeyecegi. yani biz message i boolen
//yapmak isteseydik hata alirdik cünkü message degeri hello world boolean a vevirilemez
let length1 = (message as string).length; // bu sekilde de yapabiliriz. message as string
