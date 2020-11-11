'use strict';

//Array

//1. Declaration 선언

const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // 아무것도 들어있지않음 
console.log(fruits[fruits.length -1]); //배열의 마지막 인덱스 받아올수있음

console.clear();
//3. Looping over an array
// print all fruits

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//Callback function
//어떤 이벤트가 발생한 후, 수행될 함수를 의미한다.
//콜백함수를 쓰는 이유가 비동기 처리를 위해서 사용하기때문 aJax
//비동기처리 특정코드가 종료되지 않은 상태라 하더라도 대기하지 않고 
//다음 코드를 실행하는 자바스크립트의 특성 병렬적 싱행을 의미한다

//c. forEach 배열안에 들어있는 value 마다 내가 전달한 함수를 출력함
//forEach 반복문은 오직 Array 객체에서만 사용가능한 메서드입니다. (ES6부터는 Map,Set 지원)
//배열의 요소들을 반복하여 작업을 수행할수 있습니다.
//foreach구문의 인자로 callback함수를 등록할수 있고, 배열의 각 요소들이 반복될 떄 
//이 callback 함수가 호출됩니다. callback 함수에서 배열요소의 인덱스와 값에 접근할수 있습니다.
fruits.forEach((fruit) => console.log(fruit));  // => Arrow function 함수를 간결하게 만들어줌 

//4. Addtion, deletion, copy  배열에 넣고 빼고 복사
//push: add an item to the end  아이템을 배열의 제일뒤에 넣고싶다
fruits.push('🍓', '🍑');
console.log(fruits);

//pop: remove an item from the end  제일 뒤 에서 부터 빼고싶다
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift:  add an item to the benigging    앞에서 넣는방법
fruits.unshift('🍓', '🍋');
console.log(fruits);

//shift: remove an item from the benigging  앞에서부터 지우는방법
fruits.shift();
console.log(fruits);


//Note!! shift, unshift are slower than pop, push   shift, unshift 는 pop, push보다 존나 느리다
//Splice: remove an item by index position 아이템을 지정된 포지션에서 지우는방법
//Splice 는 원하는 인덱스만 지정하고 몇개를 지울건지 지정하지않으면 지정한 인덱스부터 모든데이터를 지워버린다
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);//원하는 개수만 지우고싶으면 시작하는 인덱스 정하고 몇개를 지울건지 정해줘야됨
console.log(fruits);
fruits.splice(1, 1, '🍎', '🍉');//splice이용해서 데이터를 넣을수있음 꼬아서 넣다 데이터를 지우지 않고 넣을수도있음
console.log(fruits);

//combine two arrays 두가지 배열을 묶어서 만들수있다 concat
const fruits2 = ['🥭', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index        몇번째 인덱스에 알고싶을때 indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));  // 배열안에 해당하는 값이 없을때는 -1로 출력됨 

//includes      //배열에 데이터가 있는지 없는지 true false 확인
console.log(fruits.includes('🍉'));    
console.log(fruits.includes('🥥'));     

//lastIndexOf       
console.clear();
fruits.push('🍎');
console.log(fruits);    
console.log(fruits.indexOf('🍎'));      //처음나오는 인덱스값이 나옴
console.log(fruits.lastIndexOf('🍎'));  //제일마지막에 들어있는 인덱스값이 나온다 

