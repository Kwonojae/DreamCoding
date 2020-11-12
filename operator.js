'use strict';

//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);  //JS 는 문자 + 숫자 = 문자 
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder 나머지값
console.log(2 ** 3); // exponentiation 2~3승

//3. Increment and decrement operators 증감연산자
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);//Increment증가
const preDecrement = --counter;     // 기호가 앞에있으면 바로업데이트되서 할당이됨
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);  //Decrement감소
const postDecrement = counter--;    //할당을 해놓고 업데이트는 그후에
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);

//4 Assignment operators 할당하는 오퍼레이터
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// ||(or)   둘중하나만 참이면 참
console.log(`or: ${value1 || value2 || check()}`);  //함수로 홀출하는애를 제일 뒤에 둔다 

// && (and), finds the first falsy value   모두 true여야 true 헤비한 오퍼레이션일수록 뒤에서 체크하는게 좋다
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('🙋‍♂️')
    }
    return true;
}

// ! (not)
console.log(!value1);

//7 Equality    
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion 타입이 다르면 다른것  많이 사용함
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Object equality by reference 오브젝트는 메모리에 탑제 될때 레퍼런스 형태로 저장됨
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);        //true
console.log(0 === false);       // false
console.log('' == false);       // true
console.log('' === false);      // false
console.log(null == undefined); //true
console.log(null === undefined);//false    

//8. Conditional operators: if
//if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

//9. Ternary operator: ? 참이면 왼쪽을 실행 아니면 오른쪽 많이사용하면 코드의 가독성이 떨어짐
//condition ? value1 : value2; 
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, 조건문이 맞을때만 사용하고싶으면 사용
//body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first, 블럭을먼저 실행하고싶으면 사용
//then check the condition.
do { //블럭을 먼저 실행한뒤에
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);    //조건이 맞는지 안맞는지 검사

//for loop, for(begin; condition; step) begin은 한번만 실행 
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}


// nested loops
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue)\
for(let i = 0; i <= 10; i++){
    // if(i % 2 === 0){
    //     console.log(`'짝수'+${i}`);
    // }
    if(i % 2 !== 0){
        console.log(`'홀수 실행'+${i}`);
        continue
    } else {
        console.log(`'짝수 실행'+${i}`);
    }
}




//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for(let i = 0; i <= 10; i++){
    console.log(`${i}`);
    if( i === 8){
        break
    }

}