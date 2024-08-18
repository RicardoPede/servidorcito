import { check } from 'express-validator';

export const createUpdateProductValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('stock', 'Stock is required').not().isEmpty()
];

export const getProductValidation = [
    check('id', 'ID is required').not().isEmpty()
];

export const deleteProductValidation = [
    check('id', 'ID is required').not().isEmpty()
];