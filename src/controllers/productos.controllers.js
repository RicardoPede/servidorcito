import ProductService from "../services/ProductService.js";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductService.getProducts();
        if (!products) {
            throw({
                status: 404,
                message: 'No products found'
            })
        } else {
            return res.json(products);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await ProductService.getProductById(req.params.id);
        if (!product) {
            throw({
                status: 404,
                message: 'Product not found'
            })
        } else {
            return res.json(product);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await ProductService.createProduct(req.body);
        return res.json(product);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateProduct = async (req, res) => {
    return res.json({
        message: 'PUT Product'
    });
}

export const deleteProduct = async (req, res) => {
    return res.json({
        message: 'DELETE Product'
    });
}
