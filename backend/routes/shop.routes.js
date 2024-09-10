import { Router } from 'express';
import { createShop, getAllShops, getShopById, updateShop, deleteShop, searchShops, getStatistics } from '../controllers/shop.controller.js';

const router = Router();

router.post('/', createShop);
router.get('/', getAllShops);
router.get('/:id', getShopById);
router.put('/:id', updateShop);
router.delete('/:id', deleteShop);
router.get('/search/shop', searchShops);
router.get('/statistics/s', getStatistics); // Retrieves analytics for shops and products

export default router;
