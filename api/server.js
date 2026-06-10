const express = require('express');
const app = express();
const path = require('path');

// Motivation Engine Quotes Data
const quotes = [
    "Your focus determines your reality.",
    "Starve your distractions, feed your focus.",
    "Deep work is the superpower of the 21st century.",
    "Action is the foundational key to all success.",
    "Keep your eyes on the stars, and your feet on the ground.",
    "Do it now. Sometimes 'later' becomes 'never'."
];

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../public')));

// Serverless API endpoint for Quotes
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

// For local testing
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;
