import { Router } from 'express';
import {
    createSnack,
    getAllSnacks,
    getSnackById,
    getSnackByPrice,
    updateSnackById,
    updateSnackByPrice,
    deleteSnackById
} from '../controllers/snackController';

const router = Router();

router.post('/', createSnack);
router.get('/', getAllSnacks);
router.get('/:id', getSnackById);
router.get('/price/:price', getSnackByPrice);
router.put('/:id', updateSnackById);
router.put('/price/:price', updateSnackByPrice);
router.delete('/:id', deleteSnackById);

export default router;
