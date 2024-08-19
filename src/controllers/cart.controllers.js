import CartService from '../services/cartServices.js';

export const getCart = async (req, res) => {
    try {
        const cart = await CartService.getCart();
        if (!cart) {
            throw({
                status: 404,
                message: 'No cart found'
            })
        } else {
            return res.json(cart);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const getCartById = async (req, res) => {
    try {
        const cart = await CartService.getCartById(req.params.id);
        if (!cart) {
            throw({
                status: 404,
                message: 'No cart found'
            })
        } else {
            return res.json(cart);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const createCart = async (req, res) => {
    try {
        const cartData = {
            ...req.body,
            // user: req.user._id
            user: '66c33ae79f8201e226c873e5'
        }
        if (!cartData) {
            throw({
                status: 400,
                message: 'Products are required'
            })
        }
        // console.log(cartData);
        const cart = await CartService.createCart(cartData);
        return res.json(cart);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const deleteCart = async (req, res) => {
    try {
        const cart = await CartService.deleteCart(req.params.id);
        return res.json(cart);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const deleteProductFromCart = async (req, res) => {
    try {
        const { id, productId } = req.params;
        console.log(id, productId);
        const cart = await CartService.getCartById(id);
        if (!cart) {
            throw({
                status: 404,
                message: 'No cart found'
            })
        }
        cart.products = cart[0].products.filter(product => product._id.toString() !== productId);
        if (cart.products.length === 0) {
            console.log('cart.products.length === 0', cart.products);
                await CartService.deleteCart(id);
                return res.json({
                        message: 'Cart deleted'
                    });
            } else {
            console.log('cart.products', cart.products);
            await CartService.deleteProductFromCart(id, productId);
            return res.json({
                message: 'Product removed from cart',
                cart
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}

export const updateCart = async (req, res) => {
    try {
        const cartData = {
            ...req.body,
            // user: req.user._id
            user: '66c33ae79f8201e226c873e5'
        }
        // console.log('cartData', cartData);
        const cart = await CartService.updateCart(req.params.id, cartData);
        console.log('cart', cart);
        return res.json(cart);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

