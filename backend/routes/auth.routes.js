import express from 'express';
import {

requestPasswordReset,
resetPassword,
sendVerificationEmail,
verifyEmail,
} from '../controllers/auth.controller.js';

const router = express.Router();

// Route to request password reset
router.post('/request-password-reset', requestPasswordReset);

// Route to reset password
router.post('/reset-password', resetPassword);

// Route to send verification email
router.post('/send-verification-email', sendVerificationEmail);

// Route to verify email
router.post('/verify-email', verifyEmail);

export default router;
