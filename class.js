'use strict';

//Class 데이터가 들어있지않고 틀만 정의해둠
//template  틀
//declare once  한번만 선언함
//no data in 데이터가 들어있지않음

//Object 실제로 데이터를 넣어서 만드는곳
//-instance of a class  
//created many times    많이 만들수있음
//data in   

//instance 
//설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
//즉, 객체를 소프트웨어에 실체화 하면 그것을 ‘인스턴스’라고 부른다.
//실체화된 인스턴스는 메모리에 할당된다.

//Object-oriendted programming
//class: template   
//object: instance of a class 데이터를 넣어서 만드는것
//JavaScript Classes
//-introduced in ES6
//-syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    //constructor 
    constructor(name, age) {    //생성자 오브젝트를 만들때 필요한 데이터를 전달함
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;// = age 가 할당할때 set age가 호출이된다 set age로 가져온 값을 get age로 리턴해준다 
    }

    get age(){      //값을 리턴
        return this._age;
    }

    set age(value){ //값을 설정하기 때문에 value를 받아와야함
        this._age = value < 0 ? 0 : value;  //value가 값이 - 라면 0을쓰고 아니면 지정된  value를 쓰겠다
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3. Fields (public, private)
//Too soon!

    class Experiment { 
    publicField = 2;        //외부에서 접근가능
    #privateField = 0;      //클래스 내부에서만 값이 보여지고 접근가능하고 값이 변경가능 외부에서는 불가능
}

const experiment = new Experiment();       
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon!
class Article {      //들어오는 오브젝에 상관없이 공통적으로 클래스에서 쓸수있는거라면 스테틱과 스테틱 메소드를 사요하는게 메모리사용을 줄일수있음
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {       
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);         //static은 object마다 할당되는것이 아니고 class자체에 붙어있음
console.log(experiment.publicField);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


//5. Inheritance 상속과 다형성 유지보수 쩔음
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `Triangle: color: ${this.color}`; 
    }
}


class Rectangle extends Shape{}
class Triangle extends Shape{
    
    draw() {
            super.draw();   //draw메소드를 오버라이딩해서 위에 shape에 정의된 draw가 호출되지 않는다 그래서 super를  부모의 메소드를 호출 한다 다향성
        console.log('🔺');//오버라이딩해서 출력
    }
    getArea() {
        return (this.width * this.height) / 2;//필요한 함수만 재정의해서 사용할수있다 오버라이딩 위에 getArea를 재정의
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf    왼쪽의 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 아닌지 확인해주는거 true or false
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());