function zooshop (input) {
    let dogfood = 2.5;
    let catfood = 4;
    
    let dogCnt = input[0];
    let catCnt = input[1];

    let sum = dogfood * dogCnt + catfood * catCnt;
    console.log(`${sum} lv.`);
}