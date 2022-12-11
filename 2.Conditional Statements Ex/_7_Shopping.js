function shopping(input) {

    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardPrice = 250;
    let videocardTotal = videocardPrice * videocards;
    
    let processorPrice = videocardTotal * 0.35;
    let processorTotal = processorPrice * processors;
    
    let ramPrice = videocardTotal * 0.1;
    let ramTotal = ramPrice * ram;

    let total = ramTotal + processorTotal + videocardTotal;

    if (videocards > processors) {
        total *= 0.85;
    }
    if (budget >= total) {
        let left = budget - total;
        console.log("You have " + `${left}` + " leva left!")
    } else {
        let needed = total - budget;
        console.log("Not enough money! You need " 
        + `${needed}` + " leva more!")
    }
}

shopping(["900",
"2",
"1",
"3"])
