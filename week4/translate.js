let language = prompt("If you want to learn how people say 'Hello World' in other languages, write 'tr' for Turkish, 'de' for German, 'gr' for Greek")

switch(language) {
    case "tr" :
        alert("Merhaba Dünya")
    break;

    case "de" :
        alert("Hallo Welt")
    break;

    case "gr" :
        alert("Γειά σου Κόσμε")
    break;

    default:
        alert("Input error")
        
}

