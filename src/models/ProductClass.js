import { Schema } from 'mongoose';

const ProductClassSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    stock: { type: Number, required: true }
},{
    timestamps: true
});

export default ProductClassSchema;