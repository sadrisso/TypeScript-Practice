type stringOrNumber = string | number;
type userType = {name: string, age: number};

const welcome = (person: userType) => {
    return console.log(`Welcome ${person?.name} Your age is ${person?.age}`)
}

const userDetails = (id: stringOrNumber, age: userType) => {
    return console.log(`your id is: ${id} and age is ${age?.age}`)
}

const myInfo = (name: string, age: stringOrNumber, country: string) : stringOrNumber => {
    return `My name is ${name} I am ${age} years old And I live in ${country}`
}

const getAge = (birthYear: number, persentYear: number) => {
    return `My age is: ${persentYear - birthYear}`;
}

const vegetables: (stringOrNumber | boolean)[] = ['alu', 'potol', 'lau', 'kumra', 90, true]

welcome({name: "Drisso", age: 25})
userDetails(1, {name: "drisso", age: 25})


let calculation: (a: number, b: number, c: string) => number;

calculation = (x: number, y: number, z: string) => {
    if (z === "Add") {
        return x+y;
    } else {
        return x-y;
    }
}

console.log(calculation(4, 3, ""))
console.log(getAge(2001, 2025))
console.log(vegetables)