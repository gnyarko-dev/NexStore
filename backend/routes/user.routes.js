import express from 'express';
import { signup, login, getUserById, getUserWithShops, updateUser, deleteUser } from '../controllers/user.controller.js';
import authenticate from '../middleware/authenticate.js'; // Optional: if using JWT authentication

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authenticate, getUserWithShops); // This is a protected route that requires login
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
