const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

mongoose.connect('')




app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register',(req, res)=>{
    const {name,email,Password} = req.body;
    res.json({name,email,Password})
})
app.listen(4000);