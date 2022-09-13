// Check whether a string is palindrome or not.

let str = "pranarp";
let bag = "";
for (let i=str.length-1; i>=0; i++) {
    
    bag = bag+str[i]
}
if (bag!==str) {
    
    console.log("It is palindrome");
}
else{

    console.log("It is not palindrome");
}