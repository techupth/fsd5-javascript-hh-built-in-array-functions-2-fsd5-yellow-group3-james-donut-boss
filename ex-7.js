function isPalindrome(string) {
  // Start coding here
  let reverseString = string.split("");
  reverseString = reverseString.reverse();
  reverseString = reverseString.join("");
  if (string === reverseString) {
    return Boolean(1);
  } else {
    return Boolean(0);
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
