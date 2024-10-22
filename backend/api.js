// src/api.js
const STACK_OVERFLOW_API = 'https://api.stackexchange.com/2.3/search';
const REDDIT_API = 'https://www.reddit.com/search.json';

export const searchStackOverflow = async (query) => {
    const response = await fetch(`${STACK_OVERFLOW_API}?order=desc&sort=activity&intitle=${query}&site=stackoverflow`);
    const data = await response.json();
    return data.items; // Return only the items from the response
};

export const searchReddit = async (query) => {
    const response = await fetch(`${REDDIT_API}?q=${query}`);
    const data = await response.json();
    return data.data.children.map(child => child.data); // Return only the post data
};
