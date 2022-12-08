function repainting(input) {

    let naylonPrice = 1.5;
    let paintPrice = 14.50;
    let paintMixPrice = 5;

    let naylonQuantity = Number(input[0]);
    naylonQuantity = naylonQuantity + 2;
    let paintQuantity = Number(input[1]);
    paintQuantity = paintQuantity * 1.1;
    let paintMixQuantity = Number(input[2]);
    let workerHours = Number(input[3]);


    let nylonBagsPrice = 0.4;

    let totalMaterials = naylonPrice * naylonQuantity 
    + paintPrice * paintQuantity
    + paintMixPrice * paintMixQuantity + nylonBagsPrice;

    let workPerHourPrice = 0.3 * totalMaterials;
    let totalWork = workPerHourPrice * workerHours;

    let total = totalWork + totalMaterials;

    console.log(`${total}`);
}
repainting (["10",
"11",
"4",
"8"]
)