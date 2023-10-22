

(function(exports, require, module, __filename, __dirname){


    console.log(__filename);//path
    console.log(__dirname);
    var firstname = 'Veli';

    var log = function(name){
        console.log(name)
    }

    exports =  {

        firstname,
        log
    }
})();
