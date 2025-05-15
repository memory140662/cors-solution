const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    
    if (req.url === '/api/test') {
    res.end(JSON.stringify({ message: 'Ok' })) 
        return
    }

    res.statusCode = 404
    res.end(JSON.stringify({ message: 'Not found.' }))
})

server.listen(PORT, () => console.log(`server start ${PORT}`))