// Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

// Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null

export default function learn(time, courses) {
    const length = courses.length
    let posibleResult = []
    let max = 0

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {

            const sum = courses[i] + courses[j]

            if (sum === time) {
                return [i, j]
            } else if (sum < time && sum > max) {
                posibleResult = [i, j]
                max = sum
            }
        }
    }
    return posibleResult.length ? posibleResult : null
}