function sumFirstLast(array) {
    first = Number(array.shift())
    last = Number(array.pop())
    
    console.log(first + last);
}
sumFirstLast(['20', '30', '40'])