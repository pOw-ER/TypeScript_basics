interface Point { // point interface i olustrduk artik point olarak bir fonksiyona gelecek bilgi eklersek x ve y seklinde olmali
  x:number;
  y:number;
}

interface Passenger { // hier haben wir einen Interface erstellt, damit wir data type kontrollieren können
  name : string;
  phone : string;
}

interface Vehicle {
  currentLocation : Point;
  travelTo(point: Point) : void;
  getDistance(pointA: Point, pointB : Point):number;
  addPassenger(passenger:Passenger):void ;
  removePassenger(passenger:Passenger):void;
}
