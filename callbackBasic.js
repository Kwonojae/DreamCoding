class Counter {
    constructor(renEveryFiveTimes) {
        this.counter = 0;
        this.callback = renEveryFiveTimes;
    }
    
    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomthing(num) {
    console.log(`wow! ${num}`);
}
function alertNum(num) {
    alert(`wow! ${num}`);
}

const printCounter = new Counter(printSomthing);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();


alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();

