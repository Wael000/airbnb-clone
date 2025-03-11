import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5175',
    credentials: true
}));
app.use(cookieParser());

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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({
        email
    });

    if (!user) {
        return res.status(404).json('User not found');
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.json('Wrong password');
    }
    
    const token = jwt.sign({
        id: user._id,
        name: user.name,
    }, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) {
            console.error(err);
        }
        
        res.cookie('token', token).json(user);
    });
});

app.get('/user', (req, res) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.json(null);
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.json(null);
        }
        
        res.json(user);
    });
});

app.get('/logout', (req, res) => {
    res.clearCookie('token').json('User logged out');
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