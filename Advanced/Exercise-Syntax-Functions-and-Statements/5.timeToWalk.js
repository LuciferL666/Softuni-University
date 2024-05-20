function waking (steps, footprint, speed) {
    let distance = steps * footprint
    let speedMeterSeconds = speed / 3.6
    let time = distance / speedMeterSeconds
    let rest = Math.floor(distance / 500)

    let timeHours = Math.floor(time / 3600)
    let timeMin = Math.floor(time / 60)
    let timeSecounds = Math.round(time - timeMin * 60)

    console.log(
        (timeHours < 10 ? "0" : "") +
        timeHours + ":" +
        (timeMin + rest < 10 ? "0" : "") +
        (timeMin + rest) +
        ":" +
        (timeSecounds < 10 ? "0" : "") +
         timeSecounds);      
}

waking(4000, 0.6, 5);
waking(2564, 0.7, 5.5);