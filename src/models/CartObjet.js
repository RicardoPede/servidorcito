import { Schema, model } from 'mongoose';
import ProductClassSchema from './ProductClass.js';

const CartObjetSchema = new Schema({
    products: [
        {
            ...ProductClassSchema.obj,
            amount: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        }
    ],
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

const CartObjet = model('cart', CartObjetSchema);
export default CartObjet;