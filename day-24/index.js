export default function checkIsSameTree(treeA, treeB) {
    let isSame = true
    let { value: valueA, left: leftA, right: rightA } = treeA
    let { value: valueB, left: leftB, right: rightB } = treeB

    if (valueA !== valueB) return false

    if (leftA !== null && leftB !== null) {
        isSame = checkIsSameTree(leftA, leftB)
    }


    if (rightA !== null && rightB !== null) {
        isSame = checkIsSameTree(rightA, rightB)
    }

    return isSame
}