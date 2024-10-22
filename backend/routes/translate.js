// server/routes/translate.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Google Translate API Key from .env
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

router.post('/', async (req, res) => {
    const { text, targetLanguage } = req.body;

    try {
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, null, {
            params: {
                q: text,
                target: targetLanguage,
                key: GOOGLE_API_KEY,
            },
        });

        res.json(response.data.data.translations);
    } catch (error) {
        console.error('Error translating text:', error);
        res.status(500).json({ error: 'Translation error' });
    }
});

module.exports = router;
