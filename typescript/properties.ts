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
  constructor (private _location : Point, private _color:string) {

  }

  travelTo(point: Point): void{
    console.log(`taksi X: ${this._location.x} Y: ${this._location.y} konumundan  X:${point.x} Y: ${point.y} konumuna ilerliyor`);
  }

  // asagidaki gibi proprty olusturabilirz. ancak kücük harfli olmali o yüzden diger locationlarimizi _ ile degistiriyoruz.
  get location (){
    return this._location;
  }

  set location (value:Point){
    if (value.x < 0 || value.y < 0){
      throw new Error ('koordinat bilgileri negatif olamaz')
    }

    this._location = value;
  }
}




let taxi_1 = Taxi = new Taxi({x: 2, y: 5},'red'); // color constructorundan sonra buraya da color girmeliyiz aksi halde hata aliriz. ancak colorun contructor da yazarken ? isareti koyarsak girmesek te hata almayiz olsa da olue olmasa da olur  manaisina gelir.

taxi_1.travelTo({x:1 , y:2});

let currentLocation = taxi_1.location; // artik location property si olusturduk.

taxi_1.location = {x:1 , y:9};

console.log(taxi_1.location);
console.log(currentLocation);

