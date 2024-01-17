function isDeelbaarDoor43(getal) {
    return getal % 43 === 0;
}

const invoerGetal = 13729;
const deelbaarDoor43 = isDeelbaarDoor43(invoerGetal);

console.log(`${invoerGetal} is deelbaar door 43: ${deelbaarDoor43}`);

const tweedeInvoerGetal = 14706;
const tweedeDeelbaarDoor43 = isDeelbaarDoor43(tweedeInvoerGetal);

console.log(`${tweedeInvoerGetal} is deelbaar door 43: ${tweedeDeelbaarDoor43}`);
