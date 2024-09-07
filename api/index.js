const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app = express();

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

console.log(process.env.MONGO_URL)
const MONGO_URL = process.env.MONGO_URL


// testig

app.get('/api/test', (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    res.json('test ok');
})



app.post('/api/register', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const { name, email, password } = req.body;
  
    try {
      const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } catch (e) {
      res.status(422).json(e);
    }
  
  });







app.listen(4000);