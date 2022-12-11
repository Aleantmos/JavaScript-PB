function lunchBreak(input) {

    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let leisureDuration = breakDuration / 4;
    let lunchbreakDuration = breakDuration / 8;
    
    let totalTime = (leisureDuration + lunchbreakDuration); 
    let timeLeft = breakDuration - totalTime;

    if (timeLeft >= episodeDuration) {
        let left = timeLeft - episodeDuration;
        console.log("You have enough time to watch" + `${seriesName}` + " and left with " + Math.round(`${left.ro}`) + " minutes free time.")
    } else {
        let needed = episodeDuration - timeLeft;
        console.log("You don't have enough time to watch" + `${seriesName}` + ", you need " + Math.round(`${needed}`) + " more minutes.")
    }
} 
lunchBreak(["Teen Wolf",
"48",
"60"])


