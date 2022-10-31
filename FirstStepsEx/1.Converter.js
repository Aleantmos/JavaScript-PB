function converter(input) {
    let exchangeRatio = 1.79549;
    let number = input[0];
    let numInLev =  number * exchangeRatio;

    console.log(`${numInLev}`);
}