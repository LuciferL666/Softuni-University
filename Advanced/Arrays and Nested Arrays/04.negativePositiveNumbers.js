function negativePositiveNumbers(array) {
    let result = [];
    
    for (const element of array) {
        if(element < 0){
            result.unshift(element);
        }else{
            result.push(element);
        }
    }
    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])