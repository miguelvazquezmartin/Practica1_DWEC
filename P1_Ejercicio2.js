//Ejercicio 2
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

class Abominacion extends Zombi {

    ataqueMultiple() {
        this.potencia = this.potencia * 3;
        console.log(`${this.nombre} ataca a un mapache y le causa ${this.potencia} puntos de daño ya que atacó 3 veces consecutivas`);
    }
}

let abominacion = new Abominacion('Abominación', 300, 60);

zombie.atacar();

abominacion.ataqueMultiple();

