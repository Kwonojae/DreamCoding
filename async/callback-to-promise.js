'use strict'

//Callback Hell example
class UserStorage {
    loginUser(id, password) { //사용자를 로그인 하는것 
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(
                    (id === 'Ojea' && password === 'dream') ||
                    (id === 'Coder' && password === 'academy')
                ) {
                    resolve(id);//두개중 한개의 조건이 맞으면 onSuccess 콜백을 불러주고 id를 전달해줌
                } else {
                    reject(new Error('not found')); //조건이 안맞으면 onError 콜백이 실행됨 
                }
            }, 2000);
        });
    }

    getRoles(user) {   
        //사용자의 데이터를 받아서 사용자마다 가지고있는 어드민이나 게스트나 
        //그런 역활들을 서버에서 요청해서 다시 정보를 받아오는 api가 있다고 생각하자 
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                if(user === 'Ojea') { //사용자가 엘리이면 
                    resolve({name:'ellie', role: 'admin'}); //onSuccess 를 호출하고 오브젝트를 전달해줌
                } else {
                    reject(new Error('no access')); //아니면 onError전달
                }
            }, 1000)
        })
        

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage     //
.loginUser(id, password)//로그인이 성공하면 
.then(userStorage.getRoles)//유저가 전달되고 유저를 이용해서 getRoles를 호출함
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`)) //모든게 다 성공적으로 전달되면 최종적으로 받아오는 user를 이용해서 실행됨
.catch(console.log);

