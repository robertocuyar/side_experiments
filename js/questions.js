let confirmBlue = function(){
    let response = confirm("Do you like Blue?");
    if(response) { return document.getElementById("blue").innerHTML = positiveBlue()}
    else {return document.getElementById("blue").innerHTML = negativeBlue()}
}
confirmBlue();
let positiveBlue = function(){
    return "You like blue."
}

let negativeBlue = function() {
    return "You don't like blue."
}