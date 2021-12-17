// Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100
// Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

export default function decodeNumbers(symbols) {
    symbols = symbols.split("")
    const VALUES = {
        ".": 1,
        ",": 5,
        ":": 10,
        ";": 50,
        "!": 100,
    }

    return symbols.reduce((acum, item, index) => {
        const next = symbols[index + 1]
        if (VALUES[next] > VALUES[item]) {
            return acum - VALUES[item]
        } else {
            return acum + VALUES[item]
        }
    }, 0)
}