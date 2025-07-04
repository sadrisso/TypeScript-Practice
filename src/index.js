var welcome = function (person) {
    return console.log("Welcome ".concat(person === null || person === void 0 ? void 0 : person.name, " Your age is ").concat(person === null || person === void 0 ? void 0 : person.age));
};
var userDetails = function (id, age) {
    return console.log("your id is: ".concat(id, " and age is ").concat(age === null || age === void 0 ? void 0 : age.age));
};
var myInfo = function (name, age, country) {
    return "My name is ".concat(name, " I am ").concat(age, " years old And I live in ").concat(country);
};
var getAge = function (birthYear, persentYear) {
    return "My age is: ".concat(persentYear - birthYear);
};
var vegetables = ['alu', 'potol', 'lau', 'kumra', 90, true];
welcome({ name: "Drisso", age: 25 });
userDetails(1, { name: "drisso", age: 25 });
var calculation;
calculation = function (x, y, z) {
    if (z === "Add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(4, 3, ""));
console.log(getAge(2001, 2025));
console.log(vegetables);
