let author = prompt("Give an author name")
let quote = prompt("Give a sentence")

function said(sentence,person) {
    return  `${person} says, "${sentence}"`           
}

alert (said(quote,author))