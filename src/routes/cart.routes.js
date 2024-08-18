import { Router } from 'express';
import { getCart, createCart, deleteCart, updateCart } from '../controllers/cart.controllers.js';

const router = Router();

router.get('/', getCart);
router.post('/', createCart);
router.delete('/:id', deleteCart);
router.put('/:id', updateCart);

export default router;