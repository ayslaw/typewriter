const sentence = "hello there from lighthouse labs \n";
let delay = 0;
let increment = 80;
for (let i of sentence) {
    setTimeout(() => {
        process.stdout.write(i);
    }, delay);
    delay += increment;
};