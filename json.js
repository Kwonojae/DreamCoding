//JSON
//JavaScript Object Notation

//1, Object To JSON
//Stringfy(obj) 콜백함수를 전달해서 세밀하게 전달할수 있다.
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color:'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name', 'color', 'size']); //이름만 제이슨으로 원하는 프로퍼티는 배열로 받아올수있음
console.log(json);

//key와 value값 가져오기
json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value:${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//2. JSON to Object
//parse(json)   Json을 object로변환하는 방법
console.clear();

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value:${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
