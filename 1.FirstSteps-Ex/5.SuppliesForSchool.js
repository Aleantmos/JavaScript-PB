function calculatePriceForSupplise(input) {

    let penStackPrice =  5.8;
    let markerStackPrice = 7.2;
    let detergentPricePerLiter = 1.2;

    let pensStackCnt = Number(input[0]); 
    let markersStackCnt = Number(input[1]);
    let detergentQuantity = Number(input[2]);

    let discount = Number(input[3]) / 100;

    let totalPens = penStackPrice * pensStackCnt;
    let totalMarkers = markerStackPrice * markersStackCnt;
    let totalDetergent = detergentPricePerLiter * detergentQuantity;

    let total = totalPens + totalMarkers + totalDetergent;
    let totalWithDiscount = total * (1 - discount);

    console.log(totalWithDiscount);
} 
calculatePriceForSupplise(["4 ",
"2 ",
"5 ",
"13 "]
);