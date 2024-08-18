import { Router } from "express";
import { getUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/users.controllers.js";
import { createUserValidation, updateUserValidation, getUserValidation, deleteUserValidation } from "../validator/validation.users.js";

const router = Router();

router.get('/', getUsers);
router.post('/', createUserValidation, createUser);
router.get('/:id', getUserValidation, getUser);
router.put('/:id', updateUserValidation, updateUser);
router.delete('/:id', deleteUserValidation, deleteUser);

export default router;