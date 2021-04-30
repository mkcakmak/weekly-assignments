
function sentence(noun,adverb,adjective) {
    this.noun = noun;
    this.adjective = adjective;
    this.adverb = adverb;
    this.madlib= function () {
        return `A ${noun} is a domestic animal but there are wild ${noun} too. ${noun} are found ${adjective} in ${adverb} colours. The eyes of the  ${noun}  which are of ${adjective} shine at night. A  ${noun}  has ${adjective}claws. The food of the  ${noun}  is rats, pigeons and birds. `
    }
}


let nounUser=prompt("Give a noun");
let adverbUser=prompt("Give an adverb");
let adjectiveUser=prompt("Give an adjective");

let newOne = new sentence(nounUser,adverbUser,adjectiveUser) 

alert(newOne.madlib())


