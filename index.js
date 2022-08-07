const prompt = require('prompt-sync')();
const colors = require('colors');

const range = Number(
    prompt("Want to guess a number that varies by how much? [e.g. 0 - 100]: ")
);

let attempts = 5;

function guessTheNumber() {
    const numberGuess = Math.floor(Math.random() * (range + 1));
    attempts = 5;

    while (true) {
        const guess = Number(prompt("What number am I thinking? ".blue));

        if (guess === numberGuess) {
            console.log(`Nice! You're right. Congrats!`.green);
            break;
        } else {
            if (attempts <= 0) {
                console.log('Your attempts are over, sorry! :('.red);
                console.log(`I thought in the number ${numberGuess}`.yellow)
                break;
            } else {
                console.log(`Wrong answer! You have more ${attempts} attempts`.red);
                attempts--;
                continue;
            }
        }
    }
}

guessTheNumber();


while (true) {
    const repeat = prompt("Want to repeat the game? [y/n]: ");
    if (repeat === 'yes' || repeat === 'y') {
        guessTheNumber();
    } else if (repeat === 'not' || repeat === 'no' || repeat === 'n') {
        console.log("See you in next time. Bye!");
        break;
    } else {
        console.log("Sorry, but I don't understood. Can You say again?");
        continue;
    }
}