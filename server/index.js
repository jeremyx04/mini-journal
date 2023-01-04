const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/entrys', async(req, res) => {
    try{
        const { liked, disliked } = req.body;
        const newEntry = await pool.query('INSERT INTO entry_table(liked, disliked) VALUES($1,$2) RETURNING *',
        [liked,disliked]);
        res.json(newEntry.rows[0]);
    } catch (err){
        console.log(err.message);
    }
});

app.get('/entrys', async(req, res) => {
    try{
        const allEntrys = await pool.query('SELECT * FROM entry_table');
        res.json(allEntrys.rows);
    } catch (err){
        console.log(err.message);
    }
});

app.get('/entrys/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const entry = await pool.query('SELECT * FROM entry_table WHERE id = $1', [id]);
        res.json(entry.rows);
    } catch (err){
        console.log(err.message);
    }
});

app.put('/entrys/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const { liked, disliked } = req.body;
        const updateEntry = await pool.query('UPDATE entry_table SET liked = $1, disliked = $2 WHERE id = $3',
        [liked, disliked, id]);
        res.json('Updated ' + id);
    }catch (err){
        console.log(err.message);
    }
});

app.delete('/entrys/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const deleteEntry = await pool.query('DELETE FROM entry_table WHERE id = $1',[id]);
        res.json(id + ' deleted');
    }catch (err){
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});

