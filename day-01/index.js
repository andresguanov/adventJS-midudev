// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que su nombre contenga las letras n y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' }
]

const contarOvejas = (ovejas) => {
    ovejas = ovejas.filter(oveja => (
        oveja.color === "rojo"
        && oveja.name.toLowerCase().includes('a')
        && oveja.name.toLowerCase().includes('n')
    ))

    return ovejas
}

contarOvejas(ovejas)