function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

let number = prompt("Write numbers");
alert(reverse_a_number(number));


