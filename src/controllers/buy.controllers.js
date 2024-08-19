import BuyService from '../services/buyServices.js';
import ProductService from '../services/ProductService.js';

export const getBuys = async (req, res) => {
    try {
        const buys = await BuyService.getBuys();
        if (!buys) {
            throw({
                status: 404,
                message: 'No buys found'
            })
        } else {
            return res.json(buys);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const getBuy = async (req, res) => {
    try {
        const buy = await BuyService.getBuy(req.params.id);
        if (!buy) {
            throw({
                status: 404,
                message: 'Buy not found'
            })
        } else {
            return res.json(buy);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const createBuy = async (req, res) => {
    try {
        const { products } = req.body;
        for (let product of products) {
            const { _id, amount } = product;
            const productData = await ProductService.getProductById(_id);
            if (!productData) {
                throw({
                    status: 404,
                    message: 'Product not found'
                })
            }
            if (productData.stock < amount) {
                throw({
                    status: 400,
                    message: 'Not enough stock'
                })
            }
        }
        for (let product of products) {
            const { _id, amount } = product;
            const productData = await ProductService.getProductById(_id);
            const newStock = productData.stock - amount;
            await ProductService.updateProduct(_id, { stock: newStock });
        }

        const buyData = {
            // user: req.user._id
            user: '66c33ae79f8201e226c873e5',
            products: req.body.products
        }
        if (!buyData.user || !buyData.products) {
            throw({
                status: 400,
                message: 'User and Products are required'
            })
        }
        console.log(buyData);
        const buy = await BuyService.createBuy(buyData);
        return res.json(buy);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
