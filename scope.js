function aanmelden(wachtwoord) {
    let bericht;

    if (wachtwoord === "geheim") {
        bericht = "Welkom!";
    } else {
        bericht = "FOUT WACHTWOORD!";
    }
    console.log(bericht);
}

{
    let wachtwoord1 = "fout";
    aanmelden(wachtwoord1);
}

{
    let wachtwoord2 = "geheim";
    aanmelden(wachtwoord2);
}
