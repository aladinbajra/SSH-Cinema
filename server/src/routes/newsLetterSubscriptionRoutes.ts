import { Router } from 'express';
import {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
} from '../controllers/newsLetterSubscriptionController';

const router = Router();

router.post('/subscriptions', createSubscription);
router.get('/subscriptions', getAllSubscriptions);
router.get('/subscriptions/:id', getSubscriptionById);
router.put('/subscriptions/:id', updateSubscription);
router.delete('/subscriptions/:id', deleteSubscription);

export default router;
