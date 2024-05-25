function solve (arr) {
    let res = [];
    let biggest = 0;


    for (const el of arr) {
        if(el >= biggest){
            res.push(el)
            biggest = el
        }
    }
    return res
    // console.log(res.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])