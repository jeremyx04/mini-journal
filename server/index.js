const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require('./db');

const parse = (month) => {
    return new Date(Date.parse(month+" 1, 0")).getMonth()+1;
}
app.use(cors());
app.use(express.json());

app.post('/entrys', async(req, res) => {
    try{
        const { liked, disliked, date} = req.body;
        let m = parse(date.split(' ')[0]);
        let d = date.split(' ')[1], y = date.split(' ')[2];
        let id = ""+d+m+y;
        const newEntry = await pool.query('INSERT INTO entry_table(id, liked, disliked, date) VALUES($1,$2,$3,$4) RETURNING *',
        [id,liked,disliked,date]);
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
        console.log("trying to get " + id);
        const entry = await pool.query('SELECT * FROM entry_table WHERE id = $1', [id]);
        if(entry.rows.length==0){
            res.json(null);
        }
        else{
            res.json(entry.rows);
        }
    } catch (err){
        console.log(err.message);
    }
});

app.put('/entrys/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const { liked, disliked, date} = req.body;
        const updateEntry = await pool.query('UPDATE entry_table SET liked = $1, disliked = $2, date = $3 WHERE id = $4',
        [liked, disliked, date, id]);
        //console.log('Updated ' + id + ' to ' + liked + ',' + disliked);
        res.json('Updated');
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

