function isPalindrome(string) {
  // Start coding here
  let reString = string.split("").reverse().join("")
  return string === reString
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false



  
 