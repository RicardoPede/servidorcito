import { Router } from 'express';
import { createUpdateProductValidation, getProductValidation, deleteProductValidation } from '../validator/validation.products.js';
import { getProducts, createProduct, getProduct, updateProduct, deleteProduct } from '../controllers/productos.controllers.js';
import { authotize } from '../middleware/auth.js';

const router = Router();

router.get('/', getProducts);
router.post('/', authotize(['admin', 'vendedor']), createUpdateProductValidation, createProduct);
router.get('/:id', getProductValidation, getProduct);
router.put('/:id', authotize(['admin', 'vendedor']), createUpdateProductValidation, updateProduct);
router.delete('/:id', authotize('admin'), deleteProductValidation, deleteProduct);

export default router;