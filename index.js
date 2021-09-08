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


/* ---- Guess the number (non funzia) ------------------- *
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


/* ---- Doppie ------------------------------------------ *
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


/* ------------------------------------------------------ *
// Inizializzo matrice e array semplici
const mat = [];                                         // Memorizza tutti i valori
const rowSums = [];                                     // Memorizza somma di valori di ogni riga
const colSums = [];                                     // Memorizza somma di valori di ogni colonna

for(let i = 0; i < 4; i++){                             // Per ogni riga
    mat.push([]);                                       // Inizializza un nuovo array (nuova riga di matrice)
    for(let j = 0; j < 3; j++){                         // Per ogni elemento di ogni riga
        const rand = Math.floor(Math.random() * 9) + 1; // Genera un numero pseudo-randomico
        mat[i].push(rand);                              // Aggiungi il numero alla matrice
        rowSums[i] = (rowSums[i] ?? 0) + rand;          // Aggiungilo alla somma di questa riga (se il valore non c'è, inizializzalo a 0)
        colSums[j] = (colSums[j] ?? 0) +  rand;         // Aggiungilo alla somma di questa colonna (se il valore non c'è, inizializzalo a 0)
    }
}

// Stampa tutti i valori
console.log("\nMatrice: ");
console.table(mat);

console.log("\nRow Sums: ");
console.table(rowSums);

console.log("\nColumn Sums: ");
console.table(colSums);

/* ------------------------------------------------------ */
const numberOfRows = 4;                                 // Dimensioni della matrice
const numberOfCols = 3;                                 //           ^^

// const mat = [];                                      //# Memorizza tutti i valori
const rowSums = [];                                     // Memorizza somma di valori di ogni riga //* si potrebbe non salvare
const colSums = [];                                     // Memorizza somma di valori di ogni colonna

for(let i = 0; i < numberOfRows; i++){                  // Per ogni riga teorica della matrice
    //  mat.push([]);                                   //# Inserisci un nuovo array (crea effettivamente la nuova riga di matrice)
    for(let j = 0; j < numberOfCols; j++){              // Per ogni elemento teorico di ogni riga
        const rand = Math.floor(Math.random() * 9) + 1; // Genera un numero pseudo-randomico
        //  mat[i].push(rand);                          //# Ed inseriscilo nella matrice (in posizione [i][j])
        rowSums[i] = (rowSums[i] ?? 0) + rand;          // Aggiungilo alla somma di questa riga (se undefined, inizializzalo a 0)
        colSums[j] = (colSums[j] ?? 0) +  rand;         // Aggiungilo alla somma di questa colonna (se undefined, inizializzalo a 0)

        process.stdout.write(rand + "  ");              // Stampa il numero (matrice)
    }
    process.stdout.write("  " + rowSums[i] + "\n");     // Stampa la somma della riga (colonna di somme affianco alla matrice)
}
process.stdout.write("\n" + colSums.reduce((tot, el) => tot + " " + el));   // Stampa le somme delle colonne (riga sotto alla matrice)