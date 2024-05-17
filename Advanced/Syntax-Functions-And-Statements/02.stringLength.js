function length (one, two, three){
    let total = (one + two + three).length;
    let avg = Math.floor(total / 3);
    console.log(total);
    console.log(avg);
}
length('chocolate', 'ice cream', 'cake')