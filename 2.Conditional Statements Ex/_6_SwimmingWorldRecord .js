function checkRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let metersInSeconds = Number(input[2]);

    let resistanceInSeconds = (distance / 15) * 12.5;
    
    let totalTime = metersInSeconds * distance + resistanceInSeconds;

    if (totalTime < record) {
        console.log("Yes, he succeeded! The new world record is " + `${totalTime}` 
        + " seconds.")
    } else {
        let diff = totalTime - record;
        console.log("No, he failed! He was " + `${diff.toFixed(2)}` + " seconds slower.")
    }
}
checkRecord (["10464",
"1500",
"20"])
