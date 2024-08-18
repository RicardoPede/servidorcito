import { Router } from 'express';
import { getSales, createSale, getSale } from '../controllers/sale.controllers.js';

const router = Router();

router.get('/', getSales);
router.post('/', createSale);
router.get('/:id', getSale);

export default router;