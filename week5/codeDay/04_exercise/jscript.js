function books(bookName, price, sold) {
    this.bookName = bookName;
    this.price = price;
    this.sold = sold;
    
  };    

let b1 = new books("history","50","sold");
let b2 = new books("science","30","sold");
let b3= new books("maths","40","sold");

let bookList=[];
bookList.push(b1);
bookList.push(b2);
bookList.push(b3);

bookList.sort(function (a, b) {
  
});
console.log(bookList);

/*
document.getElementById("lst").innerHTML=bookList;

let user=prompt("give a book name");
books(user);
bookList.push(user);

alert(bookList);

*/