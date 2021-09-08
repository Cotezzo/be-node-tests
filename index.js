/* ---- Speed test -------------------------------------- *
const arr = [...Array(5000000).keys()];
var sum = 0;
console.time();
for(const el of arr){ sum += el }                   // Slow
arr.forEach(el => { sum += el });                   // Slow
for(let i=0; i<arr.length; i++){ sum += arr[i] }    // Fast
var i = 0;
while(i<arr.length){ sum += arr[i]; i++; }          // Fast
console.log(sum);
console.timeEnd();


/* ---- LAMBDA FIB -------------------------------------- *
const fib = (n) => {
    var nums = [0, 1];
    for(let i = 0; i < n; i++) {
        console.log(nums[0]);
        [nums[0], nums[1]] = [nums[1], nums[0]+nums[1]];
    }
}
fib(20);
/* ------------------------- *
(function(n) {
    var nums = [0, 1];
    for(let i = 0; i < n; i++) {
        console.log(nums[0]);
        [nums[0], nums[1]] = [nums[1], nums[0]+nums[1]];
    }
})(20);


/* ---- Guess the number -------------------------------- *
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const num = Math.floor(Math.random() * 100001);
const ask = () => {
    rl.question('Guess the number: ', input => {
        console.log(input < num ? "Number too low! Try again.\n" : input > num ? "Number too high! Try again.\n" : "You guessed it!");
        if(input != num) return ask();  //! if(string != number)
        rl.close();
    });
}
ask();


/* ---- Matrix ------------------------------------------ *
// Metodo 1: Disegna senza memorizzare
const drawMatrix = (size, char) => {
    const mat = [];
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            process.stdout.write(((j === i || j + i === size-1) ? char : "0") + " ");
        }
        process.stdout.write("\n");
    }
}
drawMatrix(9, "X");

/* --------------------------------- *
// Metodo 2: Memorizza matrice e stampa
const createXMatrix = (size, char) => {
    const mat = [];
    for(let i = 0; i < size; i++){
        mat.push([]);
        for(let j = 0; j < size; j++){
            mat[i].push((j === i || j + i === size-1) ? char : "0");
        }
    }
    return mat;
}
console.table(createXMatrix(15, "X"));


/* ---- ax + b = 0 -------------------------------------- *
const eq = (a, b) => a ? -b/a : "Non esiste";
console.log(eq(0, 10));


/* ---- Controlla Doppie -------------------------------- *
const str = "asdkl-saopj asijuisf usafasn8fa87n0fn87as890fnsa890nf890na 89n0fs980nasf98 0na980nsf980na9f08a908sf890as890f908as908f89an0sf89n0s890nfafasfasfasfasfaklsflaksjflaksjflaskjflaksjflaskjfaskjflaskjfalskjflaksjflkajsflkjasflkjassfsda";

/* ------------------------- *
console.time("checkDoppie");
const checkDoppie = str => {
    for(let i = 0; i < str.length-1; i++)
        if (str.charAt(i) == str.charAt(i+1)) return true;
    return false;
}
console.log(checkDoppie(str));
console.timeEnd("checkDoppie");

/* ------------------------- *
console.time("checkDoppie2");
const checkDoppie2 = str => {
    for(let i = 1; i < str.length-1; i+=2)
        if (str.charAt(i) == str.charAt(i-1) || str.charAt(i) == str.charAt(i+1)) return true;
    return false;
}
console.log(checkDoppie2(str));
console.timeEnd("checkDoppie2");

/* ------------------------- *
const checkDoppieRegexp = str => !!str.match(/(.)\1/)
console.log(checkDoppieRegexp(str));


/* ---- Random Matrix ------------------------------------------------------------------------------------------------------------- */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const print = str => process.stdout.write(str);                 // Java moment (console.log starts a new line, I need inline print)

const randomMatrix = (numberOfRows, numberOfCols) => {          // Params: matrix sizes
    // const mat = [];                                          //! Saves all the matrix values
    const rowSums = [];                                         //# Saves the sums of each row values
    const colSums = [];                                         // Saves the sums of each column values

    for (let i = 0; i < numberOfRows; i++) {                    // For each matrix row
        //  mat.push([]);                                       //! Inserts a new array (row) to the matrix
        for (let j = 0; j < numberOfCols; j++) {                // For each element of this row
            const rand = Math.floor(Math.random() * 9) + 1;     // Generates a pseudo-random number
            //  mat[i].push(rand);                              //! Inserts in in the matrix (at [i][j])
            rowSums[i] = (rowSums[i] ?? 0) + rand;              // Adds the value to the row sum (init at 0 if undefined)
            colSums[j] = (colSums[j] ?? 0) + rand;              // Adds the value to the column sum (init at 0 if undefined)

            print(rand + "  ");                                 // Print generated number (matrix)
        }
        print("  " + rowSums[i] + "\n");                        // Print row sum (next to the matrix)
    }
    print("\n" + colSums.reduce((tot, el) => tot + " " + el));  // Print column sums (under the matrix)
}

rl.question('Insert matrix size (ex:4 3): ', input => {
    if (!/^[0-9]+ [0-9]+$/.test(input)) console.log("Hai cannato. ");
    else randomMatrix(...input.split(/ /).map(el => parseInt(el)));
    rl.close();
});

/**
 * expected output:
 *
 * 9  8  6    23
 * 7  9  9    25
 * 4  2  5    11
 * 1  6  1    8
 *
 * 21 25 21
 */