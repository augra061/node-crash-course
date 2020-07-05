// setTimeout method #1
function showHelloWorld() {
    console.log('Hello world');
};
setTimeout(showHelloWorld, 1000);

// setTimeout method #2
setTimeout(function () {
    console.log('Hello world');
}, 2000);

// setTimeout method #3
setTimeout(() => {
    console.log('Hello world');
}, 3000);