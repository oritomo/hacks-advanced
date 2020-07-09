function intersectionWith(...arraysWithComparatorAtLast) {
    // pop前
    // arraysWithComparatorAtLast
    // ↓
    // [
    //   objects,
    //   others1,
    //   others2,
    //   (a, b) => {
    //     return a.x === b.x && a.y === b.y;
    //   }
    // ]
    const comparator = arraysWithComparatorAtLast.pop();
    // pop前
    // arraysWithComparatorAtLast
    // ↓
    // [
    //   objects,
    //   others1,
    //   others2,
    // ]
    // comparator:
    // ↓
    // (a, b) => {
    //   return a.x === b.x && a.y === b.y;
    // }
    const arrays = arraysWithComparatorAtLast;
    const headArray = arrays.shift();
    const intersectedValues = [];

    // headArray:
    // [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
    for (let i = 0; i < headArray.length; i++) {
        const targetValue = headArray[i];
        let isIntersected = true;

        // arrays:
        // [
        //   others1, // [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
        //   others2, // [{ 'x': 1, 'y': 2 }, { 'x': 10, 'y': 20 }]
        // ]
        for (let j = 0; j < arrays.length; j++) {
            const compareArray = arrays[j];
            const hasIntersectedValue = compareArray.some(compareValue => {
                // 1回目のとき
                // targetValue: { 'x': 1, 'y': 2 }
                // compareValue: { 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }
                return comparator(targetValue, compareValue);
            });
            if (!hasIntersectedValue) {
                isIntersected = false;
                break;
            }
        }

        if (isIntersected) {
            intersectedValues.push(targetValue);
        }
    }

    return intersectedValues;
}

const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 10, y: 20 }];
const others1 = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 10, y: 20 }];
const others2 = [{ x: 1, y: 2 }, { x: 10, y: 20 }];

const result = intersectionWith(
    objects,
    others1,
    others2,
    (a, b) => {
        return a.x === b.x && a.y === b.y;
    }
);
console.log(result);
  // => [{ 'x': 1, 'y': 2 }, {x: 10, y: 20}]