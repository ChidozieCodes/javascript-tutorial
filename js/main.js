// DOM Document Object Model

// SELECTORS IN JAVASCRIPT

// document.querySelector('');
// document.getElementById('');
// document.querySelectorAll('');
// document.getElementsByClassName('hi');
// document.getElementsByTagName('');

// // EXAMPLE
// let preciousContainer = document.querySelector('#precious');
// let EmmaBox1 = document.querySelector('#box1');
// let hi = document.querySelectorAll('.hi');
// const secondHi = document.getElementsByName('hi');


// AddEvent Listeners in Javascript
// examples of Event listeners


/*
1. Click Event
2. DblClick Event
3. mouseover Event
4. Mouseenter Event
5. Mouseleave Event
6. Load Event
7. Change Event
8. Scroll Event
9. Mousemove Event
10. input Event
11. focus Event

*/

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');

//DOUBLE CLICK EVENT
box1.addEventListener('dblclick',function(){
    alert('Favour is learning JavaScript')
})

// CLICK EVENT
box2.addEventListener('click', function(){
    box1.style.width = '80%';
    box2.style.width = '80%';
    box2.style.background = 'orange';
    box3.style.width = '60%';
})
// box1.addEventListener('click', function(){
//  alert('Favour is learning JavaScript')
//})

// MOUSE-ENTER EVENT
box3.addEventListener('mouseenter', function(){
    box3.style.backgroundColor = 'green';
})

// MOUSE-LEAVE EVENT
box3.addEventListener('mouseleave', function(){
    box3.style.backgroundColor = 'fuchsia';
})

// CHANGE EVENT 
let imgupload = document.querySelector('#imgupload');
imgupload.addEventListener('change', function(){
    alert('i have made a change effect');
})

let country = document.querySelector('#country');
let body = document.querySelector('body');

country.addEventListener('change', function(){
    alert('Country option changed')
    body.style.background = '#ddd';
})

// INPUT EVENT
let typeBox = document.querySelector('#typeBox');
let firstname = document.querySelector('#firstname')
firstname.addEventListener('input', function(){
    typeBox.innerHTML = 'typing...';
})