const berekenBelasting = (inkomen) => {
    let belasting = 0;
    if (inkomen <= 10000) {
        belasting = 0;
    } else if (inkomen <= 30000) {
        belasting = 0.2 * (inkomen - 10000);
    } else if (inkomen <= 70000) {
        belasting = 4000 + 0.5 * (inkomen - 30000);
    } else {
        belasting = 24000 + 0.9 * (inkomen - 70000);
    }
    return belasting;
};

const berekenEffectiefBelastingPercentage = (inkomen) => {
    const belasting = berekenBelasting(inkomen);
    const effectiefBelastingPercentage = (belasting / inkomen) * 100;
    return effectiefBelastingPercentage;
};

const inkomen = process.argv[2];
if (process.argv.length > 2) {
    console.log(`inkomen ${inkomen}: effectieve belasting: ${berekenEffectiefBelastingPercentage(inkomen)}%`);
} else {
    for (let i = 0; i < 100000; i++) {
        let belasting = berekenEffectiefBelastingPercentage(i);
        if (belasting == 50) {
            console.log(`inkomen ${i}: effectieve belasting: ${belasting}%`);
            break;
        }
    }
}

