// ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

// Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles.Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

// Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta.También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

// Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

export default function checkSledJump(heights) {
    const length = heights.length
    let top

    for (let i = 0; i < length - 1; i++) {
        if (heights[i] >= heights[i + 1]) {
            top = i
            break
        }
    }

    if (!top) return false

    for (let i = top; i < length - 1; i++) {
        if (heights[top] < heights[i + 1] || heights[i] < heights[i + 1]) {
            return false
        }
    }

    return true
}