'use strict';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

//Objects
//One of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object = { key: value }; 오브젝트는 키와 벨류의 집합체이다 

//1. Literals and properties
const obj1  = {};       // object literal syntax      
const obj2 = new Object();  // object constructor syntax    

function print(person) { 
    console.log(person.name);
    console.log(person.age);
}
//runtime 프로그램이 동작하고 있을때
const ellie = {name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

//property 는 속성 이란 뜻으로 JS에서 객체 내부의 속성을 의미함 

//2. Computed properties    계산된 프로퍼티
// key should be always string  프로퍼티는(key) 스트링타입으로 해야됨
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

//4. Constuctor function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}


//메소드와 함수의 차이점 가장 큰 차이점은 함수는 독립적으로 존재하고, 
//메서드는 클래스에 종속되어 존재한다는 점

//5. in operator: property existence check (key in obj) 
//해당하는 오브젝트안에 key가있는지 없는지 확인하는거
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

//6. for..in vs for..of
//for (key in obj)

for (const key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (const value of array) {
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (const key in user) {
   user3[key] = user[key];
}

console.clear();
console.log(user3);


//자바스크립트에 있는 모든 오브젝트튼 Object를 상속한다
const user4 = Object.assign({}, user);
console.log(user4);

//Assign() 하나 이상의 소스 개체에서 대상 개체로 열거 가능한 모든 속성의 값을 복사합니다.
//복사하고자하는 타겟과 복사하고자하는 소스를 같이 전달해야되고 리턴값은 타겟과 복사하는것이 통합된게 확인됨 배열도됨

// another example 여러개의 소스를 전달받을때
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);    //뒤에나오는 프로퍼티 일수록 앞에 동일한 프로퍼티가 있다면 뒤에나오는  값을 계속 덮어씌움 
console.log(mixed.color);
console.log(mixed.size);
