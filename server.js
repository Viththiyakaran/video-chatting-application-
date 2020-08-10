const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
const server = require('http').Server(app);


app.get('/', (req,res )=>{
    res.status(200).send("Hello world");
})


server.listen(3030);