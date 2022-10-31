function BasketballEquipment(input) {

    let sessionPrice = Number(input[0]);
    let sneakers = Number(sessionPrice * 0.6);
    let outfit = Number(sneakers * 0.8);
    let ball = Number(outfit / 4);
    let extras = Number(ball / 5);

    let total = sessionPrice + sneakers +
    + outfit 
    + ball 
    + extras;

    console.log(`${total}`); 
}

BasketballEquipment(["365"]);