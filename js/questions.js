"use strict";
let positive = '<a href="#" onclick = "storeData()">You like ';
let negative = '<a href="#" onclick = "storeData()">You don\'t like ';

let confirmGreen = () => {
    let response2 = confirm("Do you like Green?");
    if (response2) {
        document.getElementById("green").innerHTML = positive + 'green.</a>';

        return "ff";
    } else {
        document.getElementById("green").innerHTML = negative + 'green.</a>';
        return "00";
    }
}

let confirmRed = ()=> {
    let response2 = confirm("Do you like Red?");
    if (response2) {
        document.getElementById("red").innerHTML = positive + 'red.</a>';

        return "ff"
    } else {
        document.getElementById("red").innerHTML = negative + 'red.</a>';
        return "00"
    }

}

let confirmBlue = ()=> {
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

let backgroundTest1 = document.getElementById('test_1');
backgroundTest1.style.backgroundColor = ('#' + confirmRed() + confirmGreen() + confirmBlue());

let displayArray = [];
function defaultDisplay() {
    var i = 0;
    while (window.localStorage.getItem('response' + i)) {
        let dataShow = window.localStorage.getItem('response' + i);
        let divResponse = document.createElement('div');
        divResponse.innerHTML = "<p id = '" + i + "'>" + dataShow + "       <a href = '#'" + " onclick ='erasePart(" + i + ")'>Remove</a></p>";
        document.getElementById("display_data").appendChild(divResponse);
        displayArray.push(dataShow);
        i++;
    }
}
defaultDisplay();

let storeData = function() {
    displayArray.push('response');
    let displayString = "";
    displayArray.forEach(function (color, i) {
        window.localStorage.setItem('response' + i, color);
    });
    let parent = document.getElementById('display_data');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (var i = 0; i < displayArray.length; i++) {
        let dataShow = window.localStorage.getItem('response' + i);
        let divResponse = document.createElement('div');
        divResponse.innerHTML = "<p id = '" + i + "'>" + dataShow + "       <a href = '#'" + " onclick ='erasePart(" + i + ")'>Remove</a></p>";
        document.getElementById("display_data").appendChild(divResponse)
        //document.getElementById('display_data').innerHTML = dataShow;
    }
}
let clearLocal = function() {
   let dataClear = window.localStorage.clear();
   displayArray = [];
    document.getElementById('display_data').innerHTML = "";

}

let erasePart = function(input){

}
/*var x = [1,2,3,4,5];
let output = "";
x.forEach(function(item){
    output += " " +(item + 1);
})
console.log(output);*/

