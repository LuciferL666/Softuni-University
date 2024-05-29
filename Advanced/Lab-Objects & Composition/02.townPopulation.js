function townPop(list) {
    result = {};

    for(let town of list){
        const token = town.split(' <-> ');
        const name = token[0]
        const population = Number(token[1])

        if(!result[name]){
            result[name] = population
        }else{
            result[name] += population 
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
'Las Vegas <-> 1000000'] )