// closures

function outer() {
    let count =5;
    return function inner() {
        count++;
        console.log(`count: ${count}`);
    };
}

const counter = outer();
counter();
counter();