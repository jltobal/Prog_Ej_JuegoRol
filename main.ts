import { Personaje } from "./personaje";
import { Caballero } from "./caballero";
import { Elfo } from "./elfo";
import { Mago } from "./mago";


const nalian = new Caballero("Balian", 1, 80, 20, 5);
const natoroon = new Elfo("Natoroon", 1, 60, 35, 10);
const tervosh = new Mago("Tervosh", 1, 40, 45, 20);

console.log(nalian.obtenerInformacion());
console.log(natoroon.obtenerInformacion());
console.log(tervosh.obtenerInformacion());

nalian.atacar;
nalian.defender(12);
nalian.subirNivel;

natoroon.atacar;
natoroon.defender(12);
natoroon.subirNivel;

tervosh.atacar;
tervosh.defender(12);
tervosh.subirNivel;