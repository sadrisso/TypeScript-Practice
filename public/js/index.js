"use strict";
const welcome = (person) => {
    return console.log(`Welcome ${person === null || person === void 0 ? void 0 : person.name} Your age is ${person === null || person === void 0 ? void 0 : person.age}`);
};
const userDetails = (id, age) => {
    return console.log(`your id is: ${id} and age is ${age === null || age === void 0 ? void 0 : age.age}`);
};
const myInfo = (name, age, country) => {
    return `My name is ${name} I am ${age} years old And I live in ${country}`;
};
const getAge = (birthYear, persentYear) => {
    return `My age is: ${persentYear - birthYear}`;
};
const vegetables = ['alu', 'potol', 'lau', 'kumra', 90, true];
welcome({ name: "Drisso", age: 25 });
userDetails(1, { name: "drisso", age: 25 });
let calculation;
calculation = (x, y, z) => {
    if (z === "Add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(4, 3, ""));
getAge(2001, 2025);
