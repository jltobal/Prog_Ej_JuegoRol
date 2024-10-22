"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosVida, puntosAtaque) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosVida = puntosVida;
        this.puntosAtaque = puntosAtaque;
    }
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.setPuntosVida = function (puntosVida) {
        this.puntosVida = puntosVida;
    };
    Personaje.prototype.setPuntosAtaque = function (puntosAtaque) {
        this.puntosAtaque = puntosAtaque;
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getPuntosVida = function () {
        return this.puntosVida;
    };
    Personaje.prototype.getPuntosAtaque = function () {
        return this.puntosAtaque;
    };
    Personaje.prototype.obtenerInformacion = function () {
        return "".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos de Vida: ").concat(this.puntosVida);
    };
    return Personaje;
}());
exports.Personaje = Personaje;
