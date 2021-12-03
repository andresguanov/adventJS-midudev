// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes[dentro de los paréntesis que hacen que no sean válidas.Por suerte sólo los ha dejado en medio de los paréntesis...

//Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!


//const carta = "bici ((h)) bici coche "

function isValid(letter) {
    const chars = letter.split("")
    if (chars.some(char => char.includes("{"))) return false
    if (chars.some(char => char.includes("["))) return false

    const openParentesis = chars.filter(char => char.includes("("))
    const closeParentesis = chars.filter(char => char.includes(")"))
    if (openParentesis.length === closeParentesis.length) {
        const gifts = letter.split(" ")
        const giftsWithParentesis = gifts.filter(gift => (
            !!gift && gift.includes("(") && gift.includes(")")
        ))
        const validGifts = giftsWithParentesis.join("").replaceAll("(", "").replaceAll(")", "")
        if (!validGifts) return false

    } else {
        return false
    }

    return true
}

//isValid(carta)

