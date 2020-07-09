function flattenDeep(array) {
    const flattenArray = [];

    // array : [1, [2, [3, [4]], 5]]
    // 1
    // [2, [3, [4]], 5]

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (Array.isArray(value)) {
            flattenArray.push(...flattenDeep(value))
        } else {
            flattenArray.push(value);
        }
    }
    
    return flattenArray;
}

const numbers = [1, [2, [3, [4]], 5]];
const flattenedNumbers = flattenDeep(numbers);

console.log(flattenedNumbers);
// => [1, 2, 3, 4, 5]

console.log(JSON.stringify(numbers));
// => [1, [2, [3, [4]], 5]]

//再帰関数で遊ぼう
//