"use strict";
let positive = '<a href="#" onclick = "storeData()">You like ';
let negative = '<a href="#" onclick = "storeData()">You don\'t like ';

let confirmGreen = function() {
    let response2 = confirm("Do you like Green?");
    if (response2) {
        document.getElementById("green").innerHTML = positive + 'green.</a>';

        return "ff";
    } else {
        document.getElementById("green").innerHTML = negative + 'green.</a>';
        return "00";
    }
}

let confirmRed = function() {
    let response2 = confirm("Do you like Red?");
    if (response2) {
        document.getElementById("red").innerHTML = positive + 'red.</a>';

        return "ff"
    } else {
        document.getElementById("red").innerHTML = negative + 'red.</a>';
        return "00"
    }

}

let confirmBlue = function(){
    let response = confirm("Do you like Blue?");
    if(response) {
        document.getElementById("blue").innerHTML = positive + 'blue.</a>';

        return "ff"
    }
    else {
        document.getElementById("blue").innerHTML = negative + 'blue.</a>';
        return "00"
    }

}

var backgroundBody = document.getElementsByTagName('body')[0];
backgroundBody.style['background-color'] = ('#' + confirmRed() + confirmGreen() + confirmBlue());

/*window.localStorage.setItem('response', 'blue chosen');
window.localStorage.setItem('response', 'green chosen');
console.log(window.localStorage.getItem('response'));
window.localStorage.setItem('response', 'red chosen');*/

let storeData = function(){
    window.localStorage.setItem('response', 'response recorded');
}
let clearLocal = function() {
    window.localStorage.clear();
}
let dataShow = window.localStorage.getItem('response');
document.getElementById('display_data').innerHTML = dataShow;
