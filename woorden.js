const woordArray = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
const letters = ['o', 'p', 'q'];

function checkLetters(woorden, chars) {
    for (const woord of woorden) {
        for (const letter of chars) {
            if (woord.toLowerCase().includes(letter.toLowerCase())) {
                console.log(`${woord} bevat de letter '${letter}'`);
            }
        }
    }
}

checkLetters(woordArray, letters);
