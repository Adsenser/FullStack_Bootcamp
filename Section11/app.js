let age = 32;
let userName = `Tae 
yi` 
let hobbies = ['sports','cooking','Reading'];
let job = { 
    title: 'developer',
    place : 'newyotk',
    salary: 5000};


age = 45; //변수 한번 선언하면 let 다시 할 필요없음

let adultyears
function calculateAdultYears(userAge) {
    return userAge - 18 - 5*1 ;
}

adultyears = calculateAdultYears(age);
console.log(adultyears)

let person = {
    greet() {
        console.log('Hello')
    }
}

person.greet()