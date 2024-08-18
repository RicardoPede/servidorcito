import { Schema, model } from 'mongoose';
import ProductClassSchema from './ProductClass.js';

const ProductSchema = new Schema({
  ...ProductClassSchema.obj,
});

const Product = model('product', ProductSchema);
export default Product;