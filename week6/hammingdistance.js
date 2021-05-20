let hd1= "sodabe";
let hd2="solaca";
let hDistance=0;


if (hd1.length===hd2.length){
    for(let i=0; i<hd1.length;++i){
        if(hd1[i]!==hd2[i]){
            hDistance++; 
        }
    } 
} else{
    alert('error!!');
}