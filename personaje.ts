
export abstract class Personaje {

    protected nombre:string;
    protected nivel:number;
    protected puntosVida:number;
    protected puntosAtaque:number;

    constructor(nombre:string, nivel:number, puntosVida:number, puntosAtaque:number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosVida = puntosVida;
        this.puntosAtaque = puntosAtaque;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setNivel(nivel:number){
        this.nivel = nivel;
    }
    setPuntosVida(puntosVida:number){
        this.puntosVida = puntosVida;
    }
    setPuntosAtaque(puntosAtaque:number){
        this.puntosAtaque = puntosAtaque;
    }

    getNombre(){
        return this.nombre;
    }
    getNivel(){
        return this.nivel;
    }
    getPuntosVida(){
        return this.puntosVida;
    }
    getPuntosAtaque(){
        return this.puntosAtaque;
    }

    abstract atacar(): void;
    abstract defender(ataqueRecibido: number): void;
    abstract subirNivel(): void;


    obtenerInformacion():string{
        return `${this.nombre} - Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosVida}`;
    }

}