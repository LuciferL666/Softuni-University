function smallestTwoNumbers (array){
    result = array.sort((a,b) => a - b);
    result.splice(2, array.length)
    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])