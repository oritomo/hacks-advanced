function intersectionBy(...arraysWithIterateeAtLast) {
    /**
     * pop前
     * arraysWithIterateeAtLast:
     * [
     *  [2.1, 1.2],
     *  [2.3, 3.4],
     *  [4.4, 2.9],
     *  Math.floor
     * ]
     */

    const iteratee = arraysWithIterateeAtLast.pop();
    /**
     * pop後
     * arraysWithIterateeAtLast:
     * [
     *  [2.1, 1.2],
     *  [2.3, 3.4],
     *  [4.4, 2.9],
     * ]
     * iteratee: Math.floor
     */
    //shiftで配列の最初の要素を取り除く
    const arrays = arraysWithIterateeAtLast;
    const headArray = arrays.shift();
    /**
     * shift後
     * arrays:
     * [
     *  [2.3, 3.4],
     *  [4.4, 2.9],
     * ]
     * headArray: [2.1, 1.2]
     * iteratee: Math.floor
     */
    const iteratedArrays = arrays.map(array=>{
        return array.map(value=>{
            return iteratee(value);
        })
    })
    const intersectionValues = [];

    // headArray : [2.1, 1.2]
    // iteratedArrays: [
    //  [2, 3],
    //  [4, 2],
    // ]

    for (let i = 0; i < headArray.length; i++) {
        const currentValue = headArray[i];
        const iteratedCurrentValues = iteratee(currentValue);
        const isIncludedAll = iteratedArrays.every(array=>{
            return array.includes(iteratedCurrentValues);
        })
        if(isIncludedAll){
            intersectionValues.push(currentValue);
        }
    }
    return intersectionValues;
}

const result = intersectionBy(
    [2.1, 1.2],
    [2.3, 3.4],
    [4.4, 2.9],
    (v)=>{
        return Math.floor(v)
    }
);
console.log(result);
// => [2.1]

/*スプレッド構文で配列を受け取ったときに一番最後にコールバック関数がついている場合、
*popでそのコールバック関数だけ取り除く事ができる
*=>配列だけじゃなくて関数も取り除くこともできる
*/