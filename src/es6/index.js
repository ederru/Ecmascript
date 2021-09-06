//Funciones

//Javacript normal
function newFunction(name, age, country) {
    var name = name || 'Eder';
    var age = age || 24;
    var country = country || 'MX';
    console.log(name, age. country);
}

// es6
function newFunction2(name = 'Eder', age = 24, country = "MX") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Ramiro", 32, "CO");

//Concatenacion

let hello = "Hello";
let world = "World";
//JS normal
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//LET y CONST

let lorem = "Una frase cualquiera para comprender el uso de la clase \n"
+ "Otra frase que se indexa con salto de linea";

//es6
let lorem2 = `Otra frase epica que me ayudará a comprender el funcionamientos de es6
sin poner el salto de linea explicito`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person.age);

//es6 
let {name, age, country} = person;
console.log(name, age, country);

//es6 arrays
let team1 = ['Eder', 'Pizarro', 'Primo'];
let team2 = ['Mafer', 'Julieta', 'Victoria'];

let teamComplete = [...team1, ...team2];

console.log(teamComplete);

//Alcance variables es6
{
    var globalVar = 6;
}

{
    let globalLet = 7;
}

console.log(globalVar);
/*console.log(globalLet); //esta no se puede */

let name = 'Eder';
let age = 32;

//es5
obj = {name : name, age : age};
//es6
obj2 = {name, age};

console.log(obj);
console.log(obj2);

const names = [
    {name: 'Eder', age: 32},
    {name: 'Jessica', age: 40}
]

let lisOfNames = names.map(function (item) {
    console.log(item.name);
})
//es6 arrow function
let listOfNames2 = names.map(item => console.log(item.name));

const lisOfNames3 = (name, age , country) => {
    console.log(item.name);
}

const square = num => num * num;

/* Promesas es6 */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve ('Hey!');
        } else {
            reject ('Ups!!');
        }
    });
}

helloPromise ()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

    //clases es6

    class calculator {
        constructor () {
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc= new calculator();
    console.log(calc.sum(2, 2));

    import { hello } from './module';
    hello();