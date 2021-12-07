// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

export default function contains(store, product) {

    const queue = [store]

    while (!!queue.length) {

        const currentProduct = queue.shift()

        if (typeof currentProduct === "object") {

            for (let item in currentProduct) {

                queue.push(currentProduct[item])
            }

        } else {

            if (currentProduct === product) return true
        }
    }

    return false
}