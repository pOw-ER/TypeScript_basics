var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: " + point.x + " Y: " + point.y + " konumuna ilerliyor");
    };
    return Taxi;
}());
var taxi_1 = Taxi = new Taxi({ x: 2, y: 5 }, 'red'); // color constructorundan sonra buraya da color girmeliyiz aksi halde hata aliriz. ancak colorun contructor da yazarken ? isareti koyarsak girmesek te hata almayiz olsa da olue olmasa da olur  manaisina gelir.
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.currentLocation = {x: 2, y: 5}; // constructor olusturdugumuzda bilgi direk new Taxi () deki parantezler icine girilir.
// console.log(taxi_1.currentLocation.x);
// console.log(taxi_1.currentLocation.y);
console.log(taxi_1.currentLocation); // artik burda hata vermez cünkü constructor olusturduk
