import { Router } from 'express';
import {
  createDiscount,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount
} from '../controllers/discountController';

const router = Router();

router.post('/discounts', createDiscount);
router.get('/discounts', getAllDiscounts);
router.get('/discounts/:id', getDiscountById);
router.put('/discounts/:id', updateDiscount);
router.delete('/discounts/:id', deleteDiscount);

export default router;
