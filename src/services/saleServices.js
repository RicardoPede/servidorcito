import SaleCart from '../models/SaleObjet.js';

class SaleService {
    constructor() {
        this.sales = [];
    }
    async getSales() {
        return await SaleCart.find();
    }
    async getSale(id) {
        return await SaleCart.findById(id);
    }
    async createSale(sale) {
        return await SaleCart.create(sale);
    }
}

export default new SaleService();