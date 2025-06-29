type stringOrNumber = string | number;
type userType = {name: string, age: number};

const welcome = (person: userType) => {
    return console.log(`Welcome ${person?.name} Your age is ${person?.age}`)
}

const userDetails = (id: stringOrNumber, age: userType) => {
    return console.log(`your id is: ${id} and age is ${age?.age}`)
}

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