function books(name, price, sold) {
    this.name = name;
    this.price = price;
    this.sold = sold;
    
  };    

let History = new books("History","20 CHF","sold");
let Science = new books("Science","30 CHF","sold");
let Maths = new books("Maths","40 CHF","sold");

let bookList=["History","Science","Maths"]
bookList.sort();

document.getElementById("lst").innerHTML=bookList;

let user=prompt("give a book name");
books(user);
bookList.push(user);

alert(bookList);

