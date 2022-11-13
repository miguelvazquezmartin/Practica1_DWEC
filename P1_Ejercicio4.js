//Ejercicio 4
    
let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
    ];
    
    
for (let i of puntuaciones){
    console.log("El jugador" + i.nombre + " tiene " + i.puntuacion + " puntos");
}

jugadoresTop(puntuaciones) 
{
    let mejorPuntuacion = puntuaciones.filter(puntuaciones => puntuaciones.puntuacion >100);
    console.log("Los jugadores que han obtenido las mejores puntuaciones son: ");

    for (let i of mejorPuntuacion){
        console.log("Jugador: " + i.nombre + ", puntuación: " + i.puntuacion);
    }
    return jugadoresTop;
}

jugadoresTop(puntuaciones);