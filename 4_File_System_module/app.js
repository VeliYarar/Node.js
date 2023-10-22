
const fs = require('fs');
// dosyalar ile işlememler için kullanılır 
/*
const files = fs.readdir('./', function(error, data){
    
    if (error){
        console.log(error);
    }

    else{
        console.log(data);
    }


});
*/
/*
const data = fs.readFile('index.html','utf-8', function(error, data) {

    if (error){
        console.log(error);
    }

    else {
        console.log(data);

    }


});
*/
/*
fs.writeFile('deneme.txt', 'Hello world..', function(error){

// onceki içeriği siler yazar

    if (error){
        console.log(error);
    }

    else {
        console.log('dosya oluşturuldu');

    }


});
*/
/*
fs.appendFile('deneme1.txt', 'Hello world...', function(error){
// içinde birşey varsa üzerine yazar

    if (error){
        console.log(error);
    }

    else {
        console.log('dosya oluşturuldu');

    }


});
*/
/*
fs.unlink('deneme1.txt', function(error){

    console.log('dosya silindi.')
});

*/

fs.rename('deneme.txt', 'deneme1.txt', function(error){

    console.log('isim değişti')
})