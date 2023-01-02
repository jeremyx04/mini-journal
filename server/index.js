const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/entrys', async(req, res) => {
    try{
        
    } catch (err){
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log('server listening on port 5000');
});