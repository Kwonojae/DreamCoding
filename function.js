//function   input x outputd 
//-fundamental building block in the program 프로그램을 구성하는 빌딩 블럭
//-subprogram can be used multiple times    여러번 재사용 가능함 
//-performs a task or calculates a value    한가지의 테스크나 어떠한 값을 계산하기위해 사용함

//1. Function declaration  함수 정의하는방법
// function name(param1, param2) {body... return; } 함수안의 비즈니스 로직을 작성한다음 리턴
// one function === one thing   하나의 함수는 한가지 일만 하도록 만든다
// naming: doSomething, command, verb 무언가를 동작하기때문에 동사형태로 이름을 지정
// e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS   자바스크립트에서 function 은 오브젝트이다 
function printHello() {
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}
log('Hello@');

//2. Parameters 
//premitive parameters: passed by value 메모리에 벨류가 그대로 저장되있어서 벨류가 전달됨
//object parameters: passed by reference 오브젝트는  메모리에 레퍼런스가 저장되어있어 레퍼런스가 전달됨
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6) 
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)  배열출력하는거임 
function printAll(...args) {    //배열 args
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {        //3가지 다 똑같은거 
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

// 5. Local scope   밖에서는 안이 보이지 않고 안에서만 밖을 볼수있따 
let globalMessage = 'global'; // global variable
function printMessage() { //블럭안에 변수를 선언하면 지역 변수 
    let message = 'hello';
    console.log(message);   //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello0';
    }
}
printMessage();

//6. Return a value 
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit       
//bad
function upgradeUser(usser) {
    if(usser.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) { //조건이 맞지않을떄는 빨리 리턴하고 종료하고 
        return;
    }
    //long upgrade login... 조건이 맞을떄만 필요한 로직들을 작성하는게 좋음
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable  function은 다른 변수와 마찬가지로 변수에 할당이 되고  
//can be passed as an argument to other functions. 파라미터로 전달이되고 
//can be returned by another function       리턴값으로도 전달이됨


//1. Function expression    
//a function declaration can be called earlier then it is defiend. (hoisted)
//a function expression is created when the execution reaches it. 
const print = function(){   //함수에 이름이 없는것을 anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression   함수를 전달해서 상황에 맞으면 전달하는것을 콜백함수
function randomQuiz(answer, printYes, printNo) {
    if (answer == 'love you') {
        printYes();
    }   else {
        printNo();
    }
}

// anonymous function 함수에 이름이 없는거
const printYes = function () {
    console.log('yes!');
}

//  named function 함수이름이 지정되있는거
// better debugging in debugger's stack traces 디버깅할때 함수이름이 나오게 하게끔 
// recursions   함수안에서 함수자신스스로 부르는것 
const printNo = function print() {
    console.log('no~!');
  //  print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function 함수를 간결하게 만들어줌 
//always anonymous

//const simplePrint = function() {
//    console.log(`simplePrint!`);
//}; 밑에거랑 같은거 
const simplePrint = () => console.log('simplePrint');

const add = (a,b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIFE: Immediately Invoked Function Expression 함수 바로 출력하는 방법
(function hello() {
    console.log('IIFE');
})();






