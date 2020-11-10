//1. Use strict
//added in ES 5
//use this for Valina Javascript.
'use strict';

//2. Variable 변수  rw(read/write) 읽고쓰기가 가능함
//let (added in ES6) 에서 추가됨  변수를 선언하는 키워드 let 

let globalName = 'global name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);


/*
    3.Constants 값을 변경할수 없게 만듬     r(read only) 읽기만 가능
    favor immutable data type always for a few reasons: 왠만하면 값이 할당 한 다음에 다시는 변경되지 않는 데이터 타입을 사용해 
    -security       이유 보안 해커방지
    -thread safety  
    -reduce human mistakes
*/
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: premitive types, frozen objects (i.e. object.freeze())  데이터 자체를 절대로 바꾸지못함
//Mutable data types: all objects by default are mutable in JS      변경이가능한 데이터 타입    자바스크립트에선 오브젝트가 대부분 변경이 가능함

//4. Variable types
//primitive, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class function

const count = 17; // integer
const size = 17.1;// decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;         // 무한대의 숫자값이 나옴 
const negativeInfinity = -1 / 0;    // 
const nAn = 'not a number' / 2; //숫자가 아닌경우 
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1235123552135125158231095282359234n; //over(-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//String 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type:${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 비어있는값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined     선언은되었지만 아무것도 값이 지정되어 있지않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 고유한 식별자가 필요할때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); 
console.log(symbol1 === symbol2);   // false
//똑같은 심볼 만드는 방법
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); 
console.log(gSymbol1 === gSymbol2); //true
//심볼은 바로 출력하면 오류남 description사용하여 스트링으로 변환시켜 사용한다
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

//object, real-life object, data structure
const ellie = { name: 'ellie', age:20};
ellie.age = 21;

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));    //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));    //오류남

//런타임 환경(영어: runtime environment) 프로그래밍 언어가 구동되는 환경
