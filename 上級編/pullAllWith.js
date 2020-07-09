function pullAllWith(array, comparisons, comparator) {

    function hasSameValueInComparisons(arrayElement){
        for (let i = 0; i < comparisons.length; i++) {
            const comparison = comparisons[i];
            if(comparator(arrayElement, comparison)){
                //trueが見つかった瞬間にこのループから抜ける
                return true;
            }
        }

        return false;
    }

    for (let i = array.length - 1; 0 <= i; i--) {
        if(hasSameValueInComparisons(array[i])){
            array.splice(i, 1);
        }
    }
    return array;
}

const array = [
    { 'x': 1, 'y': 2 },
    { 'x': 3, 'y': 4 },
    { 'x': 5, 'y': 6 }
];

const result = pullAllWith(array, [{ 'x': 3, 'y': 4 }], (a, b) => {
    return a.x === b.x && a.y === b.y;
});
console.log('result : ', result);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

console.log('array : ', array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]


//答えを見る前の疑問
//どうやってcomparatorに二つの引数を渡すのか

//見た後
//先にarrayでループを回して別の関数に引数として渡してあげる
//それにより別の関数内でcomparisonsのループを回してcomparatorに格納することに成功
//複雑になればなるほど関数にまとめるなどして扱いやすくするべき