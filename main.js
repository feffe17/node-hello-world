console.log("hello node js");

const pin = process.env.PIN

console.log(pin);

const user = process.argv[2]

console.log(`L'user è ${user}`);

if (pin == 666 && user == "admin") {
    console.log(`Welcome ${user}`);
} else {
    console.log("Access restricted");
    
}

