function townsToJSON(data) {

    let towns = [];

    for(let i = 1; i < data.length; i++){
        let [townName, latitude, longitude] = data[i]
        .split('|')
        .filter((el) => el.length !== 0)
        .map((el) => el.trim());
        towns.push({
            Town: townName,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        });
    }
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 23.32601 | 42.696552 |',

'| Beijing | 39.913818 | 116.363625 |'])