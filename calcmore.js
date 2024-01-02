var fs = require("fs");

var fjalor = fs.readFileSync("fjalorime.txt").toString();

fjalor = fjalor.split("\n");
var badletters = /[acdfjkmnpqrtuvxyzëç]/;
var longestWord = [""];

for (var newword of fjalor) {
    
    if (newword.match(badletters)) {
        continue;
    }
    if (newword.length > 10) {
        continue;
    }
    if (newword.length < longestWord[0].length) {
        continue;
    }
    else if (newword.length == longestWord[0].length) {
        longestWord.push(newword);
    }
    else
    {
        longestWord = [newword];
    }
}

console.log(longestWord);



