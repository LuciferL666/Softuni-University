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
    for(let [name, population] of Object.entries(result)){
        console.log(`${name} : ${population}`);
    }
}
townPop(
['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Sofia <-> 120'])