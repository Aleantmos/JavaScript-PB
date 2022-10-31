function Grade(input) {

    let grade = Number(input[0]);

    if(grade >= 5.5) {
        console.log("Excellent!");
    } else {
        console.log("Something less excellent");
    }
}

Grade((["6"]));