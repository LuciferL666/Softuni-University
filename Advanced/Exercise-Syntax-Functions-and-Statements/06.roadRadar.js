function radar (speed, area){
    
    let limit = 0;
    let status = "";

    if(area === 'motorway'){
        limit = 130;
        if(speed - limit <= 0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if(speed - limit <= 20){
            status = "speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if(speed - limit <= 40){
            status = "excessive speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else {
            status = "reckless driving";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }else if(area === 'interstate'){
        limit = 90;
        if(speed - limit <= 0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if(speed - limit <= 20){
            status = "speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if(speed - limit <= 40){
            status = "excessive speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else {
            status = "reckless driving";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }else if(area === 'city'){
        limit = 50;
        if(speed - limit <= 0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if(speed - limit <= 20){
            status = "speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if(speed - limit <= 40){
            status = "excessive speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else {
            status = "reckless driving";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }else if(area === 'residential'){
        limit = 20;
        if(speed - limit <= 0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if(speed - limit <= 20){
            status = "speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if(speed - limit <= 40){
            status = "excessive speeding";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else {
            status = "reckless driving";
            console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}

radar(40, "city");
radar(21, "residential");
radar(120, "interstate");
radar(200, "motorway");