//Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

// Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

//El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

// ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -):

function daysToXmas(date) {
    const xmas = new Date("Dec 25, 2021")

    return Math.ceil((xmas - date) / (3_600_000 * 24))
} 