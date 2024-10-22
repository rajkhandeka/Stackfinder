// server/emailService.js
import nodemailer from 'nodemailer';

export const sendEmail = async (recipient, results) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: 'your-email@gmail.com', // Your email address
            pass: 'your-email-password', // Your email password
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: recipient,
        subject: 'Search Results from Tech Solver',
        text: `Here are your search results:\n\n${JSON.stringify(results, null, 2)}`,
    };

    await transporter.sendMail(mailOptions);
};
