// Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

//La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible.


export default function getCoins(change) {
    const stack = [1, 2, 5, 10, 20, 50]
    const result = Array(6).fill(0)

    while (!!stack.length) {
        const current = stack.pop()
        change -= current

        if (change >= 0) {
            result[stack.length]++
            stack.push(current)
        } else {
            change += current
        }
    }
    return result
}