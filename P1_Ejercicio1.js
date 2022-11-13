//Ejercicio 1
class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
    atacar() {
        console.log(`${this.nombre} ataca a un pájaro y le causa ${this.potencia} puntos de daño`);
    }
}

let zombie = new Zombi('Zombie', 150, 30);




class Jugador {
    constructor(nombreJuga, ocupacionJuga, puntosJuga, faccionJuga){
        this.nombreJuga = nombreJuga;
        this.ocupacionJuga = ocupacionJuga;
        this.puntosJuga = puntosJuga;
        this.faccionJuga = faccionJuga;
        this.maxVida = 100;
    }

    toString(){
        console.log(`${this.nombreJuga} es ${this.ocupacionJuga} tiene ${this.puntosJuga} puntos de vida y es ${this.faccionJuga}`)
    }
}

let jugador1 = new Jugador('Miguel', 'defensa', 100, 'verde');
let jugador2 = new Jugador('Ana', 'atacante', 90, 'rojo');

jugador1.toString();
jugador2.toString();

let listaJugadores = [jugador1, jugador2];

listaJugadores.toString();

