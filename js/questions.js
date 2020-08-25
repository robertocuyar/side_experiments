"use strict";
let positive = "You like ";
let negative = "You don't like ";

let confirmGreen = function() {
    let response2 = confirm("Do you like Green?");
    if (response2) {
        document.getElementById("green").innerHTML = positive + 'green.';
        return "ff";
    } else {
        document.getElementById("green").innerHTML = negative + 'green.';
        return "00";
    }
}

let confirmRed = function() {
    let response2 = confirm("Do you like Red?");
    if (response2) {
        document.getElementById("red").innerHTML = positive + 'red.';
        return "ff"
    } else {
        document.getElementById("red").innerHTML = negative + 'red.';
        return "00"
    }

}

let confirmBlue = function(){
    let response = confirm("Do you like Blue?");
    if(response) {
        document.getElementById("blue").innerHTML = positive + 'blue.';
        return "ff"
    }
    else {
        document.getElementById("blue").innerHTML = negative + 'blue.';
        return "00"
    }

}

var backgroundBody = document.getElementsByTagName('body')[0];
backgroundBody.style['background-color'] = ('#' + confirmRed() + confirmGreen() + confirmBlue());


