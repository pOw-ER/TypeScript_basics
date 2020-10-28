var plusNumber = function () {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
    var square = 0;
    for (var i = 0; i < b.length; i++) {
        square *= b[i];
    }
    return square;
};
console.log(plusNumber(1, 2, 3, 4, 5));
