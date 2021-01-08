'use strict'

// JavaScript is synchronous.: 자바스크립트는 동기적이다 .
//Excute the code block by orger after hoisting. : 호이스팅이 된 이후부터 코드를 작성한 순서에 맞춰 동기적으로 실행된다
//hoisting : var , function declartion : 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다 
//hoisting : 함수,선언들이 자동적으로 제일 위로 올라가는것
//synchronous: 동기 정해진 순서에 맞게 실행되는 것 
//Asynchronous : 비동기 적으로 언제 코드가 실행될지 예측 할수 없는것 
//callback : 우리가 전달해준 함수를 불러준다 

console.log('1'); //동기
setTimeout(() => console.log('2'), 1000); //비동기
console.log('3');   //동기

//synchronous callback  즉각적으로 실행되는 동기적으로
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello')); //동기 

//Asynchronous callback 언제 실행될지 예측 불가능한 비동기

//hoisting : 함수,선언들이 자동적으로 제일 위로 올라가는것 

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);//비동기 

//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) { //사용자를 로그인 하는것 
        setTimeout(()=>{
            if(
                (id === 'Ojea' && password === 'dream') ||
                (id === 'Coder' && password === 'academy')
            ) {
                onSuccess(id);//두개중 한개의 조건이 맞으면 onSuccess 콜백을 불러주고 id를 전달해줌
            } else {
                onError(new Error('not found')); //조건이 안맞으면 onError 콜백이 실행됨 
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {   
        //사용자의 데이터를 받아서 사용자마다 가지고있는 어드민이나 게스트나 
        //그런 역활들을 서버에서 요청해서 다시 정보를 받아오는 api가 있다고 생각하자 
        setTimeout(()=> {
            if(user === 'Ojea') { //사용자가 엘리이면 
                onSuccess({name:'ellie', role: 'admin'}); //onSuccess 를 호출하고 오브젝트를 전달해줌
            } else {
                onError(new Error('no access')); //아니면 onError전달
            }
        }, 1000)

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => { //사용자가 로그인되었다면
        userStorage.getRoles( 
            user,
            userWithRole => { //사용자가 성공적으로 로그인 되고 사용자의 Roles를 잘 받아왔을때에 실행이됨
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)