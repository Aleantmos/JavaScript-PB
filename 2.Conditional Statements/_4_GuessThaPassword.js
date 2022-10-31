function Password(input) {
    let password = "s3cr3t!P@ssw0rd";

    let data = input[0];

    if (data == password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password");
    }
}
