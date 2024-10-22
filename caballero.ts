import { Personaje } from "./personaje";

export class Caballero extends Personaje{
    protected escudo:number;

constructor(nombre:string, nivel:number, puntosVida:number, puntosAtaque:number,escudo:number ){
    super(nombre, nivel, puntosVida, puntosAtaque);
    this.escudo = escudo;
}

setEscudo(escudo:number){
    this.escudo = escudo;
}
getEscudo(){
    return this.escudo;
}

atacar() {
    console.log(`${this.nombre} realiza un golpe de espada!`);
}

defender(ataqueRecibido:number){
    this.puntosVida += this.escudo
    this.puntosVida -= (ataqueRecibido - (this.nivel * (0.6))); 
    console.log(`${this.nombre} recibe un ataque. Su vida es de ${this.puntosVida}`);
};

subirNivel(){
    this.nivel += 1;
    this.puntosVida += 20;
    this.puntosAtaque += 30;
    console.log(`${this.nombre} ha subido de nivel!`)
    this.obtenerInformacion();
};
}