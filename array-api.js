//자바스크립트 9. 유용한 10가지 배열 함수들. Array APIs 총정리

// Q1. make a string out of an array    
//주어진 배열을 스트링으로 변환 
{
    //join 배열안의 모든 elements를 가져와서 스트링으로 리턴해줌
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');//구분자를 쓸수있다.
    console.log(result);
}   

// Q2. make an array out of a string
//     주어지는 스트링을 배열로 변환 
{
    //split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
    //문자열에서 separator가 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환됩니다.
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2); //(separator)구분자와 리미트 값을 정할수있다
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
//주어진 배열의 순서를 거꾸로
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);//배열 자체를 리버스함 
}

// Q4. make new array without the first two elements
//주어진 배열에서 1,2 번째 에외한 나머지 3개만 들어있는 새로운 배열을 만들어라 
{
    //slice 배열의 특정한 부분을 리턴해주는 시작점과 끝날부분 
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(0, 2);
    console.log(result);
    console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
//학생의점수를 90점인 찾아라 
{
    // find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
    // 그런 요소가 없다면 undefined를 반환합니다. 리턴값이 불리언
    const result = students.find(function (student, index) {
        return student.score === 90;
    });
    console.log(result);

    //arrow function
    const result1 = students.find((student) => student.score === 90);
    console.log(result);
}
// Q6. make an array of enrolled students
//수업에 등록한 학생들만 배열로 출력
{
    //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    //원하는것만 받아올수있음
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
//학생들의 배열에서 점수만 뽑아와서 새로운 배열을 만들어라 
// result should be: [45, 80, 90, 66, 88]
{   
    //map: 배열안에 들어있는 모든 요소 들을 우리가 전달해준 콜백 함수를 호출 하면서 콜백함수에서 리턴된 값으로 대체함
    //MDN map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
    const result = students.map((student)=> student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
//학생들중 50점보다 낮은들이 있는지 없는지 확인해 
{   
    //some 배열중에 어떤것이 만족하는게 있는지 없는 지 검사할때 사용함
    const result = students.some((student)=> student.score < 50);
    console.log(result);

    //every 모든 배열에 들어있는 모든 요소들이 조건을 충족해야만 true가  리턴됨 
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);

}

// Q9. compute students' average score
// 학생들의 평균 점수를 구해라
{
    //reduce: 원하는 시작점 부터 배열을 돌면서 무언가 값을 누적할때 쓴다 
    //prev 이전의 콜백 함수가 리턴되서 전달되고 
    //curr 배열의 아이템을 순차적으로 전달 받는다 
    //reduceRight : 배열의 제일 뒤에서부터 시작함 
    const result = students.reduce((prev, curr) => {
        console.log('------');
        console.log(prev);  //이전값 
        console.log(curr); // 지금 값 
        return prev + curr.score; //리턴 하는 값들이 prev로 순차적으로 전달됨 
    }, 0);
    console.log(result / students.length);

    //arrow function
    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
//학생들의 모든 점수를 스트링으로 변환해서 만든다.
{
    //학생들을 점수로 변환후 그 50점인 이상인애들만 필터링한후 join으로 스트링으로 리턴해준다
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50 )
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 학생들의 점수를 정렬해서 낮은점수부터 스트링으로 나오게해 
{
    //sort : 
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 뺀 결과가 0보다 크면 순서를 바꿈 뒤에것이 앞으로옴 
    .join();                //0보다 작으면 순서를 안바꿈 
    console.log(result);
}