// routes/search.js
import express from 'express';
import SearchResult from '../models/SearchResult.js'; // Ensure this is correctly exported
import fetchDataFromAPIs from '../services/fetchDataFromAPIs.js'; // Correctly imports the default export

const router = express.Router();

router.get('/search', async (req, res) => {
    const { query } = req.query;

    try {
        // Check if the results are already cached in the database
        let cachedResult = await SearchResult.findOne({ query });

        if (cachedResult) {
            return res.json(cachedResult.results); // Return cached results
        }

        // If not cached, fetch data from APIs
        const results = await fetchDataFromAPIs(query);

        // Store the combined results in the database
        const newSearchResult = new SearchResult({
            query: query,
            results: results,
        });

        await newSearchResult.save(); // Save to the database

        // Return the results
        res.json(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router; // Export the router as default
