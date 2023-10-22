const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res)=>{


    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url == '/'){
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>

                </head>    
                <body>
                    <form method="POST" action ="/log" >
                        <input type ="text" name ="message">
                        <button type="submit">Save</button>

                    <form>
                </body>
            <html>

        
        `);
        return res.end();
    }
    if(url === '/log' && req.method === 'POST'){

        // body parsing (bodyParser)

        const body =[];

        req.on('data',(chunk)=>{

        body.push(chunk);
            console.log(chunk);
        });

        req.on('end', ()=>{
            const bodyParsed = Buffer.concat(body).toString;
            const mesaj = bodyParsed.split('='[1]);
            fs.appendFileSync('message.txt','message');
            console.log(qs.parse(bodyParsed));

        })

        fs.appendFileSync('message.txt','\ndeneme');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();

    }


});
server.listen(3000);
console.log('listening 3000..');
