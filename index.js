// LOOPS

// 1. create a loop that prints out the numbers 0 - 5 using a while loop

// 2. create a loop that prints out the numbers 0 - 5 using a for loop

// 3. create a loop that prints out the numbers 0 - 5 using a for loop but for each number return the squared version

//4. iterate over the string below and print out each character
let string = "the fox jumps over the moon"; 

let i = 0;

while (i <= 5) {
    console.log(i);
    i += 1;
}

for (let i = 0; i <= 5; i += 1) {
    console.log(i);
}

for (let i = 0; i <= 5; i += 1) {
    console.log(i * i);
}

for (let i = 0; i < string.length; i += 1) {
    console.log(string[i]);
}



    