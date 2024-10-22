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
exports.Elfo = void 0;
var personaje_1 = require("./personaje");
var Elfo = /** @class */ (function (_super) {
    __extends(Elfo, _super);
    function Elfo(nombre, nivel, puntosVida, puntosAtaque, daga) {
        var _this = _super.call(this, nombre, nivel, puntosVida, puntosAtaque) || this;
        _this.daga = daga;
        return _this;
    }
    Elfo.prototype.setDaga = function (daga) {
        this.daga = daga;
    };
    Elfo.prototype.getDaga = function () {
        return this.daga;
    };
    Elfo.prototype.atacar = function () {
        this.puntosAtaque += this.daga;
        console.log("".concat(this.nombre, " realiza un golpe de daga!"));
        this.puntosAtaque -= this.daga;
    };
    Elfo.prototype.defender = function (ataqueRecibido) {
        this.puntosVida -= (ataqueRecibido - (this.nivel * (0.3)));
        console.log("".concat(this.nombre, " recibe un ataque. Su vida es de ").concat(this.puntosVida));
    };
    ;
    Elfo.prototype.subirNivel = function () {
        this.nivel += 1;
        this.puntosVida += 25;
        this.puntosAtaque += 25;
        console.log("".concat(this.nombre, " ha subido de nivel!"));
        this.obtenerInformacion();
    };
    ;
    return Elfo;
}(personaje_1.Personaje));
exports.Elfo = Elfo;
