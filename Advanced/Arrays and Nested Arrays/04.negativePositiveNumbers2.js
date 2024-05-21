function negativePositiveNumbers(array) {
    let result = [];
    
    array.forEach(num => num < 0 ? result.unshift(num) : result.push(num));
    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])