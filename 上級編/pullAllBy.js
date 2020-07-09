function pullAllBy(array, values, iteratee) {
    const iterateValues = values.map(value=>{
        return iteratee(value);
    });
    //console.log(iterateValues); //1,3
    for (let i = array.length - 1; 0 <= i; i--) {
        const iteratedTarget = iteratee(array[i]);
        //console.log(iteratedTarget);
        
        if(iterateValues.includes(iteratedTarget)){
            array.splice(i, 1);
        }
    }
    return array;
}

const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

const result = pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], (obj) => {
    return obj.x;
});
console.log('result : ', result);
// => [{ 'x': 2 }]

console.log('array : ', array);
// => [{ 'x': 2 }]

//第一引数と第二引数で共通している箇所があれば排除