import { Schema, model } from 'mongoose';
import ProductClassSchema from './ProductClass.js';

const SaleObjetSchema = new Schema({
    ...ProductClassSchema.obj,
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
});

const SaleObjet = model('sale', SaleObjetSchema);
export default SaleObjet;