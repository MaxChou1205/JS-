// function logWord(word) {
//     setTimeout(function() {
//         console.log(word);
//     }, Math.floor(Math.random() * 100) + 1);
// }

// function logAll() {
//     logWord("A");
//     logWord("B");
//     logWord("C");
// }

// logAll();

// callback
// function logWord(word, callback) {
//     setTimeout(function() {
//         console.log(word);
//         callback();
//     }, Math.floor(Math.random() * 100) + 1);
// }

// function logAll() {
//     logWord("A", function() {
//         logWord("B", function() {
//             logWord("C", function() {});
//         });
//     });
// }

// logAll();

//promise
function logWord(word) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(word);
            resolve();
        }, Math.floor(Math.random() * 100) + 1)
    });
}

function logAll() {
    logWord("A")
        .then(function() {
            return logWord("B");
        })
        .then(function() {
            return logWord("C");
        });
}

logAll();