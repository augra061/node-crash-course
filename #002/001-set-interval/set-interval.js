// setInterval method #1
function showHelloWorld() {
    console.log('Hello world');
};
setInterval(showHelloWorld, 1000);

// setInterval method #1
setInterval(function () {
    console.log('Hello world');
}, 1000);

// setInterval method #1
setInterval(() => {
    console.log('Hello world');
}, 1000);