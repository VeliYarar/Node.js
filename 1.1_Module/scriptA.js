// // browser

// //LIFE
// var contrllerA = (function(){

//     var firstname = 'yarar';

//     var log = function(){
//         console.log(this.firstname)

//     };
//     return {
//         firstname
//     }

// })();


//node.js

//public members 
var firstname = 'Veli';

// private members
var age = 30;

var log = function(name){
    console.log(name)
}

// module.exports.name = firstname
// module.exports.log = log;
/////////////////////////
// module.export={

//     name: firstname,
//     log: log
// }


module.exports ={

    firstname,
    log
}





