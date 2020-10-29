import {Point} from './Point';
import {Vehicle} from './Vehicle';



export class Taxi implements Vehicle{
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
