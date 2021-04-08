const http=require('http')

const server=http.createServer((req,res)=>{
    //console.log(res);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> Can't find the page </p>
    <a href="/"> back to home</a>
    `)
    // res.write('welcome to our home page')
    // res.end()
})

server.listen(5000)