import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    date: { type: Date, default: Date.now }
},{
    timestamps: true
});

const User = model('User', UserSchema);
export default User;