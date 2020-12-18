// 객체 초기자
//Shorthand property names

{
    const ellie1 = {
        name : 'Ellie',
        age: '18',
    }

    const name = 'Ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age,
    };

    const ellie3 = {
        name,
        age,
    }

    console.log(ellie2);
}