import SaleService from '../services/saleServices.js';

export const getSales = async (req, res) => {
    try {
        const sales = await SaleService.getSales();
        if (!sales) {
            throw({
                status: 404,
                message: 'No sales found'
            })
        } else {
            return res.json(sales);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const getSale = async (req, res) => {
    try {
        const sale = await SaleService.getSale(req.params.id);
        if (!sale) {
            throw({
                status: 404,
                message: 'Sale not found'
            })
        } else {
            return res.json(sale);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const createSale = async (req, res) => {
    try {
        const sale = await SaleService.createSale(req.body);
        return res.json(sale);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
