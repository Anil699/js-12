var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var palindromes = [];

// Using a for loop
for (let i = 0; i < aos.length; i++) {
    let word = aos[i];
    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        palindromes.push(word);
    }
}

console.log("Using for loop:", palindromes);

// Resetting palindromes array
palindromes = [];
let i = 0;

// Using a while loop
while (i < aos.length) {
    let word = aos[i];
    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        palindromes.push(word);
    }
    i++;
}

console.log("Using while loop:", palindromes);

// Resetting palindromes array
palindromes = [];
i = 0;

// Using a do-while loop
do {
    let word = aos[i];
    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        palindromes.push(word);
    }
    i++;
} while (i < aos.length);

console.log("Using do-while loop:", palindromes);
