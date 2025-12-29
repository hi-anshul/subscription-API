import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js';

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { username, email, password } = req.body;
        
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);   

        const newUsers = await User.create([{ username, email, password: hashedPassword }], { session });

        const token = jwt.sign({ id: newUsers[0]}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ success: true, user: newUsers[0], message: 'User created successfully', token });


    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
         }


};

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.status(200).json({ success: true, message: 'User signed in successfully', user, token });

    } catch (error) {
        next(error);
    }
};

export const signOut = async (req, res) => {
    // Implementation for user logout
};  