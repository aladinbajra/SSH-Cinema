import express, { Router } from 'express';
import {
    createMembership,
    getAllMemberships,
    getMembershipById,
    updateMembership,
    deleteMembership,
    getMembershipsByStartDate,
    getMembershipsByEndDate,
    getMembershipsByUserId
} from '../controllers/membershipController';

const router: Router = express.Router();

router.post('/', createMembership);
router.get('/', getAllMemberships);
router.get('/:id', getMembershipById);
router.put('/:id', updateMembership);
router.delete('/:id', deleteMembership);
router.get('/start-date/:startDate', getMembershipsByStartDate);
router.get('/end-date/:endDate', getMembershipsByEndDate);
router.get('/user/:userId', getMembershipsByUserId);

export default router;
