function differenceBy(targetValues, compareValues, iteratee) {
    const diffValues = [];

    //compareValues: [2.3, 3.4]
    const processedCompareValues = compareValues.map(v => {
        return iteratee(v);
    });

    //targetValues: [2.1, 1.2]
    for (let i = 0; i < targetValues.length; i++) {
        const target = targetValues[i];
        const processedTarget = iteratee(target);

        // processedCompareValues: [2, 3]
        // processedTarget: 2, 1
        if (!processedCompareValues.includes(processedTarget)) {
            diffValues.push(target);
        }
    }

    // diffValues: [1.2]
    return diffValues;
}

const targetNumbers = [2.1, 1.2];
const compareNumbers = [2.3, 3.4];

const result = differenceBy(targetNumbers, compareNumbers, (v) => {
    return Math.floor(v);
});
console.log(result)
// => [1.2]

console.log(targetNumbers);
// => [2.1, 1.2]

//第一引数の元の配列と第二引数の配列を比較して第二引数に含まれていない第一引数の値を新しい配列をして生成
//この際に、Math.floorをして整数による比較を行う
