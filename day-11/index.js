// En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

// La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

// El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

// Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

// Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

export default function getMinJump(obstacles) {
    debugger
    for (let d = 1; d < 10; d++) {
        let salto;
        for (let n = 1; n < 10; n++) {
            salto = d * n
            if (obstacles.includes(salto) || salto > obstacles[obstacles.length - 1]) {
                break
            }

            console.log(d, n)
        }
    }
}
