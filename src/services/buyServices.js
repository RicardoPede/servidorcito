import BuyObjet from '../models/BuyObjet.js';

class BuyService {
    constructor() {
        this.buyObjets = [];
    }
    async getBuys() {
        return await BuyObjet.find();
    }
    async getBuy(id) {
        return await BuyObjet.findById(id);
    }
    async createBuy(buy) {
        return await BuyObjet.create(buy);
    }
    async updateBuy(id, buy) {
        return await BuyObjet.findByIdAndUpdate(id, buy, { new: true });
    }
    async deleteBuy(id) {
        return await BuyObjet.findByIdAndDelete(id);
    }
}

export default new BuyService();