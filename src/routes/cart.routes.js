import { Router } from 'express';
import { getCart, getCartById, createCart, deleteCart, deleteProductFromCart, updateCart } from '../controllers/cart.controllers.js';
import { authotize } from '../middleware/auth.js';

const router = Router();

router.get('/', authotize(['admin']), getCart);
router.get('/:id', getCartById);
router.post('/', createCart);
router.delete('/:id', deleteCart);
router.delete('/:id/:productId', deleteProductFromCart);
router.put('/:id', updateCart);

export default router;