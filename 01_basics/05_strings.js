const name = "keertan"
const repoCount = 5

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('keertan');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4) // 0 to 4-1 tk chlta h ye
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);



const newStringOne = "    keertan      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://keertan.com/keertan%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))



// read the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#constructor