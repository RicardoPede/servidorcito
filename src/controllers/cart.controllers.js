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

export const createCart = async (req, res) => {
    try {
        const cart = await CartService.createCart(req.body);
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

export const updateCart = async (req, res) => {
    try {
        const cart = await CartService.updateCart(req.params.id, req.body);
        return res.json(cart);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

