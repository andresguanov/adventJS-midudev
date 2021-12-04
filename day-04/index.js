// Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.


function createXmasTree(height) {
    const width = 2 * height - 1
    let tree = []

    for (let i = 0; i < height + 2; i++) {
        let row, padding;

        if (i < height) {
            row = "*".repeat(2 * i + 1)
            padding = "_".repeat((width - 2 * i - 1) / 2)

        } else {
            row = "#"
            padding = "_".repeat((width - 1) / 2)
        }

        tree[i] = `${padding}${row}${padding}`


    }
    return tree.join("\n")
}

createXmasTree(5);



