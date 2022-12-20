function removeElement(array, item) {
    const finalArray = []
    let arrayIndex = array.indexOf(item)
    if (arrayIndex !== -1) {
        array.splice(arrayIndex, 1)
        Array.prototype.push.apply(finalArray,array)
    }
    return finalArray
    // вместо Array.prototype.push.apply(finalArray,array) можно написать return finalArray.concat(array)
}

console.log(removeElement([1, 2, 3, 4, 5, 6, 7,],5))