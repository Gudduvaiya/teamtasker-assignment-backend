import express from 'express';
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";
import { addComment ,removeComment} from '../controllers/commentsController.js';

const router = express.Router();

router.post("/create", userAuthMiddleware, addComment);
router.delete("/remove-cmt/:id", userAuthMiddleware, removeComment);



export default router;