//console.log(this); // window

// calculateAge(1985); //window
// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }


var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction(); // window
    }
}
john.calculateAge(); // john object


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge(); // mike object