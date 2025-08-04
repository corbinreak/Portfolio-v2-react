const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


// Test to see if enviroment variables are loaded correctly
console.log('Email user:', process.env.EMAIL_USER);
console.log('Email pass length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length: 'undefined');

//Middleware
app.use(cors());
app.use(express.json());


// Email transport setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

//Contact route
app.post('/api/contact', async (req, res) => {
    const { email, subject, message } = req.body;

    // Validate input
    if(!email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        //Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                `,
                replyTo: email
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send email. Please try again later.'
        });
    }
});

//Health check route
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});