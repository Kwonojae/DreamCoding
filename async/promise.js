'use strict';

//Promise is a JavaScript object for aynchronous operation. 비동기적인 걸 수행하기때문에 유용하게 쓰일수있는 오브젝트
//State(상태) : pending() -> fulfilled or rejected 
//프로미스가 만들어져서 우리가 지정한 오퍼레이션이(함수) 수행중일때는 pending상태가됨 
//오퍼레이션이 성공적으로 끝내게되면 fulfilled 됨 
//파일찾을수없거나 네트워크에 문제가 생기면 rejected됨 
//State ()상태 . 프로세서가 무거운 오퍼레이션(함수)을 실행중인지 아니면 기능 수행이 완료가되어서 성공했는지 실패했는지 이해하는게 중요 
//producer vs Consumer  차이점을 아는것 중요 
//producer : 원하는 데이터를 제공하는 사람
//Consumer : 제공된 데이터를 쓰는사람  이해하기

//1. producer : 원하는 데이터를 제공하는 사람
//when new Promise is created, the executor runs automatically.
//새로운 프로미스가 만들어질때는 우리가 전달한 executor 콜백함수가 바로 실행이된다 유의하자 
const promise = new Promise((resolve, reject) => {   //클래스이기때문에 new를 사용해서 오브젝트를 사용할수있음
    //resolve : 기능을 정상적으로 수행해서 데이터를 최종전달하는 
    //reject : 기능을 수행하다가 중간에 문제가 생기면 호출하게됨
    //doing some heavy work(network, read files) 프로미스 안에서 헤비한 일을함 파일을 읽어온다던지 , 네트워크 통신을하던지 비동기적으로 처리함
    console.log('');
    setTimeout(() => {
        resolve('ellie');  //  성공
       // reject(new Error('no network')); //실패
    },2000);
});

//2.Consumers : then, catch, finally  :제공된 데이터를 쓰는사람
promise
.then((value) => {   //프로미스가 정상적으로 실행이되면 
    console.log(value);//프로미스 리턴함 끝나면 catch로 보내줌 
})
.catch(error => {   //실패 실행
    console.log(error);
})
.finally(() => {//성공하든 실패하든 무족건 실행이됨
    console.log('finally');
});

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
});

//then 값을 바로 전달해도 되고 Promise를 전달해도된다 
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)   
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

    //4. Error Handling 
    const getHen = () => 
        new Promise((resolve, reject) => {
            setTimeout(()=> resolve('🐔'), 1000);
        });
    const getEgg = hen => 
        new Promise((resolve, reject) => {
            setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)), 1000);
        });
    const cook = egg => 
        new Promise((resolve, reject) => {
            setTimeout(()=> resolve(`${egg} => 🍳`), 1000);
        });
    
    getHen() 
    .then(getEgg)   //콜백함수를 전달할때 받아오는 벨류를 다음 함수로 호출하는 경우에는앞에가 생략이 가능함
    .catch(error => {
        return '🥦' ;
    })
    .then(egg => cook(egg))
    .then(console.log)
    .catch(console.log);