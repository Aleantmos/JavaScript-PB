function Aquarium(input) {

    let length = Number(input[0]) / 10;
    let width = Number(input[1]) / 10;
    let heigth = Number(input[2]) / 10;

    //percent
    let filledSpace = input[3] / 100;

    let totalInDecimeter = (length * width * heigth);

    let totalFreeSpace = totalInDecimeter*(1 - filledSpace);

    console.log(`${totalFreeSpace}`);
}

Aquarium(["85", "75", "47", "17"])