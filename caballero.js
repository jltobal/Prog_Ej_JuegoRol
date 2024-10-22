"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caballero = void 0;
var personaje_1 = require("./personaje");
var Caballero = /** @class */ (function (_super) {
    __extends(Caballero, _super);
    function Caballero(nombre, nivel, puntosVida, puntosAtaque, escudo) {
        var _this = _super.call(this, nombre, nivel, puntosVida, puntosAtaque) || this;
        _this.escudo = escudo;
        return _this;
    }
    Caballero.prototype.setEscudo = function (escudo) {
        this.escudo = escudo;
    };
    Caballero.prototype.getEscudo = function () {
        return this.escudo;
    };
    Caballero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " realiza un golpe de espada!"));
    };
    Caballero.prototype.defender = function (ataqueRecibido) {
        this.puntosVida += this.escudo;
        this.puntosVida -= (ataqueRecibido - (this.nivel * (0.6)));
        console.log("".concat(this.nombre, " recibe un ataque. Su vida es de ").concat(this.puntosVida));
    };
    ;
    Caballero.prototype.subirNivel = function () {
        this.nivel += 1;
        this.puntosVida += 20;
        this.puntosAtaque += 30;
        console.log("".concat(this.nombre, " ha subido de nivel!"));
        this.obtenerInformacion();
    };
    ;
    return Caballero;
}(personaje_1.Personaje));
exports.Caballero = Caballero;
