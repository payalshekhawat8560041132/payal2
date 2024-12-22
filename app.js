const express = require('express');
const app = express;
const port = 3000;
app.use(express.json());
app.get('/',(req,res) => {
    res.send('hello world');
});

app.post('/data',(req,res)=>{
    const receivedData = req.body;
    res.json({
        message: 'data recieved',
        data: receivedData

    });
});

app.listen(port,()=>{
    console.log('server is running on http://localhost:${port}');
})