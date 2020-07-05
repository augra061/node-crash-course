const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

setTimeout(() => {
    console.log('in the moment');
    clearInterval(int)
}, 3000);