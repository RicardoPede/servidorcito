import BuyService from '../services/buyServices.js';

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
        const buy = await BuyService.createBuy(req.body);
        return res.json(buy);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
