function Time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15;

    let newMinutes = totalMinutes % 60;
    let newHours = Math.round(totalMinutes / 60);

    if (newHours >= 24) {
        newHours = 0;
    } 

    if (newHours > 9) {
        if (newMinutes > 9) {
            console.log(`${newHours}:${newMinutes}`)
        } else {
            console.log(`${newHours}:0${newMinutes}`)
        }
    } else {
        if (newMinutes > 9) {
            console.log(`0${newHours}:${newMinutes}`)
        } else {
            console.log(`0${newHours}:0${newMinutes}`)
        }
    }
}
Time(["0", "01"])