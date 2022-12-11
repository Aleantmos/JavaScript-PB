function cost(input) {

    let budget = Number(input[0]);
    let castCnt = Number(input[1]);
    let castClothing = Number(input[2]);

    let decor = 0.1 * budget;

    if (castCnt > 150) {
        castClothing *= 0.1;
    } 

    let cost = castCnt * castClothing + decor;

    if (budget - cost < 0) {
        let needed = cost - budget;
        console.log("Not enough money!");
        console.log("Wingard needs " + `${needed}` + " leva more.")
    } else {
        let left = budget - cost;
        console.log("Action!");
        console.log("Wingard starts filming with " + `${left.toFixed(2)}` + " leva left.")
    }
}

cost (["20000",
"120",
"55.5"])
