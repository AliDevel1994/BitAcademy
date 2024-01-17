const leeftijdLeonie = document.querySelector('.leonie p:nth-child(2)');
const leeftijdMustafa = document.querySelector('.mustafa p:nth-child(2)');

const leeftijdLeonieNum = parseInt(leeftijdLeonie.innerText);
const leeftijdMustafaNum = parseInt(leeftijdMustafa.innerText);

const leonieOuderDan17 = leeftijdLeonieNum >= 17;
const mustafaOuderDan17 = leeftijdMustafaNum >= 17;

if (leonieOuderDan17) {
    const naamLeonie = document.querySelector('#naamLeonie');
    naamLeonie.textContent = 'Leonie mag beginnen met rijlessen!';
} else {
    const naamLeonie = document.querySelector('#naamLeonie');
    naamLeonie.textContent = 'Leonie moet nog even wachten!';
}

if (mustafaOuderDan17) {
    const naamMustafa = document.querySelector('#naamMustafa');
    naamMustafa.textContent = 'Mustafa mag beginnen met rijlessen!';
} else {
    const naamMustafa = document.querySelector('#naamMustafa');
    naamMustafa.textContent = 'Mustafa moet nog even wachten!';
}

