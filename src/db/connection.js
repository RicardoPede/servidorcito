import mongoose from 'mongoose';
import { URI } from '../config/config.js';

export const dbConnection = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }
}