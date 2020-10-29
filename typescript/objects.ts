interface Point {
  x:number;
  y:number;
}

interface Passenger {
  name : string;
  phone : string;
}

interface Vehicle {
  currentLocation : Point;
  travelTo(point: Point) : void;
  // getDistance(pointA: Point, pointB : Point):number;
  // addPassenger(passenger:Passenger):void ;
  // removePassenger(passenger:Passenger):void;
}

class Taxi implements Vehicle{// taxi de bir arac ve biz vehicle dan gelecek bilgi data tarzini implement ettik yani taxi classsinda kullunmak icin kopyaladik denebilir
  //.. buraya taxi ye ait ama vehicle da olamayan özellikler tanimlanabilir
  currentLocation : Point;
  travelTo(point: Point): void{
    console.log(`taksi X: ${point.x} Y: ${point.y} konumuna ilerliyor`);
  }

}

class Bus implements Vehicle {// otobüs te bir arac ve vehicle daki veri tarzini burda otobpüs icin implement ederek kullanabliriz
  //.. yine otobüse ait vehicle de olamayan  bilgileri buraya yazabiliriz
  currentLocation : Point;
  travelTo(point: Point): void{
    console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna ilerliyor`);
  }
}


let taxi_1 = Taxi = new Taxi();

taxi_1.travelTo({x:1 , y:2});

taxi_1.currentLocation = {x: 2, y: 5};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let bus_1 = new Bus();

bus_1.currentLocation = {x:5,y:8};
bus_1.travelTo({x:1,y:1});
