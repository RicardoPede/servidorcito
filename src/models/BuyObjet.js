import { Schema, model } from 'mongoose';
import ProductClassSchema from './ProductClass.js';

const BuyObjetSchema = new Schema({
    ...ProductClassSchema.obj,
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
});

const BuyObjet = model('buy', BuyObjetSchema);
export default BuyObjet;