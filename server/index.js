const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://svetlovics:svetNC83@cluster0.idlzj.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB!')
  })
  .catch(err => console.log(err))

app.post('/api/register', async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user.save();
    res.json({ status: 'ok' });
  } catch (err) {
    console.log('error is: ', err)
    res.json({ status: 'error', error: 'Duplicate email' });
  }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    })

    if (user) {
      return res.json({status:'ok', user:true})
    } else {
      return res.json({status:'error', user:false})
    }
});

app.get('/hello', (req, res) => {
  res.send('hello world')
});

app.listen(1337, () => {
  console.log('Server running on port:1337')
});