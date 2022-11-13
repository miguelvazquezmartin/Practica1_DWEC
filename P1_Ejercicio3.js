//Ejercicio 3

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
    }
    
    let manzana = new Consumible('Manzana');
    
    let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
    }
    
    ricardo.consumir(manzana);
    
    class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
        this.maxPuntosVida = 10;
        this.puntosVida = ricardo.puntosVida;
    }
    
    consumir(jugador) {
        if((this.poder + jugador.puntosVida) > jugador.maxPuntosVida){
            jugador.puntosVida = jugador.maxPuntosVida;
        }else{
            this.puntosVida = this.poder + this.puntosVida; 
        }
        console.log(jugador.nombre + " consume " + this.nombre + " y recupero " + this.poder + " puntos de vida.");
    }
    }
    
    let plantaCurativa = new PlantaCurativa('Hierva');
    
    ricardo.consumir(plantaCurativa);
    
    