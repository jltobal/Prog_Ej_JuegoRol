import { Personaje } from "./personaje";

export class Elfo extends Personaje{
    protected daga:number;

    constructor(nombre:string, nivel:number, puntosVida:number, puntosAtaque:number, daga:number){
        super(nombre, nivel, puntosVida, puntosAtaque);
        this.daga = daga;
    }

    setDaga(daga:number){
        this.daga = daga;
    }
    getDaga(){
        return this.daga;
    }
    
    atacar() {
        this.puntosAtaque += this.daga;
        console.log(`${this.nombre} realiza un golpe de daga!`);
        this.puntosAtaque -= this.daga;
    }
    
    defender(ataqueRecibido:number){
        this.puntosVida -= (ataqueRecibido - (this.nivel * (0.3))); 
        console.log(`${this.nombre} recibe un ataque. Su vida es de ${this.puntosVida}`);
    };
    
    subirNivel(){
        this.nivel += 1;
        this.puntosVida += 25;
        this.puntosAtaque += 25;
        console.log(`${this.nombre} ha subido de nivel!`)
        this.obtenerInformacion();

    };
    }