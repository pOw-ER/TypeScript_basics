var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: " + point.x + " Y: " + point.y + " konumuna ilerliyor");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: " + point.x + " Y: " + point.y + " konumuna ilerliyor");
    };
    return Bus;
}());
