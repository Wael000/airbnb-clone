import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    
    const newUser = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 10)
    });
    
    newUser.save()
        .then(() => {
        res.json('User added');
        })
        .catch((err) => {
        console.error(err);
        });
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//  DB pasword: 5bbnV9YN0XJqW52F