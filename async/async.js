'use strict';


//async & await
//clear style of using promise;)

//1 . async : 를 함수앞에 사용하면 프로미스로 자동으로 변환이됨 
async function fetchUser() { 
    // do network reqeust in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await

function delay(ms) { // 정해진 시간이 지나면 resolve를  호출하는 프로미스를 리턴하게됨 
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000); //딜레이가 끝날때까지 기다리고 
    return '🍌';    //바나나를 리턴한다 
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// } 콜백지옥이다 밑에 거로 리팩토링 
async function pickFruits() { 
    const applePromise = getApple(); // 만들자마자 코드가 실행이되서 
    const bananaPromise = getBanana();//병렬적으로 사과와 바나나를 동시에 따와서 한번에 출력이됨
    const apple = await applePromise; //기다렸다가 한번에 출력이됨
    const banana = await bananaPromise; 
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs       all:프로미스 배열을 전달하게되면 모든 프로미스들이 병렬적으로 다받을때까지 모아줌
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) //사과랑 바나나를 배열로 전달해주고
    .then(fruits => fruits.join(' + '));        //다받아지면 다시 전달이됨 
}
pickAllFruits().then(console.log);

function pickOnlyOne() {        // race: 배열에 전달된 프로미스중에 가장먼저 값을 리턴하는 애만 전달이됨
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);