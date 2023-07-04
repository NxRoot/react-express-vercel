
const express = require('express')
const app = express()

// create api endpoints
app.get('/api/message', (req, res) => {
    res.json({message: "Hello from Express JS"})
});

// if not in production use the port 5001
const PORT = process.env.PORT || 8081
console.log('Server started on port:',PORT)
app.listen(PORT)