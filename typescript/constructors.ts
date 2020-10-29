interface Point {
  x:number;
  y:number;
}

interface Passenger {
  name : string;
  phone : string;
}

interface Vehicle {
  travelTo(point: Point) : void;
  // getDistance(pointA: Point, pointB : Point):number;
  // addPassenger(passenger:Passenger):void ;
  // removePassenger(passenger:Passenger):void;
}

class Taxi implements Vehicle{
  // private color : string;
  // private currentLocation : Point; // private olunca yeni olustuurlan nesne üzerinde  ulasilip degistirilemez olur.

  // constructor da da private yapabiliriz
  constructor (private location : Point, private color:string) {
    // bu sekilde de direk private yapmis olduk  ve this alanalrina da ihtiyacimiz yok artik
  }
  // constructor (location : Point, color:string) { // contructor burda direk nesne tanimlamalarini yapabildimiz yerdir
  //   this.currentLocation = location;
  //   this.color = color;
  // }

  travelTo(point: Point): void{
    console.log(`taksi X: ${this.location.x} Y: ${this.location.y} konumundan  X:${point.x} Y: ${point.y} konumuna ilerliyor`);
  }

}




let taxi_1 = Taxi = new Taxi({x: 2, y: 5},'red'); // color constructorundan sonra buraya da color girmeliyiz aksi halde hata aliriz. ancak colorun contructor da yazarken ? isareti koyarsak girmesek te hata almayiz olsa da olue olmasa da olur  manaisina gelir.

taxi_1.travelTo({x:1 , y:2});

// taxi_1.currentLocation = {x: 2, y: 5}; // constructor olusturdugumuzda bilgi direk new Taxi () deki parantezler icine girilir.
// console.log(taxi_1.currentLocation.x);
// console.log(taxi_1.currentLocation.y);
// console.log(taxi_1.currentLocation); // artik burda hata vermez cünkü constructor olusturduk. // private yapinca hata verdi yine cünkü artik location bilgiisne disardan ulasamayiz.

