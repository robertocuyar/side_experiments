function sum(array) {
    return array.reduce((accum, color) => accum + color, 0)
}

function birds() {
    let red = Math.floor(Math.random() * 5) + 1;
    let black = Math.floor(Math.random() * 5) + 1;
    let yellow = Math.floor(Math.random() * 5) + 1;
    let blue = Math.floor(Math.random() * 5) + 1;
    let green = Math.floor(Math.random() * 5) + 1;
    let possAnswers = [];

    if (3 * red === black + 2 * yellow && 2 * black === 2 * red + green && green + 2 * blue === 3 * yellow) {

        const answers = {
            "red": red,
            "black": black,
            "yellow": yellow,
            "blue": blue,
            "green": green
        };

        console.log(answers);

        let options = [red, black, yellow, blue, green];
        const goal = yellow + 2 * blue;

        for (let color in answers) {
            possAnswers.push(answers[color]);
            if (sum(possAnswers) > goal) {
                possAnswers.pop();
            }
        }

        console.log(possAnswers);

    } else {
        return birds();
    }
}

birds();