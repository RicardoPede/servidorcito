import CartObjet from '../models/CartObjet.js';

class CartServices {
    static async getCart() {
        return CartObjet.find();
    }

    static async createCart(cart) {
        return CartObjet.create(cart);
    }

    static async deleteCart(id) {
        return CartObjet.findByIdAndDelete(id);
    }

    static async updateCart(id, cart) {
        return CartObjet.findByIdAndUpdate(id, cart, { new: true });
    }
}

export default CartServices;