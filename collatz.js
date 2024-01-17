function hagelsteenReeksLengte(getal) {
    let stappen = 0;

    while (getal !== 1) {
        if (getal % 2 === 0) {
            getal /= 2;
        } else {
            getal = 3 * getal + 1;
        }
        stappen++;
    }

    return stappen;
}

const invoerGetal = parseInt(process.argv[2]);

const stappen1 = hagelsteenReeksLengte(invoerGetal);

const stappen2 = hagelsteenReeksLengte(stappen1);

const stappen3 = hagelsteenReeksLengte(stappen2);

console.log(stappen3);
