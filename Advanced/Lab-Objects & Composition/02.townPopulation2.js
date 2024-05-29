function townPop(list) {
    result = {};

    for(let town of list){
        const [name, population] = town.split(' <-> ');

        if(!result[name]){
            result[name] = Number(population)
        }else{
            result[name] += Number(population)
        }
    }
    for(let town in result){
        console.log(`${town} : ${result[town]}`);
    }
}
townPop(
['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])