// routes/userRoutes.ts
import { Router } from 'express';
import { getUserGreeting } from '../controllers/userController';

const router = Router();

// Define a route
router.get('/greet', getUserGreeting);

export default router;
