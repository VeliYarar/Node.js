
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    /*
    //res.setHeader('content-Type','text/plain');
    //res.setHeader('content-Type','application/json');
    res.setHeader('content-Type','text/html');
    res.statusCode = 200;
    res.statusMessage = 'ok';

    //res.write(JSON.stringify({name: 'Samsuns S8', price:3000}));
    res.write('<html>');

    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Nodejs Server</body></h1> ')
    res.write('</html>');

    res.end();
    */

    fs.readFile('index.html', function(error, file){

        if(error){
            res.setHeader('content-Type','text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end('dosya bulunamadı')
          
        }else{
            res.setHeader('content-Type','text/html');
            res.statusCode = 200;
            res.statusMessage = 'Ok';
            res.end(file);

        }

    });

});


server.listen(3000);
console.log('listening port on 3000...');
