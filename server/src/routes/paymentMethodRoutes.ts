import { Router } from 'express';
import {
    getAllUserPaymentMethods,
    getUserPaymentMethodById,
    getUserPaymentMethodByCardNumber,
    getUserPaymentMethodByCVV,
    createUserPaymentMethod,
    updateUserPaymentMethodById,
    deleteUserPaymentMethodById
} from '../controllers/paymentMethodController';

const router = Router();

router.get('/user-payment-methods', getAllUserPaymentMethods);
router.get('/user-payment-methods/:id', getUserPaymentMethodById);
router.get('/user-payment-methods/card/:cardNumber', getUserPaymentMethodByCardNumber);
router.get('/user-payment-methods/cvv/:cvv', getUserPaymentMethodByCVV);
router.post('/user-payment-methods', createUserPaymentMethod);
router.put('/user-payment-methods/:id', updateUserPaymentMethodById);
router.delete('/user-payment-methods/:id', deleteUserPaymentMethodById);

export default router;
