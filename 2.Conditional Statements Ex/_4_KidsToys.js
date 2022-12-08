function Store(input) {

    let pricePuzzle = 2.6;
    let priceTalkinDoll = 3;
    let priceBear = 4.1;
    let priceMinion = 8.2;
    let priceTruck = 2;

    let tripPrice = Number(input[0])

    let puzzleCnt = Number(input[1]);
    let talkingDollCnt = Number(input[2]);
    let bearCnt = Number(input[3]);
    let minionCnt = Number(input[4]);
    let truckCnt = Number(input[5]);

    let orderCnt = puzzleCnt + talkingDollCnt + bearCnt + minionCnt + truckCnt;
    
    let discountPercent = 0;

    let profit = pricePuzzle * puzzleCnt + 
    priceTalkinDoll * talkingDollCnt + 
    priceBear * bearCnt + 
    priceMinion * minionCnt + 
    priceTruck * truckCnt;

    if (orderCnt >= 50) {
        discountPercent = 0.25;
    } 

    let discount = discountPercent * profit

    profit -= discount

    let rent = 0.1 * profit;

    let win = profit - rent;

    if (win >= tripPrice) {
        let rest = win - tripPrice;
        console.log("Yes! " +  `${rest}` + "lv left.")
    } else{
        let needed = tripPrice - win;
        console.log("Not enough money! " + `${needed}` +" lv needed.")
    }
}

Store(["40.8",
"20",
"25",
"30",
"50",
"10"])
