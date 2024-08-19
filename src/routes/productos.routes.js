import { Router } from 'express';
import { createUpdateProductValidation, getProductValidation, deleteProductValidation } from '../validator/validation.products.js';
import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/productos.controllers.js';
import { authotize } from '../middleware/auth.js';

const router = Router();

router.get('/', getProducts);
router.post('/', authotize(['admin', 'seller']), createUpdateProductValidation, createProduct);
router.get('/:id', getProductValidation, getProductById);
router.put('/:id', authotize(['admin', 'seller']), createUpdateProductValidation, updateProduct);
router.delete('/:id', authotize(['admin']), deleteProductValidation, deleteProduct);

export default router;