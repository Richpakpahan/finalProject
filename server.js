const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const { buildSchema} = require ('graphql');
const expressGraphql = require('express-graphql');

const app=express();
const PORT =process.env.PORT  || 3001;
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.json("Hallo")
})

app.listen(PORT,()=>{
    console.log(`Spending app is running on port ${PORT}`);
})

