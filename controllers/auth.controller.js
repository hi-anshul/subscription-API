import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { username, email, password } = req.body;
        
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //Hash password
        const salt = await bcrypt.gensalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);   

        const newUsers = await User.create([{ username, email, password: hashedPassword }], { session });

        const token = jwt.sign({ id: newUsers[0]}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ success: true, user: newUsers[0], message: 'User created successfully', token });
    } catch (error) {
         }


};

export const signIn = async (req, res) => {
    // Implementation for user login
};

export const signOut = async (req, res) => {
    // Implementation for user logout
};  