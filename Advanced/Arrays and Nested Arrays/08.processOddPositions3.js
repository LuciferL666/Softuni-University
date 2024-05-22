function processOddPositions(array) {
    const filtered =  array.filter((e, i) => i % 2 == 1);

    const doubled = filtered.map(e => e * 2);

    console.log(doubled.reverse().join(' '));
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])