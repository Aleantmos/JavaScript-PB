function foodDelivery(input) {

    let chickenMenu = 10.35;
    let fishMenu = 12.4;
    let vegeterianMenu = 8.15;

    let chickenMenuCnt = Number(input[0]);
    let fishMenuCnt = Number(input[1]);
    let vegeterianMenuCnt = Number(input[2]);

    let deliveryFee = 2.5;

    let totalWithoutDessertAndFees = chickenMenu * chickenMenuCnt +
    fishMenu * fishMenuCnt +
    vegeterianMenu * vegeterianMenuCnt;
    
    let totalDessert = totalWithoutDessertAndFees * 0.2;

    let total = totalWithoutDessertAndFees + totalDessert + deliveryFee;
    
    console.log(`${total}`);
}