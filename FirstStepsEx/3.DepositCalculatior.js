function depositCalculator(input) {

    let deposit = Number(input[0]);
    let duritation = Number(input[1]);
    let percent = Number(input[2]);

    let returnPerAnum = deposit * percent / 100;
    let returnPerMonth = returnPerAnum / 12;

    let total = deposit + duritation * returnPerMonth;

    console.log(`${total}`);
}
depositCalculator(["2350", "6", "7"]);