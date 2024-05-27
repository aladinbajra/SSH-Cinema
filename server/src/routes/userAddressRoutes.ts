import { Router } from 'express';
import {
    getAllUserAddresses,
    getUserAddressById,
    createUserAddress,
    updateUserAddressById,
    deleteUserAddressById,
    updateUserAddressByDetails
} from '../controllers/userAddressController';

const router = Router();

router.get('/', getAllUserAddresses);
router.get('/:id', getUserAddressById);
router.post('/', createUserAddress);
router.put('/:id', updateUserAddressById);
router.delete('/:id', deleteUserAddressById);
router.put('/', updateUserAddressByDetails);

export default router;
