import express from 'express';
import { sendEmail } from '../controllers/EmailController.js';

const router = express.Router();

// POST route for sending email
router.post('/send-email', sendEmail);

export default router;
