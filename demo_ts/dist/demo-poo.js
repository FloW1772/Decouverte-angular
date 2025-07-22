var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicule = /** @class */ (function () {
    function Vehicule(label) {
        this.label = label;
    }
    return Vehicule;
}());
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Voiture.prototype.rouler = function () {
        console.log('Vroooooom Vrooooooooooom');
    };
    return Voiture;
}(Vehicule));
//Instancier une voiture
var vroom = new Voiture('Clio 2');
vroom.rouler();
