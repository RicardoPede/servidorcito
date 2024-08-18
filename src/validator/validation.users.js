import { check } from "express-validator";

export const createUserValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty()
];

export const updateUserValidation = [
    check('id', 'ID is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty()
];

export const getUserValidation = [
    check('id', 'ID is required').not().isEmpty()
];

export const deleteUserValidation = [
    check('id', 'ID is required').not().isEmpty()
];

export const loginValidation = [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty()
];