import { Router } from 'express';
import {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment
} from '../controllers/paymentController';

const router = Router();

router.post('/payments', createPayment);
router.get('/payments', getAllPayments);
router.get('/payments/:id', getPaymentById);
router.put('/payments/:id', updatePayment);
router.delete('/payments/:id', deletePayment);

export default router;
