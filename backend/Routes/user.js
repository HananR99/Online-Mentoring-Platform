import express from "express";
import { 
    updateUser,
    deleteUser,
    getAllUser, 
    getSingleUser ,
    getUserProfile,
    getMyAppointments
} from "../Controllers/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get('/:id', authenticate, restrict(["mentee"]), getSingleUser);
router.get('/', authenticate, restrict(["admin"]), getAllUser);
router.put('/:id', authenticate, restrict(["mentee"]), updateUser);
router.delete('/:id', authenticate, restrict(["mentee"]), deleteUser);
router.get('/profile/me', authenticate, restrict(["mentee"]), getUserProfile);
router.get('/appointments/my-appointments', authenticate, restrict(["mentee"]), getMyAppointments);

export default router;