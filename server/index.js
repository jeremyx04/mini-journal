const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require('./db');


app.use(cors());
app.use(express.json());

app.post('/entrys', async(req, res) => {
    try{
        const { liked, disliked } = req.body;
        const newEntry = await pool.query('INSERT INTO entry_table (liked) VALUES($1)',[liked]);
        console.log(disliked);
        res.json(newEntry);
    } catch (err){
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log('server listening on port 5000');
});