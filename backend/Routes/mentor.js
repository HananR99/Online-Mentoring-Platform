import express from "express";
import { 
    updateMentor,
    deleteMentor,
    getAllMentor, 
    getSingleMentor, 
    getMentorProfile
} from "../Controllers/mentorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js';

const router = express.Router()

//nested route 
router.use("/:mentorId/reviews", reviewRouter);

router.get('/:id', getSingleMentor);
router.get('/', getAllMentor);
router.put('/:id', authenticate, restrict(["mentor"]), updateMentor);
router.delete('/:id', authenticate, restrict(["mentor"]), deleteMentor);

router.get('/profile/me', authenticate, restrict(["mentor"]),getMentorProfile);

export default router;