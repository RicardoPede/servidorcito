import CartObjet from '../models/CartObjet.js';

class CartServices {
    static async getCartById(id) {
        return CartObjet.find({ _id: id });
    }

    static async createCart(cart) {
        return CartObjet.create(cart);
    }

    static async deleteCart(id) {
        return CartObjet.findByIdAndDelete(id);
    }

    static async deleteProductFromCart(id, productId) {
        console.log(id, productId);
        return CartObjet.findByIdAndUpdate(id, { $pull: { products: { _id: productId } } }, { new: true });
    }

    static async updateCart(id, cart) {
        console.log(id, cart);
        try {
            const existingCart = await CartObjet.findById(id);
            // console.log('existingCart', existingCart);
            if (!existingCart) {
                throw new Error('Cart not found');
            }
            const existingProducts = existingCart.products;
            console.log('existingProducts', existingProducts);
            const newProducts = cart.products;
            // console.log('newProducts', newProducts);

            if (!Array.isArray(newProducts)) {
                throw new Error('newProducts is not an array');
            }

            newProducts.forEach(newProduct => {
                // console.log('newProduct', newProduct);
                if (newProduct.stock === undefined) {
                    throw new Error('Stock is not defined');
                }
                if (newProduct.stock < newProduct.amount) {
                    throw new Error('Stock is not enough');
                }
                const existingProduct = existingProducts.find(product => product._id.toString() === newProduct._id.toString());
                if (existingProduct) {
                    existingProduct.amount += newProduct.amount;
                } else {
                    existingProducts.push(newProduct);
                }
            });
            
            // console.log('existingProduct', existingProducts);
            existingCart.products = existingProducts;
            await existingCart.save();
            return existingCart;
        } catch (error) {
            console.error(error);
            throw error;
        }
        // return CartObjet.findByIdAndUpdate(id, { $addToSet: { products: { $each: cart.products } } }, { new: true });
    }
}

export default CartServices;