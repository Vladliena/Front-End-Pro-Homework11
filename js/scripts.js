function removeElement(array, item) {
    const finalArray = []
    const arrayIndex = array.indexOf(item)
    if (arrayIndex !== -1) {
        array.splice(arrayIndex, 1)
    }
    return finalArray.concat(array)
}

console.log(removeElement([1, 2, 3, 4, 5, 6, 7,],5))