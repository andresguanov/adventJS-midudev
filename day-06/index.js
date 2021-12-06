// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

// La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

// Si no se encuentra, se devuelve null.

export default function sumPairs(numbers, result) {

    for (let i = 0; i < numbers.length; i++) {

        const number1 = numbers[i]
        const numbersRef = [...numbers.slice(0, i), ...numbers.slice(i + 1)]

        for (let j = 0; j < numbersRef.length; j++) {

            const number2 = numbersRef[j]

            if ((number1 + number2) === result) {
                return [number1, number2]
            }

        }
    }

    return null
}

//Other form
export default function sumPairs(numbers, result) {

    const notPar = []

    for (let i = 0; i < numbers.length; i++) {

        if (notPar.includes(numbers[i])) continue

        for (let j = 1; j < numbers.length; j++) {

            if (i === j) continue

            if ((numbers[i] + numbers[j]) === result) {
                return [numbers[i], numbers[j]]
            }

        }
        notPar.push(numbers[i])
    }

    return null
}