function processOddPositions(array) {
    result = [];

    for(let i = 0; i < array.length; i++){
        let element = array[i];
        if(i % 2 !== 0){
            result.push(element * 2)
        }
    }
    console.log(result.reverse().join(' '));
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])