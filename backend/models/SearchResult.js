// models/SearchResult.js
import mongoose from 'mongoose';

const searchResultSchema = new mongoose.Schema({
    query: { type: String, required: true },
    results: { type: Object, required: true },
});

const SearchResult = mongoose.model('SearchResult', searchResultSchema);
export default SearchResult; // Make sure you are using default export
