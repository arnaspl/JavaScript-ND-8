let a = 1;
let b = 3;

function multiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        console.log('Įveskite skaičius');
    } else
    console.log(a*b);
}
multiply(a, b);
