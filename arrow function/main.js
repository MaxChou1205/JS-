/// basic

// function sayHi() {
//     console.log("Hello world");
// }

const sayHi = (user) => {
    console.log("Hello World " + user);
}

sayHi("Max");

/// this
// ES5
// var person = {
//     name: "Max",
//     gender: "male",
//     testing: function() {
//         console.log(this); // person
//         (function() {
//             console.log(this); //window
//         })() // IIFE
//     }
// }

// person.testing();

//ES6
var person = {
    name: "Max",
    gender: "male",
    testing: function() {
        (() => {
            console.log(this);
        })()
    }
}
person.testing();


/// example

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

materials.map(function(material) {
    return material.length;
}); // [8, 6, 7, 9]

materials.map((material) => {
    return material.length;
}); // [8, 6, 7, 9]

materials.map(({
    length
}) => length); // [8, 6, 7, 9]