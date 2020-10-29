var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: " + this._location.x + " Y: " + this._location.y + " konumundan  X:" + point.x + " Y: " + point.y + " konumuna ilerliyor");
    };
    Object.defineProperty(Taxi.prototype, "location", {
        // asagidaki gibi proprty olusturabilirz. ancak kücük harfli olmali o yüzden diger locationlarimizi _ ile degistiriyoruz.
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('koordinat bilgileri negatif olamaz');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = Taxi = new Taxi({ x: 2, y: 5 }, 'red'); // color constructorundan sonra buraya da color girmeliyiz aksi halde hata aliriz. ancak colorun contructor da yazarken ? isareti koyarsak girmesek te hata almayiz olsa da olue olmasa da olur  manaisina gelir.
taxi_1.travelTo({ x: 1, y: 2 });
var currentLocation = taxi_1.location; // artik location property si olusturduk.
taxi_1.location = { x: 1, y: 9 };
console.log(taxi_1.location);
console.log(currentLocation);
