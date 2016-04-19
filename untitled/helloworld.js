var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.end('hello world~');
}).listen(3001);

console.log('server start>>>>....ctrl-c terminate');