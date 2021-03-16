// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    let result = "";
    let greatest = 0;
    for(let char of str) {
        // if(obj[char] >= 1){
        //     obj[char]++;
        // } else {
        //     obj[char] = 1;
        // }
        obj[char] = obj[char] + 1 || 1
    }

    for (const char in obj){
        if (obj[char] > greatest){
            greatest = obj[char];
            result = char;
        }
    }
    return result;
}

module.exports = maxChar;
