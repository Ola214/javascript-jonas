'use strict';

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   creating new variable with same name as outer scopes variable
      const firstName = 'Steven';

      //reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/
/*console.log(me);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2,3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example 
console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;*/

/*console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //jonas object
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); //this refers to matilda object

const f = jonas.calcAge;
f(); //this undefined*/

/*var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    //const self = this;
    //const isMillenial = function () {
      //console.log(self.year >= 1981 && self.year <= 1996); // this undefined
    //};

    //Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996); // this undefined
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // this -> undefined, bo arrow function, this wskazuje na window
};
jonas.greet();
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); //ok
var addArrow = (a, b) => a + b;
addArrow(2, 5, 8); //argument not defined
*/

/*let age = 30;
let oldAge = age; //copy undeep
age = 31;
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me; //copy deep referential
friend.age = 27;
console.log('Freind: ', friend);
console.log('Me: ', me);*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //shallow copy, undeep
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
