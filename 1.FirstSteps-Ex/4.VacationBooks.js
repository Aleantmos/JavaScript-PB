function calculateHoursNeeded(input) {
    let pages = Number(input[0]);
    let pagesPerHourRead = Number(input[1]);
    let daysForReeding = Number(input[2]);

    let hoursForReadingNeeded = pages / pagesPerHourRead;
    let hoursPerDayReading = hoursForReadingNeeded / daysForReeding;

    console.log(`${hoursPerDayReading}`);
}