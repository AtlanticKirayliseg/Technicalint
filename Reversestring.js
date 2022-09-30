function reverseString(str) {
   var revString = "";
   for (var i = str.length - 1; i >= 0; i--) {
       revString += str[i];
   }
   return revString;
}
reverseString('Russian Rice');
// Expected returnn = "eciR naissuR"