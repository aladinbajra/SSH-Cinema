import { Router } from 'express';
import {
    getAllPromotions,
    getPromotionById,
    createPromotion,
    updatePromotionById,
    deletePromotionById,
    getPromotionByPercentage,
    updatePromotionByPercentage
} from '../controllers/promotionController';

const router = Router();

router.get('/promotions', getAllPromotions);
router.get('/promotions/:id', getPromotionById);
router.post('/promotions', createPromotion);
router.put('/promotions/:id', updatePromotionById);
router.delete('/promotions/:id', deletePromotionById);
router.get('/promotions/percentage/:promotionPercentage', getPromotionByPercentage);
router.put('/promotions/percentage/:promotionPercentage', updatePromotionByPercentage);

export default router;
