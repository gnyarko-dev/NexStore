import express from 'express';
import upload from '../config/multer.config.js';
import { createProduct, getProductsByShop, updateProduct, deleteProduct, searchProducts } from '../controllers/product.controller.js';

const router = express.Router();

// Route to create a product with image upload
router.post('/', upload.single('image'), createProduct);

// Route to get all products for a shop
router.get('/shop/:shopId', getProductsByShop);

// Route to update a product
router.put('/:id', updateProduct);

// Route to delete a product
router.delete('/:id', deleteProduct);

// Route to search products for a shop
router.get('/shop/:shopId/search', searchProducts);

export default router;
