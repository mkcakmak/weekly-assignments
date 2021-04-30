/*
Inputs:
- String
Outputs:
- Number of characters
- display the input string
Process:
- Prompt for something
- Count each character from input string
- Display input string and the number of characters
Constraints:
- No empty string (just to count more than 0)
- We should not count empty spaces
Test Cases:
1: Prompt user to input something
2: "ABC 123 &%/ "
3: Output: "ABC 123 &%/" number of characters "9"
1: Prompt user to input something
2: ""
3: Output: error: Please enter something other than spaces
1: Prompt user to input something
2: "     " 
3: Output: "     " number of characters "0"
Pseudo Code:

CountCharacters
    Initialize numberOfChars = 0
    Initialize string = ""
    Initialize position = 1
    
    Prompt for string with "Enter something here"
    Index indicates current character in the string
    if string is empty then
      Display: "Error: Please enter something other than spaces"
    else
      Loop 
        if (take character in position from string) is not equal " " then
          numberOfChars = numberOfChars + 1
        end 
        position = position + 1
      until end of string
          Display: string
      Display: numberOfChars
    endif
End

*/
/*
let word=prompt("Write something")

function length(string) {
    return string.length
    
}

alert(length(word))

*/


let word=prompt("Write something");
let str= prompt => prompt.length;

alert(str(word))



