function sortingNumbers(arrOfNumbers){
    let result = [];
    arrOfNumbers.sort((a, b) => a - b);
        while (arrOfNumbers.length !== 0) {
            result.push(arrOfNumbers.shift())
            result.push(arrOfNumbers.pop())
        }
        //console.log(result);
        return result
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])