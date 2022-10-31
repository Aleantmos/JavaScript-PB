function CheckNumber(input) {
    let num = Number(input[0]);

    if (num < 100) {
        console.log ("Less than 100");
    } else if (num > 200) {
        console.log("Grater than 100");
    } else{
        console.log("Between 100 and 200");
    }
}