function priceCalculator(input) {

    let pricePerSq = 7.61;
    let discountInPercent = 0.18;

    let sqMeteres = input[0];
    let total = sqMeteres * pricePerSq;

    let totalWithDiscount = total - total * discountInPercent;
    let discount = total - totalWithDiscount;

    console.log(`The final price is: ${totalWithDiscount.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
//priceCalculator(["550"]);