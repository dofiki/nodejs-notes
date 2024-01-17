const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   // console.log("request made");
   //console.log(req.url, req.method);

   //set header content type
   //res.setHeader('content-Type', 'text/plain');
   //res.write("empty page :(");
   //res.end();

   //returing html page
    res.setHeader('content-Type','text/html')

    let path = './views/';

    switch(req.url){
        
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; //redirecting
            res.setHeader('location', '/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile( path, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', ()=>{ //localhost -> own computer -> 127.0.0.1
    console.log("listening for request on port 3000");
});



