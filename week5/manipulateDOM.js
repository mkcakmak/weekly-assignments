let h1Tag = document.getElementsByTagName("h1")[0];
let tagParagraf=document.querySelector("p");
let aTag = document.getElementsByTagName("a")[0];

console.log(h1Tag,tagParagraf,aTag);
let i;
for(i=0; i<2; i++){
    h1Tag.innerHTML += ` ${i} `;
}

for(i=0; i<4; i++){
    tagParagraf.innerHTML = ` ${i} ` + tagParagraf.innerHTML;
}


for(i=0; i<7; i++){

    aTag.innerHTML = ` ${i} `;

    console.log(i);
}