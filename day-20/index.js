// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

// Vamos a ver unos ejemplos de frases:

// pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
// pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

// pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
// pangram('De la a a la z, nos faltan letras') // false

export default function pangram(letter) {
    const letterFiltered = letter
        .toLowerCase()
        .replaceAll("ñ", 1)
        .replace(/[\u00E0-\u00FC]/g, "")
        .replaceAll(1, 'ñ')
    const alphabet = 'abcdefghijklmnopqrstuvwxyzñ';
    const regex = /[a-zñ]/g
    const match = letterFiltered.match(regex)
    const chars = [...new Set(match)].sort().join("")
    return chars === alphabet
}