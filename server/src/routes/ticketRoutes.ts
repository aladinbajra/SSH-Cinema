import { Router } from 'express';
import {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicketById,
    deleteTicketById,
    getTicketsByPrice,
    getTicketsBySeatNumber
} from '../controllers/ticketController';

const router = Router();

router.post('/', createTicket);
router.get('/', getAllTickets);
router.get('/:id', getTicketById);
router.put('/:id', updateTicketById);
router.delete('/:id', deleteTicketById);
router.get('/price/:price', getTicketsByPrice);
router.get('/seat/:seatNumber', getTicketsBySeatNumber);

export default router;
