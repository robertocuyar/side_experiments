let positiveBlue = "You like blue.";

let negativeBlue = "You don't like blue.";
let positiveRed = "You like red.";

let negativeRed = "You don't like red.";
let confirmRed = function() {
    let response2 = confirm("Do you like Red?");
    if (response2) {
        return document.getElementById("blue").innerHTML = positiveRed
    } else {
        document.getElementById("blue").innerHTML = negativeRed
    }
}

let confirmBlue = function(){
    let response = confirm("Do you like Blue?");
    if(response) { document.getElementById("red").innerHTML = positiveBlue}
    else {document.getElementById("red").innerHTML = negativeBlue}
    confirmRed();
}
confirmBlue();

