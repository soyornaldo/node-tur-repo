
const http = require('http');

const server = http.createServer((req,res)=>{
    switch(req.url){
        case '/': { res.end('Welcome to our home page'); break;}
        case '/about': {res.end('Here is our short history'); break;}
        default: {
            res.end(`
                     <h1>Oops!</h1>
                     <p> We can't seem to find the page you are looking for </p>
                     <a href="/">back home</a>
                  `);
                  break;
        }
    }    

});

server.listen(5000);