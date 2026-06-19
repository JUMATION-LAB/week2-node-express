require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT
app.use(express.json());


//Middleware to handle requests
app.use((err , req , res , next)=>{
    console.log(`The ${req.method},at ${new Date()}`);
    next();
})

app.use(express.static(path.join(__dirname, 'public' )))

//URL - http://localhost:3000 
app.get('/' , (req, res)=>{
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.send("My Week 2 API!");
});

//URL - http://localhost:3000/user 
app.post('/user' , (req, res)=>{
    const { name } = req.body;
    if(!name) return res.status(400).json({ error : "missing input"})
    res.status(200).json(`Hello ${name}`);
});

//URL - http://localhost:3000/user/102 
app.get('/user/:id' , (req, res)=>{
    const id  = req.params.id;
    res.send(`User ${id} profile.`);
});






app.listen( PORT , ()=>{
    console.log(`App listening at http://localhost:${PORT}`)
});


