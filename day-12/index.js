// Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

// Mi cine favorito tiene dos posibilidades:

// • Entrada de un sólo uso: Cuesta 12$ por cada película.

// • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.

//Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

export default function shouldBuyFidelity(times) {
    const TICKET = 12,
        CARD = 250,
        DISCOUNT = 0.75
    const normal = TICKET * times
    //FÓRMULA: Suma de una sucesión geométrica
    //S(n) = a_1*((r^n)-1)/(r-1), donde a_1=12*0.75, r = 0.75 y n=times
    const fidelityCard = CARD + (TICKET * DISCOUNT * (DISCOUNT ** times - 1)) / (DISCOUNT - 1)
    return fidelityCard < normal
}