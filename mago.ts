import { Personaje } from "./personaje";

export class Mago extends Personaje{
    protected baculo: number;

    constructor(nombre:string, nivel:number, puntosVida:number, puntosAtaque:number, baculo: number){
        super(nombre, nivel, puntosVida, puntosAtaque);
        this.baculo = baculo;
    }
    
    setBaculo(baculo: number){
        this.baculo = baculo;
    }
    getBaculo(){
        return this.baculo;
    }

    atacar() {
        this.puntosAtaque += this.baculo;
        console.log(`${this.nombre} lanza una bola de poder!`);
        this.puntosAtaque -= this.baculo;

    }
    
    defender(ataqueRecibido:number){
        this.puntosVida += this.baculo;
        this.puntosVida -= (ataqueRecibido - (this.nivel * (0.2))); 
        console.log(`${this.nombre} recibe un ataque. Su vida es de ${this.puntosVida}`);
        this.puntosVida -= this.baculo;

    };
    
    subirNivel(){
        this.nivel += 1;
        this.puntosVida += 10;
        this.puntosAtaque += 40;
        console.log(`${this.nombre} ha subido de nivel!`)
        this.obtenerInformacion();
    };
    }