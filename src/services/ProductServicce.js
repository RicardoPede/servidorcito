import Product from '../models/ProductObjet.js';

class ProductService {
    constructor() {
        this.products = [];
    }
    async getProducts() {
        return await Product.find();
    }
    async getProduct(id) {
        return await Product.findById(id);
    }
    async createProduct(product) {
        return await Product.create(product);
    }
    async updateProduct(id, product) {
        return await Product.findByIdAndUpdate(id, product, { new: true });
    }
    async deleteProduct(id) {
        return await Product.findByIdAndDelete(id);
    }
}

export default new ProductService();