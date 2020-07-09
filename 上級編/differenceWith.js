function differenceWith(targets, comparisons, comparator){
    const diffValues = [];

    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        for (let j = 0; j < comparisons.length; j++) {
            const comparison = comparisons[j];
            if(!comparator(target, comparison)){
                diffValues.push(target);
            }
        }
    }

    return diffValues;
}

const targets = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const comparisons = [{ 'x': 1, 'y': 2 }];

const result = differenceWith(targets, comparisons, function(a, b) {
    return a.x === b.x && a.y === b.y;
});
console.log(result);
// => [{ 'x': 2, 'y': 1 }]

console.log(targets);

//targetsとcomparisonsの比較をcomparatorを通して行う
//comparatorがtrueを返した時は一致した時=>一致してないものを返したいのでif(!comparator(target, comparison))という条件分岐になる