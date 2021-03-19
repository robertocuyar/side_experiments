// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap (string){
    let object ={};
   const charArr = string.replace(/[^\w]/g, "").toLowerCase().split("").sort();
   for(let char of charArr){
       if (object[char]){
           object[char]++
       } else {
           object[char] = 1;
       }
   }
   return object;
}

function compareArr (arr1, arr2){
    let confirmation = true;
    arr1.forEach((char, index)=>{
       if (char !== arr2[index]){
           confirmation = false;
       }
    });

    return confirmation;
}

function compareObj (obj1, obj2){
    let confirmation = true;
    for (let char in obj1){
       if (obj1[char] !== obj2[char]){
           confirmation = false;
        }
    }
    return confirmation;
}

function anagrams(stringA, stringB) {
const objectA = charMap(stringA);
const objectB = charMap(stringB);

const arrA = Object.keys(objectA);
const arrB = Object.keys(objectB);

if (arrA.length !== arrB.length){
    return false;
}

if (compareArr(arrA, arrB)){
    return compareObj(objectA, objectB);
}
    return false;
}



module.exports = anagrams;
