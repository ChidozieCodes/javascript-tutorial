
//this is used to alert message to user when my website loads
// window.alert("I really love PIZZA");

// COMMENT IN JAVASCRIPT

//this is a single line comment

/*
    This
    is 
    a
    multiline
    comment
*/

/* ------------- VARIABLES IN JAVASCRIPT --------- */

/*
    A variable is a container used  for storing single data.

    Two Steps in naming a variable in JavaScript:

    1. Declaration (var, let, const);
    2. Assignment (= assignment operator)

    Strings, Numbers, Boolean, Null, undefined

*/

let myname = 'miracle';
const firstname = "Chidozie"; //strings Datatype
var age = 21; // integer datatype
var count = 22.1; // Float datatype
let ages = "21"; // string datatype '21' + 1 = 211
let student = false; //Boolean datatype
let k = null; // Null datatype
let country; //undefined datatype

console.log(myname);
console.log(firstname);
console.log(age);


age = age + 1;
ages = ages + 1;

console.log(age);
console.log(ages);


/*------------ ARITHMETICS IN JAVASCRIPT ----------*/

/*
    It is a combination of...
    operands (values, variables, etc)
    operators (+ - * / %)
    that can be evaluted to a value
    ex. y = x + 5;

*/

let students = 30;

let math1 = students + 1;
let math2 = students - 1;
let math3 = students * 2;
let math4 = students / 3;
let extraStudents = students % 4;

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);
console.log(extraStudents);

students += 1;   //means "students = students + 1"
students -= 1;   //means "students = students - 1"
students *= 2;  //means "students = students * 2"
students /= 2;  //means "students = students / 2"



/*------- CONCATENATION IN JAVaSCRIPT -------*/
/*
    Concatenation is a way or method of adding or joining two or more
    variables together in JavaScript.
*/

const firstnamez = 'chidozie';
const agez = 40;
const paragraph = 'My name is ' + firstnamez + 'and I am ' + agez + 'years old';
console.log(paragraph);

// Template String
console.log(`My name ${firstnamez} and I am ${agez} years old`);

const hello = `My name ${firstnamez} and I am ${agez} years old`;

console.log(hello);


/* --------- STRING FUNCTIONS IN JAVASCRIPT -----------*/

let stringLetter = 'Hello world';

console.log(stringLetter);

console.log(stringLetter.length);

console.log(stringLetter.toUpperCase());

console.log(stringLetter.toLowerCase());

console.log(stringLetter.substring(0,7).toUpperCase());



/*--------------- ARRAYS ---------------*/
/*
Arrays are variables that hold multiple values

*/

new Array();
[]

const numbers = new Array(1,2,3,4,5,6);

const multipleDatatype = ['hello','banana', 2, false ]

console.log(numbers);

const fruits = ['apple', 'orange', 'grape', 'banana'];

fruits[4] = 'pear'; // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

// How TO ADD ITEMS INSIDE  YOUR ARRAY
// push() adds item at the end of your array while unshift() adds at
// the beginning of your array

fruits.push('mangos'); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];

fruits.unshift('strawberry'); // const fruits = ['strawberry','apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];

// How TO REMOVE ITEMS INSIDE YOUR ARRAY
// pop() removes item at the last item in your array while shift() removes
// the first item in your array

fruits.pop(); // const fruits = ['strawberry','apple', 'orange', 'grape', 'banana', 'pear'];
fruits.shift(); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

console.log(fruits);

//Arrays are zero based
console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[3]);

// CLASSWORK

const animals = ['kangaroo', 'Antelop', 'Mongoose', 'Ostritch', 'Ape'];
/*
    Questions

    1. Output the second index of the array on your console.
    2. Add 'Lion' to the begining of the array.
    3. Add 'Zebra' to the ending of the array.
    4. Output the values of animals array on your console.


*/

console.log(animals[2]);
animals.unshift('Lion');
animals.push('Zebra');
console.log(animals);


//OBJECTS in JAVASCRIPT
const person = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 30,
    
    hobbies: ['music', 'movies', 'sports'],

    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}


//DESTRUCTURING, is the pulling of variables or values from an object. example

const { firstName, lastName, address: { state, city } } = person;

console.log(lastName);


//How to access or get variables in an object in Javascript
console.log(person.firstName, person.lastName);

//How to access or get value of array in an object in Javascript
console.log(person.hobbies[1]);

//How to access or get value of object in an object in Javascript
console.log(person.address.city);

person.email = 'iwuanyanwuaugustine@gmail.com';

console.log(person);

// Arrays of object
const NavBarList = [
    {
        id: '1',
        name: 'Home'
    },
    {
        id: '2',
        name: 'About Us'  
    },
    {
        id: '3',
        name: 'Service'
    },
    {
        id: '4',
        name: 'Contact Us'
    }
]



// LOOPS IN JAVASCRIPT

// FOR LOOP

/*
    For Loop, it takes 3 parameters; first is the initializer, second is the
    condition to be met, third is the increment
*/

const basket = ['mango', 'apple', 'orange', 'grape'];

for(let eben = 0; eben<basket.length; eben++){
    console.log(basket[eben]);
}
// let eben = 0; eben<basket.length;
// console.log(basket[eben]);
// eben++


// CLASSWORK

//  Use for loop to output the values of Array i.e wildAnimals in your console

let wildAnimals = ['lion', 'tiger', 'python', 'wolve', 'leopard'];


// While loop (old school)
let i = 0;
while (i < wildAnimals.length) {
    console.log(wildAnimals[i]);
    i++;
}


const todoss = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true 
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    },
];

//For of loop in JAVASCRIPT

for (let todo of todoss) {
    console.log(todo.text);
}

//ForEach, Map, filter in JAVASCRIPT

todoss.forEach(function(todo){
    console.log(todo.id);
});


//Map 
todoss.map(function(todo){
    console.log(todo.text);
})

//Filter
const todoCompleted = todoss.filter(function(todo){
    return todo.isCompleted === true;

}).map(function(todo){

    return todo.text;

});

console.log(todoCompleted);


//If Statement in JAVASCRIPT
// 1 == 1;
// 1 === '1';
// 1 == '1'

const ipAddress_Nigeria = 112324;
const ipAddress_USA = 223445;

if (ipAddress_USA === ipAddress_Nigeria){
    console.log('welcome to our website');
}else{
    console.log('does not support your country');
}

let x = 20;

if(x === 10){
    console.log('x is 10');

}else if(x > 10){
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}

const y = 4;
const z = 10;

if (y > 5 || z > 9){
    console.log('y is more than 5 or z is more than 10');
}

if (y > 5 && z > 9){
    console.log('y is more than 5 or z is more than 10');
}

//tenary operators, is like a shorthand IF statement, 
//it is used alot to assign variable based on condition 
let agesGrade = 17;

let output = agesGrade >= 18 ? 'red' : 'blue';
console.log(output);

//SWITCH STATEMENT
let CarColor = 'red'; 

switch(CarColor){
    case 'red':
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;

    default:
        console.log('color is NOT red or blue')
    
}

//FUNCTIONS

//Normal Function
Racheal()
let word = 'Racheal is learning how to use function in javascript';
function Racheal(){
    console.log(word)
}

function oswald(){

}
oswald();

// setInterval(() => {
//     oswald();
// }, 5000);

function noble(){
    console.log('Noble is learning JavaScript')
}
noble()

function OutPutHello(){
    console.log('Hello');
}
OutPutHello();

// How to write Arrow Function

let oswald = () => {

}
oswald();

const Briggs = () =>{
    //write What you want your function to execute
} 
 Briggs()

const precious = () =>{
    console.log('Precious is learning how to use function in javascript')
}
precious();

const OutPutName = () => {
    console.log('Olamide');
}
OutPutName();

const chinonso = () => {
    console.log('chinonso is learning JavaScript')
}
chinonso()

function shalom(a = 6, b = 3, c = 4){

     let sumTotal = a + b + c;
     console.log(sumTotal);
}
shalom();


//A function that adds two numbers
function addNums(num1, num2, hello) {
    console.log(num1 + num2 + hello);
}

addNums(5,6,9);


//DOM Document Object Model

//Single Element Selector
let form = document.getElementById('my-form');
console.log(form);

let Newform = document.querySelector('#container');
console.log(Newform);

//Multiple Element Selector
let ListItems = document.querySelectorAll('.item');
console.log(ListItems);

ListItems.forEach((item) => console.log(item)) ;

let AnotherListItems = document.getElementsByClassName('item');
console.log(AnotherListItems);

let AnotherListItemMethod = document.getElementsByTagName('li');
console.log(AnotherListItemMethod);

//Manipulating the DOM
//const ul = document.querySelector('#items');

//ul.remove();
// ul.lastElementChild.remove();
//ul.children[1].innerText = 'Laganja';
// ul.children[1].innerText = "Chidozie";
 //ul.children[2].innerHTML = "<h2>Hello</h2>";

const btn = document.querySelector('.btn');
//btn.style.backgroundColor = 'red';

//DOM Events
// e = event parameter
// btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('click');
// })

//Event Objects
// btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     //console.log(e.target.className);
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// })

// const MyForm = document.querySelector('#my-form');
// const FullName = document.querySelector('#name');
// const email = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const users = document.querySelector('.users');

// MyForm.addEventListener('submit', onsubmit);

// function onsubmit(e) {
//     e.preventDefault();
    
//     if(FullName.value === '' || email.value === ''){
//         //alert('Please all fields should not be empty');
//         msg.innerHTML = 'Please all fields should not be empty';
//         msg.classList.add('error');

//         setTimeout(() => msg.remove(), 3000)
//     }else{
//         //alert('success');
//         msg.innerHTML = 'whoa!!! successful';
//         msg.classList.add('success');

//         setTimeout(() => msg.remove(), 3000)

//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${FullName.value} : ${email.value}`));
//         users.appendChild(li);

//         //Clear fields
//         FullName.value = '';
//         email.value = '';

//        // setTimeout(() => ToAnotherPage(), 4000)
//     }
// }

// function ToAnotherPage() {
//     window.location.href = "user.html";
// }

const btnn = document.querySelector('.btn');
const coverBg = document.querySelector('.hamburger-background');
const smallbox = document.querySelector('#small-box');
const body = document.querySelector('body');

// btnn.addEventListener('click', function(e){
//     e.preventDefault();
//     coverBg.classList.add('displayblackbackground');
//    // alert('hello')

// })

// smallbox.addEventListener('click', function(){
//     coverBg.classList.remove('displayblackbackground');
// })

// btnn.addEventListener('click', function(e){
//     e.preventDefault();
//     body.style.background = 'black';
// })

// btnn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     var bar = btnn.innerText= 'Register';
// })

// window.onload = function(){
//     setInterval(next, 4000);
    
// }

// let sliderBox = document.querySelectorAll('.sliderbox');

// let num = 0

// function next(){
   
//     for(let i = 0; i < sliderBox.length; i++ ){

//         sliderBox[i].style.display = 'none';
//     }

//     sliderBox[num].style.display = 'block';

//     num++

//     if(num > sliderBox.length - 1){
//         num = 0;
//     }
 
// }

// function prev(){

//     num--

//     if(num < 0){
//        num = sliderBox.length - 1
//     }
   
//     for(let i = 0; i < sliderBox.length; i++ ){

//         sliderBox[i].style.display = 'none';
//     }

//     sliderBox[num].style.display = 'block';

// }

