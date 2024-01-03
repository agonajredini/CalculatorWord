var fs = require("fs");

var fjalor = fs.readFileSync("fjalori.txt").toString();

fjalor = fjalor.split("\r\n");
var badletters = /[acdfjkmnpqrtuvxyACDFJKMNPQRTUVXYëç-]/;
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
    if (newword.length == longestWord[0].length) {
        longestWord.push(newword);
    }
    else
    {
        longestWord = [newword];
    }
}

console.log(longestWord);



