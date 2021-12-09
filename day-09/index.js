// En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

// Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

// Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

// La dificultad del reto está más en comprender la función que en la implementación.

export default function groupBy(collection, it) {
    let object = {};

    if (typeof it === 'function') {
        collection.forEach(el => {
            const processed = it(el)
            fillObject(object, processed, el)
        })

    } else {
        collection.forEach(el => {
            const processed = el[it]
            fillObject(object, processed, el)
        })
    }
    return object
}

const fillObject = (obj, newItem, item) => {
    if (obj[newItem]) {
        obj[newItem].push(item)

    } else {
        obj[newItem] = [item]
    }
}