function projectHours(input) {
    let name = input[0];
    let projectsCnt = input[1];
    let hoursToComplete = projectsCnt * 3;

    console.log(`The architect ${name} will need ${hoursToComplete} hours to complete ${projectsCnt} project/s.`);

}